// V3XV0ID Supabase Configuration
const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const SUPABASE_URL = 'https://bgotvvrslolholxgcivz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnb3R2dnJzbG9saG9seGdjaXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3Mzg5MDgsImV4cCI6MjA1MDMxNDkwOH0.wK9sZQF8qLVH7vOhJKQ6eK5uJGl0xjBvN2fCzA8mP9E';

// Create Supabase client
let supabase = null;
try {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (error) {
  console.warn('⚠️ Supabase client creation failed, using demo mode');
}

// Storage bucket names
const BUCKETS = {
  MUSIC: 'v3xv0id-music',
  IMAGES: 'v3xv0id-images', 
  VIDEOS: 'v3xv0id-videos'
};

// V3XV0ID Cloud Content Manager
class V3XV0IDCloudManager {
  constructor() {
    this.supabase = supabase;
    this.buckets = BUCKETS;
    this.cache = {
      music: new Map(),
      images: new Map(),
      videos: new Map()
    };
    this.downloadQueue = [];
    this.isDownloading = false;
    this.demoMode = !supabase || SUPABASE_ANON_KEY.includes('placeholder');
  }

  // Initialize cloud connection
  async initialize() {
    try {
      console.log('🌐 Connecting to V3XV0ID Cloud...');
      
      if (this.demoMode) {
        console.log('🎭 Running in DEMO mode - using local content');
        return this.initializeDemoMode();
      }
      
      // Test connection
      const { data, error } = await this.supabase.storage.listBuckets();
      if (error) throw error;
      
      console.log('✅ Connected to V3XV0ID Cloud');
      console.log('📦 Available buckets:', data.map(b => b.name));
      
      return true;
    } catch (error) {
      console.error('❌ Failed to connect to V3XV0ID Cloud:', error);
      console.log('🎭 Falling back to DEMO mode');
      this.demoMode = true;
      return this.initializeDemoMode();
    }
  }

  // Initialize demo mode with local content
  async initializeDemoMode() {
    try {
      console.log('🎭 Initializing V3XV0ID DEMO mode...');
      
      // Create demo content directory structure
      const path = require('path');
      const os = require('os');
      const fs = require('fs');
      
      const demoDir = path.join(os.homedir(), '.v3xv0id-cache', 'demo');
      
      // Create directories
      ['music', 'images', 'videos'].forEach(dir => {
        const fullPath = path.join(demoDir, dir);
        if (!fs.existsSync(fullPath)) {
          fs.mkdirSync(fullPath, { recursive: true });
        }
      });
      
      // Create demo files (placeholders)
      this.createDemoContent(demoDir);
      
      console.log('✅ V3XV0ID DEMO mode ready');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize demo mode:', error);
      return false;
    }
  }

  // Create demo content files
  createDemoContent(demoDir) {
    const fs = require('fs');
    const path = require('path');
    
    // Create demo music files (empty MP3 files with metadata)
    const musicDir = path.join(demoDir, 'music');
    const demoTracks = [
      'V3XV0ID - Echoes in the Abyss.mp3',
      'V3XV0ID - Digital Shadows.mp3',
      'V3XV0ID - Cyber Dreams.mp3',
      'V3XV0ID - Neon Pulse.mp3',
      'V3XV0ID - Data Stream.mp3'
    ];
    
    demoTracks.forEach(track => {
      const filePath = path.join(musicDir, track);
      if (!fs.existsSync(filePath)) {
        // Create a minimal MP3 file (silent audio)
        const mp3Header = Buffer.from([
          0xFF, 0xFB, 0x90, 0x00, // MP3 header
          0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
          0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
        ]);
        fs.writeFileSync(filePath, mp3Header);
      }
    });
    
    // Create demo image placeholders
    const imagesDir = path.join(demoDir, 'images');
    for (let i = 1; i <= 20; i++) {
      const filePath = path.join(imagesDir, `v3xv0id-visual-${i.toString().padStart(2, '0')}.jpg`);
      if (!fs.existsSync(filePath)) {
        // Create a minimal JPEG file
        const jpegHeader = Buffer.from([
          0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
          0x01, 0x01, 0x00, 0x48, 0x00, 0x48, 0x00, 0x00, 0xFF, 0xD9
        ]);
        fs.writeFileSync(filePath, jpegHeader);
      }
    }
    
    // Create demo video placeholders
    const videosDir = path.join(demoDir, 'videos');
    for (let i = 1; i <= 10; i++) {
      const filePath = path.join(videosDir, `v3xv0id-motion-${i.toString().padStart(2, '0')}.mp4`);
      if (!fs.existsSync(filePath)) {
        // Create a minimal MP4 file
        const mp4Header = Buffer.from([
          0x00, 0x00, 0x00, 0x20, 0x66, 0x74, 0x79, 0x70, 0x69, 0x73, 0x6F, 0x6D,
          0x00, 0x00, 0x02, 0x00, 0x69, 0x73, 0x6F, 0x6D, 0x69, 0x73, 0x6F, 0x32
        ]);
        fs.writeFileSync(filePath, mp4Header);
      }
    }
    
    console.log('🎭 Demo content created');
  }

  // List files in a bucket (demo mode compatible)
  async listFiles(bucketName, folder = '') {
    try {
      if (this.demoMode) {
        return this.listDemoFiles(bucketName);
      }
      
      const { data, error } = await this.supabase.storage
        .from(bucketName)
        .list(folder, {
          limit: 100,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' }
        });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error(`❌ Failed to list files from ${bucketName}:`, error);
      return this.listDemoFiles(bucketName);
    }
  }

  // List demo files
  listDemoFiles(bucketName) {
    const path = require('path');
    const os = require('os');
    const fs = require('fs');
    
    const demoDir = path.join(os.homedir(), '.v3xv0id-cache', 'demo');
    let targetDir = '';
    
    switch (bucketName) {
      case this.buckets.MUSIC:
        targetDir = path.join(demoDir, 'music');
        break;
      case this.buckets.IMAGES:
        targetDir = path.join(demoDir, 'images');
        break;
      case this.buckets.VIDEOS:
        targetDir = path.join(demoDir, 'videos');
        break;
      default:
        return [];
    }
    
    if (!fs.existsSync(targetDir)) return [];
    
    return fs.readdirSync(targetDir).map(file => ({
      name: file,
      id: file,
      updated_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      last_accessed_at: new Date().toISOString(),
      metadata: null
    }));
  }

  // Get public URL for a file (demo mode compatible)
  getPublicUrl(bucketName, filePath) {
    try {
      if (this.demoMode) {
        const path = require('path');
        const os = require('os');
        const demoDir = path.join(os.homedir(), '.v3xv0id-cache', 'demo');
        
        let targetDir = '';
        switch (bucketName) {
          case this.buckets.MUSIC:
            targetDir = 'music';
            break;
          case this.buckets.IMAGES:
            targetDir = 'images';
            break;
          case this.buckets.VIDEOS:
            targetDir = 'videos';
            break;
        }
        
        return path.join(demoDir, targetDir, filePath);
      }
      
      const { data } = this.supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);
      
      return data.publicUrl;
    } catch (error) {
      console.error(`❌ Failed to get public URL for ${filePath}:`, error);
      return null;
    }
  }

  // Download file to local cache (demo mode compatible)
  async downloadFile(bucketName, filePath, localPath) {
    try {
      console.log(`⬇️ Downloading ${filePath}...`);
      
      if (this.demoMode) {
        // In demo mode, files are already "downloaded"
        console.log(`✅ Demo file ready: ${filePath}`);
        return true;
      }
      
      const { data, error } = await this.supabase.storage
        .from(bucketName)
        .download(filePath);

      if (error) throw error;

      const fs = require('fs');
      const path = require('path');
      
      // Ensure directory exists
      const dir = path.dirname(localPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write file
      const arrayBuffer = await data.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(localPath, buffer);

      console.log(`✅ Downloaded ${filePath} to ${localPath}`);
      return true;
    } catch (error) {
      console.error(`❌ Failed to download ${filePath}:`, error);
      return false;
    }
  }

  // Get all music tracks
  async getMusicTracks() {
    const files = await this.listFiles(this.buckets.MUSIC);
    return files.filter(file => 
      file.name.endsWith('.mp3') || 
      file.name.endsWith('.wav') || 
      file.name.endsWith('.m4a')
    );
  }

  // Get all image sequences
  async getImageSequences() {
    const files = await this.listFiles(this.buckets.IMAGES);
    return files.filter(file => 
      file.name.endsWith('.jpg') || 
      file.name.endsWith('.jpeg') || 
      file.name.endsWith('.png') || 
      file.name.endsWith('.gif')
    );
  }

  // Get all video files
  async getVideoFiles() {
    const files = await this.listFiles(this.buckets.VIDEOS);
    return files.filter(file => 
      file.name.endsWith('.mp4') || 
      file.name.endsWith('.mov') || 
      file.name.endsWith('.avi') || 
      file.name.endsWith('.webm') || 
      file.name.endsWith('.mkv')
    );
  }

  // Download V3XV0ID set content (demo mode compatible)
  async downloadV3XV0IDSet(setName = 'default') {
    try {
      console.log(`🎭 Downloading V3XV0ID Set: ${setName}`);
      
      const path = require('path');
      const os = require('os');
      
      if (this.demoMode) {
        const cacheDir = path.join(os.homedir(), '.v3xv0id-cache', 'demo');
        console.log(`✅ V3XV0ID DEMO Set ready at ${cacheDir}`);
        return cacheDir;
      }
      
      // Create cache directory
      const cacheDir = path.join(os.homedir(), '.v3xv0id-cache', setName);
      const fs = require('fs');
      if (!fs.existsSync(cacheDir)) {
        fs.mkdirSync(cacheDir, { recursive: true });
      }

      // Download music
      const musicTracks = await this.getMusicTracks();
      const musicDir = path.join(cacheDir, 'music');
      if (!fs.existsSync(musicDir)) fs.mkdirSync(musicDir, { recursive: true });

      for (const track of musicTracks.slice(0, 5)) { // Limit to first 5 tracks for now
        const localPath = path.join(musicDir, track.name);
        await this.downloadFile(this.buckets.MUSIC, track.name, localPath);
      }

      // Download images
      const images = await this.getImageSequences();
      const imagesDir = path.join(cacheDir, 'images');
      if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

      for (const image of images.slice(0, 20)) { // Limit to first 20 images
        const localPath = path.join(imagesDir, image.name);
        await this.downloadFile(this.buckets.IMAGES, image.name, localPath);
      }

      // Download videos
      const videos = await this.getVideoFiles();
      const videosDir = path.join(cacheDir, 'videos');
      if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true });

      for (const video of videos.slice(0, 10)) { // Limit to first 10 videos
        const localPath = path.join(videosDir, video.name);
        await this.downloadFile(this.buckets.VIDEOS, video.name, localPath);
      }

      console.log(`✅ V3XV0ID Set "${setName}" downloaded to ${cacheDir}`);
      return cacheDir;
    } catch (error) {
      console.error('❌ Failed to download V3XV0ID set:', error);
      return null;
    }
  }

  // Create performance sequence
  createPerformanceSequence(musicTrack, images, videos) {
    return {
      id: Date.now(),
      name: `V3XV0ID Sequence - ${musicTrack.name}`,
      music: musicTrack,
      visuals: {
        images: images,
        videos: videos
      },
      duration: 0, // Will be set based on music track duration
      crossfaderSettings: {
        autoMix: true,
        transitionDuration: 4000, // 4 seconds
        beatSync: true
      }
    };
  }

  // Get cached content directory
  getCacheDirectory(setName = 'default') {
    const path = require('path');
    const os = require('os');
    
    if (this.demoMode) {
      return path.join(os.homedir(), '.v3xv0id-cache', 'demo');
    }
    
    return path.join(os.homedir(), '.v3xv0id-cache', setName);
  }
}

module.exports = {
  V3XV0IDCloudManager,
  BUCKETS,
  supabase
}; 
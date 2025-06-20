// V3XV0ID Performance Sequencer
const { V3XV0IDCloudManager } = require('./supabase-config');
const V3XV0IDAudioManager = require('./audio-manager');

class V3XV0IDPerformanceSequencer {
  constructor() {
    this.cloudManager = new V3XV0IDCloudManager();
    this.audioManager = new V3XV0IDAudioManager();
    this.isPerformanceMode = false;
    this.currentSequence = null;
    this.sequences = [];
    this.visualSyncActive = false;
    this.autoSequenceEnabled = false;
    this.performanceCallbacks = [];
    
    // Visual content arrays
    this.imageSequences = [];
    this.videoSequences = [];
    this.currentImageIndex = 0;
    this.currentVideoIndex = 0;
    
    // Timing and sync
    this.lastBeatTime = 0;
    this.bpm = 120; // Default BPM
    this.beatInterval = 60000 / this.bpm; // ms per beat
    
    this.initializeAudioSync();
  }

  // Initialize audio-visual synchronization
  initializeAudioSync() {
    this.audioManager.onVisualSync((syncData) => {
      this.handleAudioVisualSync(syncData);
    });
  }

  // Initialize cloud connection and download V3XV0ID content
  async initialize() {
    try {
      console.log('🎭 Initializing V3XV0ID Performance System...');
      
      // Connect to cloud
      const connected = await this.cloudManager.initialize();
      if (!connected) {
        throw new Error('Failed to connect to V3XV0ID Cloud');
      }
      
      // Download V3XV0ID set
      const cacheDir = await this.cloudManager.downloadV3XV0IDSet();
      if (!cacheDir) {
        throw new Error('Failed to download V3XV0ID content');
      }
      
      // Load content from cache
      await this.loadCachedContent(cacheDir);
      
      // Create performance sequences
      this.createPerformanceSequences();
      
      console.log('✅ V3XV0ID Performance System ready!');
      return true;
      
    } catch (error) {
      console.error('❌ Failed to initialize V3XV0ID Performance System:', error);
      return false;
    }
  }

  // Load cached content from local directory
  async loadCachedContent(cacheDir) {
    const fs = require('fs');
    const path = require('path');
    
    try {
      // Load music tracks
      const musicDir = path.join(cacheDir, 'music');
      if (fs.existsSync(musicDir)) {
        const musicFiles = fs.readdirSync(musicDir)
          .filter(file => file.endsWith('.mp3') || file.endsWith('.wav') || file.endsWith('.m4a'))
          .map(file => path.join(musicDir, file));
        
        await this.audioManager.loadTracks(musicFiles);
        console.log(`🎵 Loaded ${musicFiles.length} music tracks`);
      }
      
      // Load image sequences
      const imagesDir = path.join(cacheDir, 'images');
      if (fs.existsSync(imagesDir)) {
        const imageFiles = fs.readdirSync(imagesDir)
          .filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.gif'))
          .map(file => path.join(imagesDir, file));
        
        this.imageSequences = imageFiles;
        console.log(`🖼️ Loaded ${imageFiles.length} images`);
      }
      
      // Load video sequences
      const videosDir = path.join(cacheDir, 'videos');
      if (fs.existsSync(videosDir)) {
        const videoFiles = fs.readdirSync(videosDir)
          .filter(file => file.endsWith('.mp4') || file.endsWith('.mov') || file.endsWith('.avi') || file.endsWith('.webm') || file.endsWith('.mkv'))
          .map(file => path.join(videosDir, file));
        
        this.videoSequences = videoFiles;
        console.log(`🎬 Loaded ${videoFiles.length} videos`);
      }
      
    } catch (error) {
      console.error('❌ Error loading cached content:', error);
    }
  }

  // Create performance sequences combining music with visuals
  createPerformanceSequences() {
    const tracks = this.audioManager.getTrackList();
    this.sequences = [];
    
    tracks.forEach((track, index) => {
      // Create visual sequence for each track
      const imageSlice = this.getImageSliceForTrack(index);
      const videoSlice = this.getVideoSliceForTrack(index);
      
      const sequence = {
        id: `v3xv0id-seq-${index}`,
        name: `V3XV0ID Set ${index + 1}: ${track.name}`,
        trackIndex: index,
        track: track,
        visuals: {
          images: imageSlice,
          videos: videoSlice
        },
        duration: track.duration,
        bpm: this.estimateBPM(track.duration), // Simple BPM estimation
        crossfaderSettings: {
          autoMix: true,
          imageChangeInterval: 4000, // Change images every 4 seconds
          videoChangeInterval: 8000,  // Change videos every 8 seconds
          paletteSwitch: 16000        // Switch palettes every 16 seconds
        }
      };
      
      this.sequences.push(sequence);
    });
    
    console.log(`🎭 Created ${this.sequences.length} performance sequences`);
  }

  // Get image slice for a specific track
  getImageSliceForTrack(trackIndex) {
    const imagesPerTrack = Math.ceil(this.imageSequences.length / this.audioManager.tracks.length);
    const startIndex = trackIndex * imagesPerTrack;
    const endIndex = Math.min(startIndex + imagesPerTrack, this.imageSequences.length);
    return this.imageSequences.slice(startIndex, endIndex);
  }

  // Get video slice for a specific track
  getVideoSliceForTrack(trackIndex) {
    const videosPerTrack = Math.ceil(this.videoSequences.length / this.audioManager.tracks.length);
    const startIndex = trackIndex * videosPerTrack;
    const endIndex = Math.min(startIndex + videosPerTrack, this.videoSequences.length);
    return this.videoSequences.slice(startIndex, endIndex);
  }

  // Simple BPM estimation based on track duration
  estimateBPM(duration) {
    // Estimate BPM based on typical electronic music patterns
    if (duration < 180) return 140; // Short tracks tend to be faster
    if (duration < 300) return 128; // Medium tracks
    return 120; // Longer tracks tend to be slower
  }

  // Start performance mode
  async startPerformance(sequenceId = null) {
    try {
      // Select sequence
      if (sequenceId) {
        this.currentSequence = this.sequences.find(seq => seq.id === sequenceId);
      } else {
        this.currentSequence = this.sequences[0];
      }
      
      if (!this.currentSequence) {
        throw new Error('No sequence available');
      }
      
      console.log(`🎭 Starting performance: ${this.currentSequence.name}`);
      
      // Select and play track
      this.audioManager.selectTrack(this.currentSequence.trackIndex);
      await this.audioManager.play();
      
      // Start visual sync
      this.startVisualSync();
      
      // Enable auto-sequence if multiple sequences available
      if (this.sequences.length > 1) {
        this.audioManager.startAutoMix();
        this.autoSequenceEnabled = true;
      }
      
      this.isPerformanceMode = true;
      this.notifyPerformanceCallbacks('performance-started', this.currentSequence);
      
      return true;
      
    } catch (error) {
      console.error('❌ Failed to start performance:', error);
      return false;
    }
  }

  // Stop performance mode
  stopPerformance() {
    console.log('🛑 Stopping performance');
    
    this.audioManager.stop();
    this.audioManager.stopAutoMix();
    this.stopVisualSync();
    
    this.isPerformanceMode = false;
    this.autoSequenceEnabled = false;
    this.currentSequence = null;
    
    this.notifyPerformanceCallbacks('performance-stopped');
  }

  // Pause/resume performance
  togglePerformance() {
    if (this.audioManager.isPlaying) {
      this.audioManager.pause();
      this.stopVisualSync();
      this.notifyPerformanceCallbacks('performance-paused');
    } else {
      this.audioManager.play();
      this.startVisualSync();
      this.notifyPerformanceCallbacks('performance-resumed');
    }
  }

  // Handle audio-visual synchronization
  handleAudioVisualSync(syncData) {
    if (!this.isPerformanceMode || !this.currentSequence) return;
    
    const { currentTime, progress, duration } = syncData;
    
    // Update BPM and beat timing
    this.bpm = this.currentSequence.bpm;
    this.beatInterval = 60000 / this.bpm;
    
    // Check for beat-based visual changes
    const currentBeat = Math.floor(currentTime * (this.bpm / 60));
    const lastBeat = Math.floor(this.lastBeatTime * (this.bpm / 60));
    
    if (currentBeat !== lastBeat) {
      this.handleBeatSync(currentBeat, progress);
    }
    
    this.lastBeatTime = currentTime;
    
    // Send sync data to performance callbacks
    this.notifyPerformanceCallbacks('visual-sync', {
      ...syncData,
      sequence: this.currentSequence,
      beat: currentBeat,
      bpm: this.bpm
    });
  }

  // Handle beat-synchronized visual changes
  handleBeatSync(beat, progress) {
    const settings = this.currentSequence.crossfaderSettings;
    
    // Change images based on beat intervals
    const imageChangeBeats = Math.floor(settings.imageChangeInterval / (this.beatInterval));
    if (beat % imageChangeBeats === 0) {
      this.advanceImageSequence();
    }
    
    // Change videos based on beat intervals
    const videoChangeBeats = Math.floor(settings.videoChangeInterval / (this.beatInterval));
    if (beat % videoChangeBeats === 0) {
      this.advanceVideoSequence();
    }
    
    // Switch palettes based on beat intervals
    const paletteChangeBeats = Math.floor(settings.paletteSwitch / (this.beatInterval));
    if (beat % paletteChangeBeats === 0) {
      this.switchPalette();
    }
  }

  // Advance to next image in sequence
  advanceImageSequence() {
    if (this.currentSequence.visuals.images.length === 0) return;
    
    this.currentImageIndex = (this.currentImageIndex + 1) % this.currentSequence.visuals.images.length;
    const nextImage = this.currentSequence.visuals.images[this.currentImageIndex];
    
    this.notifyPerformanceCallbacks('image-change', {
      imagePath: nextImage,
      index: this.currentImageIndex
    });
  }

  // Advance to next video in sequence
  advanceVideoSequence() {
    if (this.currentSequence.visuals.videos.length === 0) return;
    
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.currentSequence.visuals.videos.length;
    const nextVideo = this.currentSequence.visuals.videos[this.currentVideoIndex];
    
    this.notifyPerformanceCallbacks('video-change', {
      videoPath: nextVideo,
      index: this.currentVideoIndex
    });
  }

  // Switch between palette A and B
  switchPalette() {
    this.notifyPerformanceCallbacks('palette-switch', {
      timestamp: Date.now()
    });
  }

  // Start visual synchronization
  startVisualSync() {
    if (this.visualSyncActive) return;
    this.visualSyncActive = true;
    console.log('👁️ Visual sync started');
  }

  // Stop visual synchronization
  stopVisualSync() {
    if (!this.visualSyncActive) return;
    this.visualSyncActive = false;
    console.log('👁️ Visual sync stopped');
  }

  // Next sequence
  nextSequence() {
    if (!this.isPerformanceMode || this.sequences.length <= 1) return;
    
    const currentIndex = this.sequences.findIndex(seq => seq.id === this.currentSequence.id);
    const nextIndex = (currentIndex + 1) % this.sequences.length;
    const nextSequence = this.sequences[nextIndex];
    
    console.log(`⏭️ Switching to: ${nextSequence.name}`);
    
    this.currentSequence = nextSequence;
    this.audioManager.selectTrack(nextSequence.trackIndex);
    this.audioManager.play();
    
    // Reset visual indices
    this.currentImageIndex = 0;
    this.currentVideoIndex = 0;
    
    this.notifyPerformanceCallbacks('sequence-changed', nextSequence);
  }

  // Previous sequence
  previousSequence() {
    if (!this.isPerformanceMode || this.sequences.length <= 1) return;
    
    const currentIndex = this.sequences.findIndex(seq => seq.id === this.currentSequence.id);
    const prevIndex = (currentIndex - 1 + this.sequences.length) % this.sequences.length;
    const prevSequence = this.sequences[prevIndex];
    
    console.log(`⏮️ Switching to: ${prevSequence.name}`);
    
    this.currentSequence = prevSequence;
    this.audioManager.selectTrack(prevSequence.trackIndex);
    this.audioManager.play();
    
    // Reset visual indices
    this.currentImageIndex = 0;
    this.currentVideoIndex = 0;
    
    this.notifyPerformanceCallbacks('sequence-changed', prevSequence);
  }

  // Register performance callback
  onPerformanceEvent(callback) {
    this.performanceCallbacks.push(callback);
  }

  // Remove performance callback
  removePerformanceEvent(callback) {
    const index = this.performanceCallbacks.indexOf(callback);
    if (index > -1) {
      this.performanceCallbacks.splice(index, 1);
    }
  }

  // Notify all performance callbacks
  notifyPerformanceCallbacks(event, data = null) {
    this.performanceCallbacks.forEach(callback => {
      try {
        callback(event, data);
      } catch (error) {
        console.error('❌ Performance callback error:', error);
      }
    });
  }

  // Get performance status
  getPerformanceStatus() {
    return {
      isActive: this.isPerformanceMode,
      currentSequence: this.currentSequence,
      audioStatus: {
        isPlaying: this.audioManager.isPlaying,
        currentTime: this.audioManager.getCurrentTime(),
        duration: this.audioManager.getDuration(),
        progress: this.audioManager.getProgress(),
        volume: this.audioManager.volume
      },
      visualStatus: {
        syncActive: this.visualSyncActive,
        currentImageIndex: this.currentImageIndex,
        currentVideoIndex: this.currentVideoIndex,
        bpm: this.bpm
      },
      sequences: this.sequences.map(seq => ({
        id: seq.id,
        name: seq.name,
        duration: seq.duration,
        isCurrent: this.currentSequence && seq.id === this.currentSequence.id
      }))
    };
  }

  // Cleanup
  destroy() {
    this.stopPerformance();
    this.audioManager.destroy();
    this.performanceCallbacks = [];
    this.sequences = [];
    this.imageSequences = [];
    this.videoSequences = [];
  }
}

module.exports = V3XV0IDPerformanceSequencer; 
// V3XV0ID Audio Manager
class V3XV0IDAudioManager {
  constructor() {
    this.currentTrack = null;
    this.isPlaying = false;
    this.volume = 1.0;
    this.tracks = [];
    this.currentTrackIndex = 0;
    this.visualSyncCallbacks = [];
    this.visualSyncInterval = null;
    this.autoMixInterval = null;
    this.crossfadeStarted = false;
  }

  // Load audio track
  async loadTrack(filePath) {
    try {
      console.log(`🎵 Loading track: ${filePath}`);
      
      // Create audio element
      const audio = new Audio();
      audio.src = 'file://' + encodeURI(filePath);
      audio.volume = this.volume;
      
      const track = {
        audio: audio,
        filePath: filePath,
        name: require('path').basename(filePath),
        duration: 0,
        currentTime: 0,
        isLoaded: false
      };

      // Wait for metadata to load
      return new Promise((resolve, reject) => {
        audio.addEventListener('loadedmetadata', () => {
          track.duration = audio.duration;
          track.isLoaded = true;
          console.log(`✅ Track loaded: ${track.name} (${track.duration}s)`);
          resolve(track);
        });

        audio.addEventListener('error', (error) => {
          console.error(`❌ Failed to load track: ${filePath}`, error);
          reject(error);
        });

        audio.load();
      });
    } catch (error) {
      console.error(`❌ Error loading track: ${filePath}`, error);
      return null;
    }
  }

  // Load multiple tracks
  async loadTracks(filePaths) {
    console.log(`🎵 Loading ${filePaths.length} tracks...`);
    this.tracks = [];
    
    for (const filePath of filePaths) {
      const track = await this.loadTrack(filePath);
      if (track) {
        this.tracks.push(track);
      }
    }
    
    console.log(`✅ Loaded ${this.tracks.length} tracks`);
    return this.tracks;
  }

  // Play current track
  async play() {
    if (!this.currentTrack || !this.currentTrack.isLoaded) {
      console.warn('⚠️ No track loaded or track not ready');
      return;
    }

    try {
      await this.currentTrack.audio.play();
      this.isPlaying = true;
      
      console.log(`▶️ Playing: ${this.currentTrack.name}`);
      
      // Start visual sync
      this.startVisualSync();
      
    } catch (error) {
      console.error('❌ Failed to play track:', error);
    }
  }

  // Pause current track
  pause() {
    if (this.currentTrack && this.isPlaying) {
      this.currentTrack.audio.pause();
      this.isPlaying = false;
      console.log('⏸️ Paused');
      
      // Stop visual sync
      this.stopVisualSync();
    }
  }

  // Stop current track
  stop() {
    if (this.currentTrack) {
      this.currentTrack.audio.pause();
      this.currentTrack.audio.currentTime = 0;
      this.isPlaying = false;
      console.log('⏹️ Stopped');
      
      // Stop visual sync
      this.stopVisualSync();
    }
  }

  // Set volume (0.0 to 1.0)
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.currentTrack) {
      this.currentTrack.audio.volume = this.volume;
    }
  }

  // Select track by index
  selectTrack(index) {
    if (index >= 0 && index < this.tracks.length) {
      this.currentTrackIndex = index;
      this.currentTrack = this.tracks[index];
      this.currentTrack.audio.volume = this.volume;
      console.log(`🎵 Selected track: ${this.currentTrack.name}`);
      return this.currentTrack;
    }
    return null;
  }

  // Next track
  nextTrack() {
    const nextIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    return this.selectTrack(nextIndex);
  }

  // Previous track
  previousTrack() {
    const prevIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
    return this.selectTrack(prevIndex);
  }

  // Get current playback time
  getCurrentTime() {
    return this.currentTrack ? this.currentTrack.audio.currentTime : 0;
  }

  // Get track duration
  getDuration() {
    return this.currentTrack ? this.currentTrack.duration : 0;
  }

  // Get playback progress (0.0 to 1.0)
  getProgress() {
    if (!this.currentTrack || this.currentTrack.duration === 0) return 0;
    return this.getCurrentTime() / this.currentTrack.duration;
  }

  // Seek to time (in seconds)
  seekTo(time) {
    if (this.currentTrack) {
      this.currentTrack.audio.currentTime = Math.max(0, Math.min(time, this.currentTrack.duration));
    }
  }

  // Start visual synchronization
  startVisualSync() {
    if (this.visualSyncInterval) return;
    
    this.visualSyncInterval = setInterval(() => {
      if (this.isPlaying && this.currentTrack) {
        const currentTime = this.getCurrentTime();
        const progress = this.getProgress();
        
        // Call all registered sync callbacks
        this.visualSyncCallbacks.forEach(callback => {
          try {
            callback({
              currentTime,
              progress,
              duration: this.getDuration(),
              trackName: this.currentTrack.name,
              isPlaying: this.isPlaying
            });
          } catch (error) {
            console.error('❌ Visual sync callback error:', error);
          }
        });
      }
    }, 50); // 20fps sync rate
  }

  // Stop visual synchronization
  stopVisualSync() {
    if (this.visualSyncInterval) {
      clearInterval(this.visualSyncInterval);
      this.visualSyncInterval = null;
    }
  }

  // Register callback for visual sync
  onVisualSync(callback) {
    this.visualSyncCallbacks.push(callback);
  }

  // Remove visual sync callback
  removeVisualSync(callback) {
    const index = this.visualSyncCallbacks.indexOf(callback);
    if (index > -1) {
      this.visualSyncCallbacks.splice(index, 1);
    }
  }

  // Auto-mix mode: automatically transition between tracks
  startAutoMix() {
    if (this.autoMixInterval) return;
    
    console.log('🎭 Starting auto-mix mode');
    
    this.autoMixInterval = setInterval(() => {
      if (this.isPlaying && this.currentTrack) {
        const timeLeft = this.getDuration() - this.getCurrentTime();
        
        // Auto-advance to next track when current ends
        if (timeLeft <= 1 && !this.crossfadeStarted) {
          this.crossfadeStarted = true;
          setTimeout(() => {
            this.nextTrack();
            this.play();
            this.crossfadeStarted = false;
          }, 1000);
        }
        
        // Reset crossfade flag when new track starts
        if (timeLeft > 5) {
          this.crossfadeStarted = false;
        }
      }
    }, 1000); // Check every second
  }

  // Stop auto-mix mode
  stopAutoMix() {
    if (this.autoMixInterval) {
      clearInterval(this.autoMixInterval);
      this.autoMixInterval = null;
      this.crossfadeStarted = false;
      console.log('⏹️ Auto-mix stopped');
    }
  }

  // Get track list for UI
  getTrackList() {
    return this.tracks.map((track, index) => ({
      index,
      name: track.name,
      duration: track.duration,
      isLoaded: track.isLoaded,
      isCurrent: index === this.currentTrackIndex
    }));
  }

  // Cleanup
  destroy() {
    this.stop();
    this.stopVisualSync();
    this.stopAutoMix();
    
    this.tracks = [];
    this.visualSyncCallbacks = [];
  }
}

module.exports = V3XV0IDAudioManager; 
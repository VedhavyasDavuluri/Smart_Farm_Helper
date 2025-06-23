interface TextToSpeechOptions {
  text: string;
  language?: 'te' | 'en' | 'hi';
  rate?: number;
  pitch?: number;
  volume?: number;
}

class TextToSpeechService {
  private synthesis: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    this.synthesis = window.speechSynthesis;
    this.loadVoices();
  }

  private loadVoices() {
    const updateVoices = () => {
      this.voices = this.synthesis.getVoices();
    };

    updateVoices();
    if (this.synthesis.onvoiceschanged !== undefined) {
      this.synthesis.onvoiceschanged = updateVoices;
    }
  }

  private getVoice(language: string): SpeechSynthesisVoice | null {
    // Try to find specific language voice first
    if (language === 'te') {
      const teluguVoice = this.voices.find(voice => 
        voice.lang.includes('te') || 
        voice.name.toLowerCase().includes('telugu')
      );
      if (teluguVoice) return teluguVoice;
    }

    if (language === 'hi') {
      const hindiVoice = this.voices.find(voice => 
        voice.lang.includes('hi') || 
        voice.name.toLowerCase().includes('hindi')
      );
      if (hindiVoice) return hindiVoice;
    }

    // Fallback to English or default voice
    const englishVoice = this.voices.find(voice => 
      voice.lang.includes('en')
    );
    
    return englishVoice || this.voices[0] || null;
  }

  speak(options: TextToSpeechOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.synthesis) {
        reject(new Error('Speech synthesis not supported'));
        return;
      }

      // Cancel any ongoing speech
      this.synthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(options.text);
      
      // Set voice
      const voice = this.getVoice(options.language || 'en');
      if (voice) {
        utterance.voice = voice;
      }

      // Set properties
      utterance.rate = options.rate || 0.9;
      utterance.pitch = options.pitch || 1;
      utterance.volume = options.volume || 1;

      // Set language
      if (options.language === 'te') {
        utterance.lang = 'te-IN';
      } else if (options.language === 'hi') {
        utterance.lang = 'hi-IN';
      } else {
        utterance.lang = 'en-US';
      }

      utterance.onend = () => resolve();
      utterance.onerror = (event) => reject(new Error(`Speech error: ${event.error}`));

      this.synthesis.speak(utterance);
    });
  }

  stop() {
    if (this.synthesis) {
      this.synthesis.cancel();
    }
  }

  pause() {
    if (this.synthesis) {
      this.synthesis.pause();
    }
  }

  resume() {
    if (this.synthesis) {
      this.synthesis.resume();
    }
  }

  isSupported(): boolean {
    return 'speechSynthesis' in window;
  }

  isSpeaking(): boolean {
    return this.synthesis ? this.synthesis.speaking : false;
  }
}

export const textToSpeechService = new TextToSpeechService();

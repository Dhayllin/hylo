import { create } from "zustand";
import { Howl } from "howler";
import bgMusic from "../assets/music/hylo-background.mp3";

interface AudioState {
  isPlaying: boolean;
  volume: number;
  toggleMusic: () => void;
  setVolume: (v: number) => void;
}

const sound = new Howl({
  src: [bgMusic],
  loop: true,
  volume: 0.5,
  preload: true,
  onplay: () => {
    audioStoreSet && audioStoreSet({ isPlaying: true });
  },
  onpause: () => {
    audioStoreSet && audioStoreSet({ isPlaying: false });
  },
  onstop: () => {
    audioStoreSet && audioStoreSet({ isPlaying: false });
  },
});

let audioStoreSet: ((state: Partial<AudioState>) => void) | null = null;

export const useAudioStore = create<AudioState>((set, get) => {
  audioStoreSet = set;
  return {
    isPlaying: sound.playing(),
    volume: sound.volume(),
    toggleMusic: () => {
      if (sound.playing()) {
        sound.pause();
      } else {
        sound.play();
      }
    },
    setVolume: (v) => {
      sound.volume(v);
      set({ volume: v });
    },
  };
});

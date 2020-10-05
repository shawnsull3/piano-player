/// <reference types="react-scripts" />

// AudioContexType = type of window.AudioContext
type AudioContextType = typeof AudioContext
type SoundfontType = typeof Soundfont

interface Window extends Window {
  webkitAudioContext: AudioContextType
}
/// <reference types="react-scripts" />

// AudioContexType = type of window.AudioContext
type AudioContextType = typeof AudioContext

interface Window extends Window {
  webkitAudioContext: AudioContextType
}
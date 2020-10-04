const C1_MIDI_NUMBER = 24
const C4_MIDI_NUMBER = 60
const B5_MIDI_NUMBER = 83

export const LOWER_NOTE = C4_MIDI_NUMBER
export const HIGHER_NOTE = B5_MIDI_NUMBER
export const SEMITONES_IN_OCTAVE = 12

export type NoteType = "natural" | "flat" | "sharp"
export type NotePitch = "A" | "B" | "C" | "D" | "E" | "F" | "G"
export type OctaveIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type MidiValue = number
export type PitchIndex = number

export interface Note {
    midi: MidiValue     // a number in Octave Notation
    type: NoteType      // which note it is: natural or sharp
  
    pitch: NotePitch    // a literal representation of a note’s pitch
    index: PitchIndex   // an index of notes in an octave
    octave: OctaveIndex // an octave index of a given note
}

export const NATURAL_PITCH_INDICES: PitchIndex[] = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
]
  
export const PITCHES_REGISTRY: Record<PitchIndex, NotePitch> = {
    0: "C",
    1: "C",
    2: "D",
    3: "D",
    4: "E",
    5: "F",
    6: "F",
    7: "G",
    8: "G",
    9: "A",
    10: "A",
    11: "B"
}

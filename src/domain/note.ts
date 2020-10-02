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


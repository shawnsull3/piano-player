import { InstrumentName } from "soundfont-player"
import instruments from "soundfont-player/names/musyngkite.json"

interface Option {
  value: InstrumentName
  label: string
}

type OptionsList = Option[]
type InstrumentList = InstrumentName[]

function normalizeList(list: InstrumentList): OptionsList {
  return list.map((instrument) => ({
    value: instrument,
    label: instrument.replace(/_/gi, " ") // replace underscores with spaces for readability
  }))
}

export const options = normalizeList(instruments as InstrumentList)

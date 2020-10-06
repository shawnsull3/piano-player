import React, { FunctionComponent, ChangeEvent } from "react"
import { InstrumentName } from "soundfont-player"
import { useInstrument } from "../../state/Instrument"
import { options } from "./options"
import "./style.css"

export const InstrumentSelector: FunctionComponent = () => {
  const { instrument, setInstrument } = useInstrument()
  const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    document.getElementById('instruments')!.blur()
    setInstrument(target.value as InstrumentName)
  }

  return (
    <select
      className="instruments"
      id="instruments"
      onChange={updateValue}
      value={instrument}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

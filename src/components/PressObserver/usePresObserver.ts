import { useState } from "react"
import { Key as KeyLabel } from "../../domain/keyboard"

type IsPressed = boolean
type EventCode = string

interface Settings {
  watchKey: KeyLabel
  onStartPress: Function
  onFinishPress: Function
}

export function usePressObserver({
    watchKey,
    onStartPress,
    onFinishPress
}: Settings): IsPressed {
    const [pressed, setPressed] = useState<IsPressed>(false)
  
    return pressed
}
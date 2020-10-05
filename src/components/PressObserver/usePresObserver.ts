import { useEffect, useState } from "react"
import { Key as KeyLabel } from "../../domain/keyboard"

type IsPressed = boolean
type EventCode = string

interface Settings {
  watchKey: KeyLabel
  onStartPress: Function
  onFinishPress: Function
}

function fromEventCode(code: EventCode): KeyLabel {
    const prefixRegex = /Key|Digit/gi
    return code.replace(prefixRegex, "")
}
  
function equal(watchedKey: KeyLabel, eventCode: EventCode): boolean {
    return (
      fromEventCode(eventCode).toUpperCase() ===
      watchedKey.toUpperCase()
    )
}

export function usePressObserver({
    watchKey,
    onStartPress,
    onFinishPress
}: Settings): IsPressed {
    const [pressed, setPressed] = useState<IsPressed>(false)
  
    useEffect(() => {
        function handlePressStart({ code }: KeyboardEvent): void {
          if (pressed || !equal(watchKey, code)) return // if already pressed or not target don't do anything
          setPressed(true)
          onStartPress()
        }
    
        function handlePressFinish({ code }: KeyboardEvent): void {
          if (!pressed || !equal(watchKey, code)) return
          setPressed(false)
          onFinishPress()
        }
    
        document.addEventListener("keydown", handlePressStart)
        document.addEventListener("keyup", handlePressFinish)
    
        // remove event listeners from a cleanup function to prevent memory leaks and unwanted event handlers calls.
        return () => {
          document.removeEventListener("keydown", handlePressStart)
          document.removeEventListener("keyup", handlePressFinish)
        }
    }, [watchKey, pressed, setPressed, onStartPress, onFinishPress])
    
    return pressed
}
import React, { useState } from "react"
import "./App.scss"
import { StartStopButton } from "./components/start-stop-button/start-stop-button.component"

export function App() {
  const [state, setState] = useState({ global: { running: false } })

  function toggleStartStop() {
    setState((prevState) => ({
      global: {
        ...prevState.global,
        running: prevState.global.running === true ? false : true,
      },
    }))
  }

  return (
    <div>
      <StartStopButton
        action={toggleStartStop}
        running={state.global.running}
      />
    </div>
  )
}

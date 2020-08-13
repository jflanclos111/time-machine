import React, { useEffect } from "react"
import "./start-stop-button.styles.scss"
import { Button } from "../button/button.component"
import { Icon } from "@material-ui/core"
import PlayArrow from "@material-ui/icons/PlayArrow"
import PauseIcon from "@material-ui/icons/Pause"

export function StartStopButton(props) {
  function handleClick() {
    props.action()
  }

  useEffect(() => {}, [props.running])

  return (
    <div>
      <Button
        action={handleClick}
        text={props.running === true ? <PauseIcon /> : <PlayArrow />}
      ></Button>
    </div>
  )
}

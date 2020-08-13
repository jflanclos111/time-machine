import React from "react"
import "./button.styles.scss"

export function Button(props) {
  return (
    <div className="button" onClick={props.action}>
      {props.text}
    </div>
  )
}

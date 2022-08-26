import React from 'react'
import '../Game.scss'

const DesktopApp = (name, picture) => {
  return (
    <div className="application">
        <img src={picture} alt={name} />
        <h1>{name}</h1>
    </div>
  )
}

export default DesktopApp
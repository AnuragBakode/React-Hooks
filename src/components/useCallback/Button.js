import React from 'react'

function Button({title, handleClick}) {
  console.log("Button Clicked" + title)
  return (
    <div>
        <button onClick = {handleClick}>Increment {title}</button>
    </div>
  )
}

export default React.memo(Button)
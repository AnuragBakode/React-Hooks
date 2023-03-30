import React, { useState, useEffect } from 'react'

function HookCounter1() {
  const [count , setCount ]  = useState(0)
  const [name , setName] = useState('')

  useEffect(()=>{
    console.log("UseEffect - Updating document title")
    document.title =  `Clicked ${count} times`

    return () => {
      console.log("CleanUp code i.e Component will unmount")
    }

  }, [count])

  return (
    <div>
      <input type = "text" value = {name} onChange = {e => setName(e.target.value)} />
        <button onClick = {() => setCount(count + 1)}>Click {count}</button>
    </div>
  )
}

export default HookCounter1
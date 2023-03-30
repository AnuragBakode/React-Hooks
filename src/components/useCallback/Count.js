import React from 'react'

function Count({title , value}) {
    console.log(title)
  return (
    <div>{title} = {value}</div>
  )
}

export default React.memo(Count)
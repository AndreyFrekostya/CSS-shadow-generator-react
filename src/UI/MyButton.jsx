import React from 'react'

const MyButton = (props) => {
  return (
    <div className="button2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.title}
    </div>
  )
}

export default MyButton
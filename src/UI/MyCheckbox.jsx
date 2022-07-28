import React, { useEffect, useState } from 'react'

const MyCheckbox = (props) => {
  const [inset, setInset]=useState(props.isInset)
  const set=()=>{
    setInset(!inset)
  }
  useEffect(()=>{
    props.checkIsInset(inset)
  }, [inset])
  return (
    <>
        
        <input type="checkbox" onClick={set}/>
    </>
    )
}

export default MyCheckbox
import React, { useState,useEffect, useMemo } from 'react'

const MyInputColor = (props) => {
    const [valueInput, setValueColor]=useState(props.value)
  useEffect(()=>{
    props.checkColor(valueInput)
  }, [valueInput])
  return (
    <>
        <div className="container">
            <div className='wrap'>
                <input type="color" value={valueInput} id="style1" onChange={e=>setValueColor(e.target.value)}/>
            </div>
            <label htmlFor="style1"></label>
        </div>
    </>
  )
}

export default MyInputColor
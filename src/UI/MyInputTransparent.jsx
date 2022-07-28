import React, { useState,useEffect} from 'react'

const MyInputTransparent = (props) => {
    const [valueInput, setValue]=useState(props.value)
    let valueNum=Number(valueInput)*100
    let leftTrans=valueNum+11
    if(valueNum<1){
        leftTrans=0
    }
    if(valueNum<15){
        leftTrans=valueNum+6
    }
    if(valueNum>24){
        leftTrans=valueNum+13
    }
    if(valueNum>26){
        leftTrans=valueNum+17
    }
    if(valueNum>33){
        leftTrans=valueNum+20
    }
    if(valueNum>38){
        leftTrans=valueNum+23
    }
    if(valueNum>42){
        leftTrans=valueNum+26
    }
    if(valueNum>46){
        leftTrans=valueNum+30
    }
    if(valueNum>55){
        leftTrans=valueNum+35
    }
    if(valueNum>63){
        leftTrans=valueNum+43
    }
    if(valueNum>76){
        leftTrans=valueNum+52
    }
    if(valueNum>91){
        leftTrans=valueNum+59
    }
    if(valueNum>99){
        leftTrans=valueNum+66
    }
    
    const obj={
        marginLeft: leftTrans+'px'
    }
    useEffect(()=>{
        props.checkTrans(valueInput)
    }, [valueInput])
  return (
    <>
        <div className="range">
            <div className='range_num' style={obj}>
                <h3>{valueInput}</h3>
            </div>
            <div className='field'>
                <div className="value left">0</div>
                <input type="range" value={valueInput} min='0' max='1' step='0.01' onInput={e=>setValue(e.target.value)}/>
            <div className="value right">1</div>
            </div>
        </div>
    </>
  )
}

export default MyInputTransparent
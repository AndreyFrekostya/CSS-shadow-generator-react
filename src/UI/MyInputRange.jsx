import React, { useState, useEffect} from 'react'

const MyInputRange = (props) => {
    const [valueInput, setValue]=useState(props.value)
    let valueNum=Number(valueInput)
    let leftTrans=valueNum+83
    if(valueNum>10){
        leftTrans=valueNum+80
    }
    if(valueNum>37){
        leftTrans=valueNum+76
    }
    if(valueNum>29){
        leftTrans=valueNum+76
    }
    if(valueNum>55){
        leftTrans=valueNum+72
    }
    if(valueNum>80){
        leftTrans=valueNum+67
    }
    if(valueNum<-20){
        leftTrans=valueNum+87
    }
    if(valueNum<-35){
        leftTrans=valueNum+89
    }
    if(valueNum<-48){
        leftTrans=valueNum+90
    }
    if(valueNum<-75){
        leftTrans=valueNum+94
    }
    if(valueNum<-99){
        leftTrans=valueNum+96
    }
    const obj={
        marginLeft: leftTrans+'px'
    }
    const handlerChange=(e)=>{
        setValue(e.target.value)
    }
    useEffect(()=>{
        props.checkSetting(valueInput)
    }, [valueInput])
  return (
    <>
        <div className="range">
            <div className='range_num' style={obj}>
                <h3>{valueInput}</h3>
            </div>
            <div className='field'>
                <div className="value left">-100px</div>
                <input type="range" value={valueInput} min='-100' max='100' step='1' onInput={handlerChange}/>
            <div className="value right">100px</div>
            </div>
        </div>
    </>
  )
}

export default MyInputRange
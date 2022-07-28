import React, { useState,useMemo, useEffect } from 'react'
import MyButton from '../../UI/MyButton'

const ShowBox = (props) => {
    const boxShadow='box-shadow'
    const gradient='gradient'
    const cssCod='{CSS}'
    const obj={
        boxShadow: props.styleCss,
        backgroundColor: props.color_block
    }

  return (
    <div className='show_box'>
        <div className='wrapper_result'>
            <div className='shadow_gradient'>
                <MyButton title={boxShadow}/>
                <MyButton title={gradient}/>  
            </div>
            <div className='Forbox' style={{backgroundColor: props.background_color}}>
                <div className='box' style={obj}>

                </div>
            </div>
            <div className='css_cod'>
                <h2><span>{cssCod}</span> код для вставки:</h2>
                <div className='result_code'>
                    <h4 className='one_stroke'>{props.cssCode.webkit}</h4>
                    <h4 className='two_stroke'>{props.cssCode.moz}</h4>
                    <h4 className='three_stroke'>{props.cssCode.box}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowBox
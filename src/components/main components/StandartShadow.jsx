import React, { useState } from 'react'
import MyInputColor from '../../UI/MyInputColor'
const StandartShadow = (props) => {
    const StandartShadow=(number)=>{
        props.shadowReplacement(number)
    }
  return (
    <div className='StandartShadow'>
        <div className='StandartShadow_wrapper'>
            <div className='custom'>
                <h3>Кастомизируйте блок:</h3>
                <div className='custom_block'>
                    <p>Цвет блока</p>
                    <p>Цвет фона</p>
                    <MyInputColor value={props.color_block} checkColor={props.setColor_block}/>
                    <MyInputColor value={props.background_color} checkColor={props.setBackground_color}/>
                </div>
            </div>
            <div className='done_shadow'>
                <h3>Готовые тени:</h3>
                <div className='shadows'>
                    <div onClick={()=>StandartShadow('1')}>1</div>
                    <div onClick={()=>StandartShadow('2')}>2</div>
                    <div onClick={()=>StandartShadow('3')}>3</div>
                    <div onClick={()=>StandartShadow('4')}>4</div>
                    <div onClick={()=>StandartShadow('5')}>5</div>
                    <div onClick={()=>StandartShadow('6')}>6</div>
                    <div onClick={()=>StandartShadow('7')}>7</div>
                    <div onClick={()=>StandartShadow('8')}>8</div>
                    <div onClick={()=>StandartShadow('9')}>9</div>
                    <div onClick={()=>StandartShadow('10')}>10</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StandartShadow
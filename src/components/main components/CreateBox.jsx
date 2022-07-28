import React, { useState,useMemo, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport} from '@fortawesome/free-solid-svg-icons'
import { faHandRock,faIdCard} from '@fortawesome/free-regular-svg-icons'
import MyCheckbox from '../../UI/MyCheckbox'
import MyInputRange from '../../UI/MyInputRange'
import MyInputColor from '../../UI/MyInputColor'
import MyInputTransparent from '../../UI/MyInputTransparent'
import MyInputBlur from '../../UI/MyInputBlur'
const CreateBox = (props) => {
    const [isActiveRepost, setIsActiveRepost]=useState(false)
    const howRepost=()=>{
        setIsActiveRepost(!isActiveRepost)
    }
    //code for setting
    //get inset
    const checkIsInset=(stat)=>{
        props.setIsInset(stat)
    }
    //get range
  return (
    <div className='create_box'>
        <div className='wrapper'>
            <div className='article'>
                <div>
                    <h1>CSS <br />BOX-SHADOW <br />GENERATOR</h1>
                </div>
                <div className={ isActiveRepost ? 'repost' : 'no_active_repost'}>
                    <FontAwesomeIcon icon={faHandRock} />
                </div>
                <div className={ isActiveRepost ? 'repost' : 'no_active_repost'}>
                    <FontAwesomeIcon icon={faIdCard}/>
                </div>
                <div className='repost' onClick={howRepost}>
                    <FontAwesomeIcon icon={faFileImport}/>
                </div>
            </div>
            <div className='check_variable_shadow'>
                <h3>Настройте параметры тени:</h3>
                <div className='inset_check'>
                    <h4>Внешняя</h4>
                    <MyCheckbox isInset={props.isInset} checkIsInset={checkIsInset}/>
                    <h4>Внутренняя</h4>
                </div>
            </div>
            <div className='horizontal_and_vertical'>
                <h4 className='horizontal'>Горизонтальное смещение</h4>
                <MyInputRange value={props.horizontal} checkSetting={props.setHorizontal}/>
                <h4 className='vertical'>Вертикальное смещение</h4>
                <MyInputRange value={props.vertical} checkSetting={props.setVertical}/>
            </div>
            <div className='horizontal_and_vertical'>
                <h4 className='horizontal'>Размытие</h4>
                <MyInputBlur value={props.blur} checkSetting={props.setBlur}/>
                <h4 className='vertical'>Растяжение</h4>
                <MyInputRange value={props.stretching} checkSetting={props.setStretching}/>
            </div>
            <div className='choose_color'>
                <h5>Цвет тени</h5>
                <MyInputColor value={props.shadowColor} checkColor={props.setShadowcolor}/>
            </div>
            <div className='transparens'>
                <h5>Прозрачность</h5>
                <MyInputTransparent value={props.transparency} checkTrans={props.setTransparency}/>
            </div>
        </div>
    </div>
  )
  }
export default CreateBox
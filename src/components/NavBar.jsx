import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencil,faPalette,faServer,faQuoteRight,faDollar} from '@fortawesome/free-solid-svg-icons'
import CSSgen from './CSSgen.svg'
import Grad from './Grad.svg'
const NavBar = () => {
    const [isActiveFocus, setIsActiveFocus]=useState(false)
    const blurMenu=(status, e)=>{
        if(status==='input'){
            setIsActiveFocus(true)
        }
        if(status==='leave'){
            setIsActiveFocus(false)
        }
    }
  return (
    <>
        <div className={isActiveFocus ? 'blur_block' : 'not_blur'} onMouseOver={()=>blurMenu('leave')}>

        </div>
        <div className={isActiveFocus ? 'blur' : 'not_blur'}> 
            <div className='blur_wrapper' onMouseOver={()=>blurMenu('input')}>
                <h3>CSS ГЕНЕРАТОРЫ</h3>
                <div className='for_hover'>
                    <div className='row_generator1'>
                        <div>
                            <img src={CSSgen}></img>
                        </div>
                        <div>
                            <h4 className='gener'>Box-shadow generator</h4>
                            <h4 className='opuc'>Создание CSS теней</h4>
                        </div>
                    </div>
                </div>
                <div className='for_hover'>
                    <div className='row_generator3'>
                        <div>
                            <img src={Grad}></img>
                        </div>
                        <div>
                            <h4 className='gener'>Gradient generator</h4>
                            <h4 className='opuc'>Создание CSS градиента</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='nav_bar'>
            <div className='iconItem' onMouseOver={()=>blurMenu('input')}>
                <div className='for_icon_hover'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faPencil} /> 
                    </div>
                </div>
                <div className='nav_article'>
                    <h3>Студия</h3>
                </div>
            </div>
            <div className='iconItem' onMouseOver={()=>blurMenu('input')}>
                <div className='for_icon_hover'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faPalette} /> 
                    </div>
                </div>
                <div className='nav_article'>
                    <h3>Иконки</h3>
                </div>
            </div>
            <div className='iconItem' onMouseOver={()=>blurMenu('input')}>
                <div className='for_icon_hover'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faServer} /> 
                    </div>
                </div>
                <div className='nav_article'>
                    <h3>Сервисы</h3>
                </div>
            </div>
            <div className='iconItem' onMouseOver={()=>blurMenu('input')}>
                <div className='for_icon_hover'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faQuoteRight} /> 
                    </div>
                </div>
                <div className='nav_article'>
                    <h3>Блог</h3>
                </div>
            </div>
            <div className='iconItem' onMouseOver={()=>blurMenu('input')}>
                <div className='for_icon_hover'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faDollar} /> 
                    </div>
                </div>
                <div className='nav_article'>
                    <h3>YouTube</h3>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default NavBar
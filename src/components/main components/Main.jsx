import React, { useMemo, useState } from 'react'
import CreateBox from './CreateBox'
import ShowBox from './ShowBox'
import StandartShadow from './StandartShadow'
const Main = () => {
  const [isInset, setIsInset]=useState(false)
  const [horizontal, setHorizontal]=useState(4)
  const [vertical, setVertical]=useState(4)
  const [blur, setBlur]=useState(8)
  const [stretching, setStretching]=useState(0)
  const [shadowColor, setShadowcolor]=useState('#223c50')
  const [transparency, setTransparency]=useState(0.2)
  const [color_block, setColor_block]=useState('#ffffff')
  const [background_color, setBackground_color]=useState('#F9F9FD')
  const [cssCode, setCssCode]=useState({
    webkit:'-webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);',
    moz:'-moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);',
    box:'box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);'
  })
  const [styleCss, setStyleCss]=useState('4px 4px 8px 0px rgba(34, 60, 80, 0.2);')
  function hex2rgb(c) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return result ? parseInt(result[1], 16)+', '+parseInt(result[2], 16)+', '+parseInt(result[3], 16): null;
  }
  const shadowReplacement=(stat)=>{
    if(stat==1){
      setIsInset(false)
      setHorizontal(0)
      setVertical(5)
      setBlur(10)
      setStretching(2)
    }
    if(stat==2){
      setIsInset(true)
      setHorizontal(0)
      setVertical(5)
      setBlur(10)
      setStretching(2)
    }
    if(stat==3){
      setIsInset(false)
      setHorizontal(0)
      setVertical(-5)
      setBlur(5)
      setStretching(-5)
    }
    if(stat==4){
      setIsInset(true)
      setHorizontal(0)
      setVertical(5)
      setBlur(5)
      setStretching(-5)
    }
    if(stat==5){
      setIsInset(false)
      setHorizontal(0)
      setVertical(5)
      setBlur(5)
      setStretching(-5)
    }
    if(stat==6){
      setIsInset(true)
      setHorizontal(0)
      setVertical(-5)
      setBlur(5)
      setStretching(-5)
    }
    if(stat==7){
      setIsInset(false)
      setHorizontal(5)
      setVertical(5)
      setBlur(5)
      setStretching(-5)
    }
    if(stat==8){
      setIsInset(true)
      setHorizontal(-5)
      setVertical(-5)
      setBlur(5)
      setStretching(-5)
    }
    if(stat==9){
      setIsInset(false)
      setHorizontal(-5)
      setVertical(-5)
      setBlur(5)
      setStretching(-5)
    }
    if(stat==10){
      setIsInset(true)
      setHorizontal(5)
      setVertical(5)
      setBlur(5)
      setStretching(-5)
    }
  }
  useMemo(()=>{
    let colorShadow=hex2rgb(shadowColor)
    if(isInset===true){
      cssCode.webkit='-webkit-box-shadow: '+horizontal+'px '+vertical+'px '+blur+'px '+stretching+'px rgba('+colorShadow+', '+transparency+ ') inset;'
      cssCode.moz='-moz-box-shadow: '+horizontal+'px '+vertical+'px '+blur+'px '+stretching+'px rgba('+colorShadow+', '+transparency+ ') inset;'
      cssCode.box='box-shadow: '+horizontal+'px '+vertical+'px '+blur+'px '+stretching+'px rgba('+colorShadow+', '+transparency+ ') inset;'
      setStyleCss(horizontal+'px '+vertical+'px '+blur+'px '+stretching+'px rgba('+colorShadow+', '+transparency+ ') inset')
    }else{
      cssCode.webkit='-webkit-box-shadow: '+horizontal+'px '+vertical+'px '+blur+'px '+stretching+'px rgba('+colorShadow+', '+transparency+ ');'
      cssCode.moz='-moz-box-shadow: '+horizontal+'px '+vertical+'px '+blur+'px '+stretching+'px rgba('+colorShadow+', '+transparency+ ');'
      cssCode.box='box-shadow: '+horizontal+'px '+vertical+'px '+blur+'px '+stretching+'px rgba('+colorShadow+', '+transparency+ ');'
      setStyleCss(horizontal+'px '+vertical+'px '+blur+'px '+stretching+'px rgba('+colorShadow+', '+transparency+ ')')
    }
  }, [horizontal,isInset, vertical,blur,stretching,shadowColor,transparency,color_block,background_color])
  return (
    <>
      <CreateBox  
      vertical={vertical} 
      setVertical={setVertical}
      horizontal={horizontal}
      setHorizontal={setHorizontal}
      blur={blur}
      setBlur={setBlur}
      stretching={stretching}
      setStretching={setStretching}
      shadowColor={shadowColor}
      setShadowcolor={setShadowcolor}
      transparency={transparency}
      setTransparency={setTransparency}
      isInset={isInset}
      setIsInset={setIsInset}
      />
      <ShowBox cssCode={cssCode} styleCss={styleCss} color_block={color_block} background_color={background_color}/>
      <StandartShadow
      color_block={color_block}
      setColor_block={setColor_block}
      background_color={background_color}
      setBackground_color={setBackground_color}
      setStyleCss={setStyleCss}
      shadowReplacement={shadowReplacement}
      />
    </>
  )
}

export default Main
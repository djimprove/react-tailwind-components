import React from 'react'

function Heading({type="primary",text,size='3xl',icon,iconRight=false,className=''}) {
  let classList=`text-${type} text-${size}` 
  classList+=" "+className
  
  console.log(classList);
  return (
    <span className={classList} >
    {iconRight?null:icon}
     {text}
     {iconRight?icon:null}
    </span>
  )
}

export default Heading

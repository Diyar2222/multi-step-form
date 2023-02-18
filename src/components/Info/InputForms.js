import React, { useState } from 'react'

const Input = (props) => {
  const {id,title,errorMessage,onChange,...otherProps} = props
    const [focused,setFocused] = useState(false)
    const handleFocus = () =>{
        setFocused(true)
    }
  return (
    <div className='info-input'>
        <div className='info-input-title'>{title}</div>
        <input 
        onChange={onChange}
        {...otherProps}
        required 
        onBlur={handleFocus}
        focused={focused.toString()}
        onInvalid={()=>setFocused(true)}
        />
        <span className='error-message'>{errorMessage}</span>
    </div>
  )
}

export default Input
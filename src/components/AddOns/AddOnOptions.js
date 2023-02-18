import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { planActions } from '../../planSlice'
const AddOnOptions = ({title,description,price,checked}) => {
    const dispatch = useDispatch()
    function add(title,price){
        dispatch(planActions.addToAddOns({title,price}))
    }
  return (
        <div onClick={()=>add(title,price)}
        className={`add-ons-option ${checked ? 'selected':''}`}>
            <div className='option__left'>
                <input id={title} 
                type='checkbox'
                checked={checked}
               />
                <div className='description'>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
            <p>{price}</p>
        </div>
  )
}

export default AddOnOptions
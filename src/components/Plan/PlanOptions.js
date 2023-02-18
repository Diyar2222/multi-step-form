import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { planActions } from '../../planSlice'
const PlanOptions = ({title,price,imgSrc,isSelected,changeErrorMessage}) => {
    const dispatch = useDispatch()
    const {monthly} = useSelector(state=>state.plan)
    function addToPlan(name,price){
      dispatch(planActions.addToPlan({name,price}))
      changeErrorMessage()
    }
  return (
    <div onClick={()=>addToPlan(title,price)} 
    className={`plan__option ${isSelected ? 'selected':''}`}>
        <img src={imgSrc} alt='imgSrc'/>
        <h4>{title}</h4>
        <p>{price}</p>
        <h5>{!monthly ? '2 months free':''}</h5>
    </div>
  )
}

export default PlanOptions
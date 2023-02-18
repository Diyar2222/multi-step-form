import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { planActions } from '../planSlice'

const Footer = ({nextStepFn}) => {
    const dispatch = useDispatch()
    const {step} = useSelector(state=>state.plan)
  return (
    <footer>
        {step!=1 && <button onClick={()=>dispatch(planActions.backStep())} className='back-btn'>Go Back</button>}
        <button className='next-btn' onClick={nextStepFn}>{step!=4 
        ? 'Next step':'Confirm'}</button> 
    </footer>
  )
}

export default Footer
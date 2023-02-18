import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { planActions } from '../../planSlice'

const Steps = ({currentStep,description}) => {
    const dispatch = useDispatch()
    const {step} = useSelector(state=>state.plan)
  return (
    <div className='steps'>
        <button 
        onClick={()=>dispatch(planActions.jumpToStep(Number(currentStep)))}
        className={`${currentStep==step ? 'currentStep' :''}`}
        >{currentStep}</button>
        <div className='steps__info'>
          <p>Step {currentStep}</p>
          <h4>{description}</h4>
        </div>
    </div>
  )
}

export default Steps
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { planActions } from '../../planSlice'
import Header from '../Header'
import PlanOptions from './PlanOptions'
import Footer from '../Footer'
import { plans } from './PlansData'
const Plan = () => {
    const [planIsEmpty,setPlanIsEmpty] = useState(false)
    const dispatch = useDispatch()
    const {monthly,plan} = useSelector(state=>state.plan)
    function handleSubmit(){
        if(plan.length!=0){
            dispatch(planActions.nextStep())
        } else {
            setPlanIsEmpty(true)
        }
    }
  return (
    <section className='plan'>
        <Header
        title='Select your plan'  
        description='You have the option of monthly or yearly billing'/>
        <div className='plan__options'>
            {plans.map(item=>{
                return <PlanOptions key={item.id}
                id={item.id}
                changeErrorMessage={()=>setPlanIsEmpty(false)}
                isSelected={item.title==plan.map(item=>item.name).toString()} //checks selected plan name
                title={item.title}
                price={monthly ? item.monthlyPrice:item.yearlyPrice}
                imgSrc={item.imgSrc}/>
            })}
        </div>
        {planIsEmpty && <div className='error-message'>You have to choose one plan</div>}
        <div className='plan__period'>
            <h5>Monthly</h5>
            <div className='slider'
            onClick={()=>dispatch(planActions.changePeriod())}>
                <div className={`slider__circle ${!monthly ?'yearly':''}`}></div>
            </div>
            <h5>Yearly</h5>
        </div>
        <Footer nextStepFn={handleSubmit}/>
    </section>
  )
}

export default Plan
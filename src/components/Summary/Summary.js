import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Footer'
import Header from '../Header'
import { planActions } from '../../planSlice'
const Summary = () => {
    const dispatch = useDispatch()
    const {plan,addOns,monthly,totalPrice} = useSelector(state=>state.plan)
    useEffect(()=>{
        dispatch(planActions.calculateTotal())
    },[])

  return (
    <section className='summary'>
        <Header
        title='Finishing Up'
        description='Double-check everything looks OK before confirming'/>
        <div className='summary__info'>
            <div className='summary__selected-plan'>
                <div>
                    <h5>{plan.map(item=>item.name).toString()}</h5>
                    <button onClick={()=>dispatch(planActions.changePlan())} className='change-btn'>Change</button>
                </div>
                <h5>{plan.map(item=>item.price).toString()}</h5>
            </div>
            <div className='underline'></div>
            {addOns.map(item=>{
                return <div key={item.title} className='summary__selected-add-on'>
                            <p>{item.title}</p>
                            <h5>{item.price}</h5>
                        </div>
            })}
        </div>

        <div className='summary__total'>
            <h5>Total</h5>
            <h3>${totalPrice}/{monthly?'mo':'yr'}</h3>
        </div>

        <Footer nextStepFn={()=>dispatch(planActions.nextStep())}/>
    </section>
  )
}

export default Summary
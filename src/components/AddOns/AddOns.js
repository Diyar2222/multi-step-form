import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { planActions } from '../../planSlice'
import AddOnOptions from './AddOnOptions'
import Footer from '../Footer'
import Header from '../Header'
import { addOnsData } from './AddOnsData'
const AddOns = () => {
    const [isEmpty,setIsEmpty] = useState(false)
    const dispatch = useDispatch()
    const {monthly,addOns} = useSelector(state=>state.plan)
    function handleNextStep(){
        if(addOns.length!=0){
            dispatch(planActions.nextStep())
        } else {
            setIsEmpty(true)
        }
    }
  return (
    <section className='add-ons'>
        <Header
        title='Pick add-ons'
        description='Add-ons help enhance your gaming experience'/>
        <div className='add-ons-options'>
            {addOnsData.map(item=>{
                return <AddOnOptions 
                {...item} 
                price={monthly?item.monthlyPrice:item.yearlyPrice}
                checked={addOns.map(addOn=>addOn.title).some(title=>title==item.title)}
                />
            })}
            {isEmpty && addOns.length==0 && <div className='error-message'>You have to choose one</div>}
        </div>
        <Footer nextStepFn={handleNextStep}/>
    </section>
  )
}

export default AddOns
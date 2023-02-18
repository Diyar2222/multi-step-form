import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { planActions } from '../../planSlice'
import Header from '../Header'
import InputForms from './InputForms'
import { inputs } from './InputData'
import Footer from '../Footer'
const Info = () => {
  const {info} = useSelector(state=>state.plan)
  const [values,setValues] = useState({
    name:info.map(item=>item?.name)||'',
    email:info.map(item=>item?.email)||'',
    phoneNum:info.map(item=>item?.phoneNum)||''
  })
  const dispatch = useDispatch()
  const handleSubmit = (e) =>{
      e.preventDefault()
      dispatch(planActions.nextStep())
      dispatch(planActions.setInfo(values))
  }
  function onChange(e){
    setValues({...values,[e.target.name]:e.target.value})
  }
return (
    <section onSubmit={handleSubmit} className='info'>
        <Header title='Personal info' 
        description='Please provide your name, email address and phone number'/>
        <form className='info-inputs'>
          {inputs.map(item=>{
            return <InputForms key={item.id} {...item} value={values[item.name]}
            onChange={onChange}/>
          })}
          <Footer/>
        </form>
    </section>
  )
}

export default Info
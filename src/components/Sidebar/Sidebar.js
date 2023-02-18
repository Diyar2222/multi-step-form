import React from 'react'
import Steps from './Steps'
const Sidebar = () => {
  return (
    <div className='container__left'>
      <div className='container__left-steps'>
        <Steps currentStep='1' description='Your Info'/>
        <Steps currentStep='2' description='Select Plan'/>
        <Steps currentStep='3' description='Add-Ons'/>
        <Steps currentStep='4' description='Summary'/>
      </div>
  </div>
  )
}

export default Sidebar
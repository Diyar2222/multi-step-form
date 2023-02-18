import React from 'react'
import { useSelector } from 'react-redux'
import thankYouImage from '../../images/icon-thank-you.svg'
const ThankYou = () => {
  const {info} = useSelector(state=>state.plan)

  return (
    <section className='thank-you'>
        <img src={thankYouImage} alt='thank-you-image'/>
        <h2>Thanks {info.map(item=>item.name).toString()}!</h2>
        <p>We hope you have fun using our platform.
            If you ever need support,please feel free to email us at support@gmail.com
        </p>
    </section>
  )
}

export default ThankYou
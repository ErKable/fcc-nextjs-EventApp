import React from 'react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
export default function SingleEvent({data}) {
  const inputEmail = useRef()
  const router = useRouter()
  const [message, setMessage] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    const emailValue = inputEmail.current.value
    const eventId = router?.query.id
    const validRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!emailValue.match(validRegex)){
      setMessage('Please introduce a correct email address')
    }
    try{
      //POST fect request
      //body of request: emailValue and the eventId
      const response = await fetch('/api/email-registration', {//specify the endpoint here, also if it is external
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: emailValue, eventId})
      })
      if(!response.ok) throw new Error(`Error ${response.status}`)
      const data = await response.json()
     setMessage(data.message)
     inputEmail.current.value = ''
    }catch(e){
      console.log('ERROR', e)
    }
  }

  return (
    <div className='event_single_page'>
        <h1>{data.id}</h1>
        <Image src={data.image} width={1000} height={300}
        alt={data.title}/>
        <p>{data.description}</p>
        <form onSubmit={onSubmit} className='email_registration'>
          <label>Register for this Event</label>
          <input ref={inputEmail} type='email' id='email' placeholder='insert your email'/> <button type='submit'>Submit</button>
        </form> 
        <p>{message}</p>
    </div>
)
}

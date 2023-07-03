import React, { useEffect } from 'react'
import { useContext } from 'react'
import AuthContext from '../Store/Auth-Context'
import Authentication from '../LoginPage/AuthenticationProvider'

const SendingDataToFireBase = () => {
    
    const ctx=useContext(AuthContext)
    useEffect(()=>{
        const response=fetch()

    },[])

  return (
    <div>SendingDataToFireBase</div>
  )
}

export default SendingDataToFireBase
import React from 'react'
import { ReactComponent as GoogleLogo } from '../images/google-logo.svg'
import { useHistory } from 'react-router-dom'
import '../styles/GoogleSignupButton.css'

export const GoogleSignupButton:React.FC = () => {
  let history = useHistory()

  return (
    <div className='google-button' onClick={ () => { history.push('/signed-in') } }>
      <div className='google-button__icon'>
        <GoogleLogo />
      </div>
      <div className='google-button__text'>Sign up with Google</div>
    </div>
  )
}

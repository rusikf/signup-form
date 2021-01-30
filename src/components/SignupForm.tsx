import React from 'react'
import { GoogleSignupButton } from './GoogleSignupButton'
import '../styles/SignupForm.css'

export const SignupForm:React.FC = () => {
  return (
    <div className='signup-form'>
      <div className='signup-form__title'><h1>Sign up</h1></div>
      <GoogleSignupButton />
      
      <div className='google-hint'><span>or signup with email</span></div>

      <form>
        <div className='input-group'>
          <label htmlFor='name'>Name</label>
          <div className='inline-inputs'>
            <input type='text' placeholder='First'/>
            <input type='text' placeholder='Last'/>
          </div>
        </div>

        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Your email'/>
        </div>
        <span className='error'>Valid email is required</span>

        <div className='input-group'>
          <label htmlFor='email'>Password</label>
          <input type='password' placeholder='Choose password'/>
        </div>

        <div className='password-indicator'>
          <div className='password-indicator_block'></div>
          <div className='password-indicator_block'></div>
          <div className='password-indicator_block'></div>
          <div className='password-indicator_block'></div>
        </div>
        <span className='password-indicator-hint'>week</span>


        <div className='input-group'>
          <input type='button' className={ true ? 'btn btn-primary' : 'btn btn-primary_disabled' } value='Sign up'></input>
          </div>  
      </form>
    </div>)
}

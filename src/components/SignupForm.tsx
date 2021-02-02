import React, { useEffect, useState } from 'react'
import { GoogleSignupButton } from './GoogleSignupButton'
import { FieldError } from './FieldError'
import { PasswordIndicator } from './PasswordIndicator'
import { useHistory } from 'react-router-dom'
import '../styles/SignupForm.css'
import strongPassword from 'zxcvbn'
import { validateEmail } from './utils'

export const SignupForm:React.FC = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [validEmail, setValidEmail] = useState<boolean>(true)
  const [passwordScore, setPasswordScore] = useState<number>(0)

  let history = useHistory()

  const submitEnabled = () => {
    let notEmpty = [firstName, lastName, email].every(el => el.length > 0 )
    return notEmpty && passwordScore >= 2
  }

  useEffect(() => {
    let score = strongPassword(password).score
    console.log('score', score)
    setPasswordScore(score)
  }, [password])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let isValid = true

    if (!validateEmail(email)) {
      setValidEmail(false)
      isValid = false
    }
    if (isValid) { history.push('/signed-in') }
  }

  return (
    <div className='signup-form'>
      <div className='signup-form__title'><h1>Sign up</h1></div>
      <GoogleSignupButton />
      
      <div className='google-hint'><span>or signup with email</span></div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='input-group'>
          <label htmlFor='name'>Name</label>
          <div className='inline-inputs'>
            <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First'/>
            <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last'/>
          </div>
        </div>
        
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email'/>
        </div>
        { !validEmail && <FieldError text='Valid email is required'></FieldError> }        
        <div className='input-group'>
          <label htmlFor='email'>Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}placeholder='Choose password'/>
        </div>

        <PasswordIndicator password={password} score={passwordScore}/>

        <div className='input-group'>
          <input type='submit' disabled={!submitEnabled()} className='btn btn-primary' value='Sign up'></input>
          </div>  
      </form>
    </div>)
}

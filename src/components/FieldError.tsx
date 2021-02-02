import React from 'react'

interface Props {
  text: string
}

export const FieldError:React.FC<Props> = ({ text }) => {
  return (
    <span className='error'>{ text }</span>
  )
}
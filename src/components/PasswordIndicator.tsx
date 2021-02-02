import React from 'react'
import '../styles/PasswordIndicator.css'

interface Props {
  score: number,
  password: string
}

const useTitle = (score: number, password: string) => {
  if (password.length < 8) {
    return 'too short'
  }

  let title
  switch(score) {
    case 0:
    case 1:
      title = 'weak'
      break
    case 2:
      title = 'okay'
      break
    case 3:
      title = 'good'
      break
    case 4:
      title = 'strong'
      break
  }
  return title
}

const colorClass = (n: number, title: string | undefined) => {
  let colorMap:any = {
    1: ['weak', 'okay', 'good', 'strong'],
    2: ['okay', 'good', 'strong'],
    3: ['good', 'strong'],
    4: ['strong']
  }

  let customClass = colorMap[n].includes(title) ? `password-indicator_block-${title}` : ''
  return `password-indicator_block ${customClass}`
}

export const PasswordIndicator:React.FC<Props> = ({ score, password }) => {
  let title = useTitle(score, password)
  if (password.length < 1) { return null }

  return(
    <div>
      <div className='password-indicator'>
        <div className={colorClass(1, title)}></div>
        <div className={colorClass(2, title)}></div>
        <div className={colorClass(3, title)}></div>
        <div className={colorClass(4, title)}></div>
      </div>
      <span className='password-indicator-hint'>{ title }</span>
    </div>
  )
}

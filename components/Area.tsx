import React from 'react'

type Props = {
  children: React.ReactNode,
  className?: string,
  backgroundColor?: string,
  backgroundImage?: string
}

const Area: React.FC<Props> = ({ children = null, className = '', backgroundColor = 'bg-black', backgroundImage }) => {
  const baseClasses = 'bg-cover bg-center overflow-hidden rounded-2xl text-white relative'
  
  const style = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined
  }

  return (
    <div
      className={`${baseClasses} ${backgroundColor} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export default Area

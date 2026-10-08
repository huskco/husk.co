import React from 'react'
import Image from 'next/image'

type Props = {
  children?: React.ReactNode,
  className?: string,
  backgroundColor?: string,
  backgroundImage?: string,
  // Hint for how wide the area renders, so the browser picks a right-sized image
  sizes?: string,
  preload?: boolean
}

const Area: React.FC<Props> = ({
  children = null,
  className = '',
  backgroundColor = 'bg-black',
  backgroundImage,
  sizes = '(min-width: 1024px) 1024px, 100vw',
  preload = false
}) => {
  const baseClasses = 'overflow-hidden rounded-2xl text-white relative'

  return (
    <div className={`${baseClasses} ${backgroundColor} ${className}`}>
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes={sizes}
          quality={90}
          preload={preload}
          className="object-cover object-center"
        />
      )}
      {children}
    </div>
  )
}

export default Area

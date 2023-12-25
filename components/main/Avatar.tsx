import React from 'react'

interface AvatarProps {
  src: string;
  alt: string;
  size: number;
}

const Avatar = ({ src, alt, size } : AvatarProps) => {
    return (
      <div className='avatar-wrapper overflow-hidden'>
          <img
              src={src}
              alt={alt}
              className='avatar-image w-full object-cover'
          />
      </div>
    )
}

export default Avatar
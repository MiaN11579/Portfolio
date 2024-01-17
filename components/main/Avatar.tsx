
import Image from 'next/image'
import React from 'react'

interface AvatarProps {
  src: string;
  alt: string;
  size: number;
}

const Avatar = ({ src, alt, size } : AvatarProps) => {
    return (
      <div className='avatar-wrapper overflow-hidden'>
          <Image
              src={src}
              alt={alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className='avatar-image w-full object-cover'
          />
      </div>
    )
}

export default Avatar
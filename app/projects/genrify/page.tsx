import React from 'react'

type Props = {}

export default function genrify({ }: Props) {
  return (
    <div>
      <div className='flex flex-col items-center justify-center page-padding z-40'>
        <h1
          className='text-[30px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 z-40'
        >
          Genrify
        </h1>
      </div>
    </div>
  )
}
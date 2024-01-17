import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <div className='w-full h-[120px] overflow-hidden bottom-0 shadow-lg shadow-lg shadow-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-md z-50'>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center justify-center mt-6'>
                    <span className='text-gray-200 text-xs md:text-base'>
                        © Copyright 2024. Made with <i className="fa-solid fa-heart"></i> by Mia Nguyen
                    </span>
                </div>
                <div className='w-[100px] md:w-[200px] h-full flex flex-row items-center justify-between'>
                    <div className='flex items-center justify-between w-full h-auto px-[10px] md:px-[20px] py-[10px]'>
                        <a href="https://www.linkedin.com/in/mia-n-880538174/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/MiaN11579" target="_blank"><i className="fa-brands fa-github"></i></a>
                        <a href="mailto:quynhnhu11579@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
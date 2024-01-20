"use client"

import PdfViewer from '@/components/sub/PdfViewer';
import React, { useState } from 'react';

const SomePage = () => {
    const handleButtonClick = () => {
      window.open('resume.pdf', '_blank');
    };

    return (
        <div className='flex flex-col items-center justify-center page-padding z-40'>
            <h1
                className='text-[30px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 z-40'
            >
                Genrify
            </h1>
            <button className='bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-4 px-6 mb-10 rounded-xl text-[20px] z-40' 
            onClick={handleButtonClick}>Open PDF</button>
        </div>
    );
};

export default SomePage;

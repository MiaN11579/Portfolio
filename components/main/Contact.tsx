// components/ContactForm.js
"use client"

import React, { useState } from 'react';
import { slideInFromBottom, slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ContactForm from '../sub/ContactForm';


const Contact = () => {

  return (
    <div
      className='flex flex-col items-center justify-center page-padding z-40 pb-10' id='contact'
    >
      <h1 className='text-[30px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center'>
        Don&apos;t wait!<br></br>Send me a message :)
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;

// components/ContactForm.js
"use client"

import React, { useState } from 'react';
import { slideInFromBottom, slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitting(true);
    // Add your form submission logic here
    console.log('Form submitted:', { fullName, email, message });
    // You can send the form data to your server or perform other actions

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, message }),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // Handle any success actions or UI updates here
      } else {
        console.error('Error submitting form:', response.statusText);
        // Handle any error actions or UI updates here
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle any error actions or UI updates here
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={"visible"}
      className='flex flex-col items-center justify-center page-padding z-40 pb-10' id='contact'
    >
      <motion.div
        variants={slideInFromTop(0.25)}
      >
        <h1 className='text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
          Let&apos;s talk!
        </h1>
      </motion.div>
      <form className="contact-form shadow-md rounded-md px-10 py-10 mb-20" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-200 font-semibold mb-2">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="contact-input w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-200 font-semibold mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contact-input w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-200 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="contact-input w-full p-2 mb-2"
            required
          />
        </div>
        <button type="submit" className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-2 px-4 rounded-md">{submitting ? 'Submitting...' : 'Submit'}</button>
      </form>
    </motion.div>
  );
};

export default ContactForm;

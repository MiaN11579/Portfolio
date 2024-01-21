"use client"

import React, { useState } from 'react';
import { slideInFromBottom, slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {}

function ContactForm({ }: Props) {
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

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, message }),
            });

            if (response.ok) {
                // Clear form fields
                setFullName('');
                setEmail('');
                setMessage('');

                // Show success notification
                toast.success('Form submitted successfully!', {
                    className: "toast-position",
                    position: 'top-right',
                    autoClose: 3000, // Notification will close after 3 seconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } else {
                console.error('Error submitting form:', response.statusText);
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
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromBottom(0.25)}
            className='relative w-full flex justify-center items-center md:px-10 z-[40]'
        >
            <form className="w-full overflow-hidden contact-form shadow-md px-6 md:px-10 py-6 md:py-10 mb-20 " onSubmit={handleSubmit}>
                <label htmlFor="fullName" className="lg:text-[20px] block text-gray-200 font-semibold mb-4">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="lg:text-[20px] contact-input w-full p-2 mb-2"
                    required
                />
                <label htmlFor="email" className="lg:text-[20px] block text-gray-200 font-semibold mb-4">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="lg:text-[20px] contact-input w-full p-2 mb-2"
                    required
                />
                <label htmlFor="message" className="lg:text-[20px] block text-gray-200 font-semibold mb-4">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="lg:text-[20px] contact-input w-full p-2 mb-2"
                    required
                />
                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className="button-primary bg-gradient-to-r from-purple-500 to-cyan-500 text-white lg:text-[20px] rounded-xl">
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>

            {/* Toast container for notifications */}
            <ToastContainer toastStyle={{ backgroundColor: "#2B3051", color: "white" }} />
        </motion.div>
    );
};

export default ContactForm
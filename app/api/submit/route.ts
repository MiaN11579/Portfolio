require('dotenv').config()

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const PASSWORD = process.env.password
  const EMAIL = process.env.email
  // const { fullName, email, message } = req.body;
  const body = await req.json()
  console.log(req.body);

  // Configure nodemailer with your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  // Email message configuration
  const mailOptions = {
    from: EMAIL,
    to: EMAIL, // Email address to receive notifications
    subject: 'New Form Submission',
    html: `<p><strong>Name:</strong> ${body.fullName}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Message:</strong> ${body.message}</p>`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Form submitted successfully!'}, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Internal server error' });
  }
}

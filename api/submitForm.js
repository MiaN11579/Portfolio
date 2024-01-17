// pages/api/submitForm.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, message } = req.body;

    // Configure nodemailer with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'your_email_service', // e.g., 'gmail'
      auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password',
      },
    });

    // Email message configuration
    const mailOptions = {
      from: 'your_email@example.com',
      to: 'quynhnhu11579@gmail.com', // Email address to receive notifications
      subject: 'New Form Submission',
      html: `<p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

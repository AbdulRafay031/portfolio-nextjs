// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;

      // Create a nodemailer transporter with your email service details.
      const transporter = nodemailer.createTransport({
        service: 'YourEmailService', // e.g., Gmail
        auth: {
          user: 'your-email@gmail.com',
          pass: 'your-email-password',
        },
      });

      // Define the email message.
      const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'rafay16031@gmail.com', // Replace with your recipient's email
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send the email.
      await transporter.sendMail(mailOptions);

      res.status(200).end();
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    }
  } else {
    res.status(405).end();
  }
}

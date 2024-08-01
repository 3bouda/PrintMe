const nodemailer = require('nodemailer');

// Configure your email transport options here
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: 'abdelaliiheb@hotmail.com',
    pass: '21751430abdelali', // Ensure this is correct and valid
  },
});

// Define the email options
const mailOptions = {
  from: 'abdelaliiheb@hotmail.com',
  to: 'abdelaliiheb@gmail.com', // You can test by sending it to your own email
  subject: 'Test Email',
  text: 'This is a test email sent using Nodemailer',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error sending email:', error);
  }
  console.log('Email sent:', info.response);
});

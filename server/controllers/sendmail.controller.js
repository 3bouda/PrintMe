const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const { SMTPServer } = require('smtp-server');

const transporter = nodemailer.createTransport(smtpTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: 'abdelaliiheb@hotmail.com',
    pass: '21751430abdelali'
  },
  logger: true,
  smtpServer: new SMTPServer({
    openRelays: ['hotmail.com']
  })
}));

exports.sendEmail = (req, res) => {
  const { recipients, subject, body } = req.body;

  const mailOptions = {
    from: 'abdelaliiheb@hotmail.com',
    to: recipients,
    subject: subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
};

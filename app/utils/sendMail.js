const nodemailer = require('nodemailer');

// Создайте транспорт для отправки почты
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'olzhaszholayev@gmail.com',
    pass: 'hhcopsreyklsjuzh'
  }
});

// Определите функцию для отправки email сообщений
function sendEmail(to, subject, text) {
  const mailOptions = {
    from: 'olzhaszholayev@gmail.com',
    to: to,
    subject: subject,
    text: text
  };

  // Отправьте email
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendEmail;
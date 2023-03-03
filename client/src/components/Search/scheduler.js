const schedule = require('node-schedule');
const nodemailer = require('nodemailer');

// Define a function that sends the email
function sendEmail(to, subject, body) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_password'
    }
  });

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: to,
    subject: subject,
    text: body
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// Schedule the function to run every day at 9am
const job = schedule.scheduleJob('0 9 * * *', function() {
  // Call the email sending function with the necessary information
  sendEmail('recipient@example.com', 'Daily Update', 'Here is your daily update!');
});
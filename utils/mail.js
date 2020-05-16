const nodemailer = require('nodemailer');

const serverSupportMail = 'rameshkatke51@gmail.com'
const serverSupportPassword = process.env.EMAIL_PASSWORD

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: serverSupportMail,
    pass: serverSupportPassword
  }
});

function sendOptMail(email, otpCode){
  
  var mailOptions = {
    from: 'rameshkatke51@gmail.com',
    to: email,
    subject: 'Rojana Mart Password Assistance',
    text: 'To authenticate, please use the following One Time Password (OTP): \n' + otpCode + '\nDo not share this OTP with anyone.\n We take your account security very seriously.'+
    '\nRojana Mart will never ask you to disclose or varify your password, OTP, credit card, or banking account number'
  };
  
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      response.status(501).send("Invalid")
    } else {
      console.log('Email sent: ' + info.response);
    }
  });    
  
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}


module.exports.sendOptMail = sendOptMail;
module.exports.getRandomInt = getRandomInt;




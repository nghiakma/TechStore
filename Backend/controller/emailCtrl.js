const nodemailer = require("nodemailer");

const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.SMTP_MAIL, 
      pass: process.env.SMTP_PASSWORD, 
    },
    tls: {
      rejectUnauthorized: false
  }
  });


  let info = await transporter.sendMail({
    from: '"Hey 👻" <abc@gmail.com>',
    to: data.to,
    subject: data.subject, 
    text: data.text, 
    html: data.htm, 
  });

  console.log("Gửi tin nhắn: %s", info.messageId);



  console.log("Xem trước URL: %s", nodemailer.getTestMessageUrl(info));

});

module.exports = sendEmail;

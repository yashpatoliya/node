// npm install nodemailer

const nodemailer = require("nodemailer");

// auth of gmail accounts whos send mail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yashpatoliya333@gmail.com',
        pass: 'your_password'
    }
});

// mail details from , to , subject or text message
let mailOptions = {
    from: 'yashpatoliya333@gmail.com',
    to: 'yashpatoliyaclg@gmail.com',
    subject: 'Test email from nodemailer',
    text: 'Hello, this is a test email from nodemailer.'
};

//last step send mail
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});


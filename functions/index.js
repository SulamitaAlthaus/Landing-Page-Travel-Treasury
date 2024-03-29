const functions = require("firebase-functions");
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

let transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, 
  auth: {
    user: "apikey",
    pass: "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"
  }
});

exports.sendEmail = functions.https.onRequest((request, response) => {
    const email_from = request.query.email_from;
    const message = request.query.message;

    const mailOptions = {
        from: 'Travel Treasury <sulamitaalthaus44@gmail.com>',
        to: 'sulamitaalthaus44@gmail.com',
        subject: 'Travel Treasury Contact Form Submission',
        html: `${message} <br><br> From ${email_from}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(`ERROR: (email) ${email_from} --- (message) $(message)  --- (error) ${error.toString()}`);
            response.send(error.toString());
        }
        response.send('You message was submitted successfully!');
    });
}) 
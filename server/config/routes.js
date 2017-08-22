const nodemailer = require('nodemailer')
const config = require('./config')
const xoauth2 = require('xoauth2')

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: 'config.mailUser',
      clientId: 'config.clientId',
      clientSecret: 'config.clientSecret',
      refreshToken: 'config.refreshToken',
      accessToken: 'config.accessToken'
    }
});


module.exports = function (app) {
    // send mail with defined transport object
    app.post('/api/contact', function(req, res){
        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: 'rebeccaking925@gmail.com', // sender address
            to: rebeccaking925@gmail.com, // list of receivers
            subject: Website Mail, // Subject line
            text: req.body.text, // plaintext body
            // html: '<b>Hello world 🐴</b>' // html body
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return res.send(error);
            }
            return res.send("mail send successfully");
        });
    })
};

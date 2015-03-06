meteor-nodemailer
================

Meteor wrapper for [Nodemailer](https://github.com/andris9/Nodemailer).

Install

```meteor add epaminond:nodemailer```

## TL;DR Usage Example

This is a complete example to send an e-mail with plaintext and HTML body

```javascript
// create reusable transporter object using SMTP transport
var transporter = Nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'gmail.user@gmail.com',
    pass: 'userpass'
  }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
  from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
  to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world ✔', // plaintext body
  html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
var info = transporter.sendMail(mailOptions);
console.log('Message sent: ' + info.response);

transport.close();
```

Note that `Nodemailer#sendMail` and `Nodemailer#close` functions are wrapped with [Meteor.wrapAsync](http://docs.meteor.com/#/full/meteor_wrapasync) so that you can use them synchronously.

For more details you can check [Nodemailer documentation](https://github.com/andris9/Nodemailer).

Nodemailer = Npm.require('nodemailer');

Nodemailer.sendMail = Meteor.wrapAsync(Nodemailer.sendMail);
Nodemailer.close = Meteor.wrapAsync(Nodemailer.close);

Package.describe({
  name: 'epaminond:nodemailer',
  version: '1.3.1',
  summary: "Meteor wrapper for Nodemailer",
  git: 'https://github.com/epaminond/meteor-nodemailer.git',
  documentation: 'README.md'
});

Npm.depends({
  'nodemailer': '1.3.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.add_files('nodemailer.js', 'server');
  api.export("Nodemailer");
});

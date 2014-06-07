Package.describe({
    summary: "Meteor wrapper for Nodemailer"
});
Npm.depends({nodemailer: "0.6.5"});
Package.on_use(function(api){
    api.add_files('nodemailer.js', 'server');
    if(api.export)
        api.export('Nodemailer');
});

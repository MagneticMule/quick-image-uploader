import {IronRouter} from 'meteor/iron:router';
import {AccountsTemplates} from 'meteor/useraccounts:core';


import '../../ui/layouts/login_script.js';
import '../../ui/layouts/upload.js';

Router.route('/', {
    name: 'file-upload',
    template: 'fileUpload',

    onBeforeAction: function () {
        if (!Meteor.userId()) {
            this.render('login');
        } else {
            this.next();
        }
    },
    action: function () {
        if (this.ready()) {
            this.render('fileUpload');
        }
    },
    subscriptions: function () {

    }
});

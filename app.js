/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'DoctorQuickMobile',

    requires: [
        'Ext.MessageBox'
    ],

    controllers : [
        'doctoController.MainController',
        'doctoController.LoginController',
        'doctor.SlideMenuController',
        'patient.SlideMenuController'
    ],

    views: [
//        'Main',
        //'notificationOverlay',
        'doctor.DashboardView',
        'doctor.MainPanel',
        'doctor.SlideMenu',
        //'doctor.RequestDetailView',
        
        'patient.LandingView',
        'patient.MainPanel',
        'patient.SlideMenu'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        
        //TODO : add splash image as background for a div in html page.
        
        //Splash screen is shown for 3 seconds and then sencha view is created.
        //setTimeout(function(){
        	
        	//TODO : Implement the below described logic.
        	
        	//1. Check for the availability of login auth token.
        	//2. If No, then launch Login View
        	//Ext.Viewport.add(Ext.create('DoctorQuickMobile.view.common.LoginView'));
        	//3. If Yes, then check if the user has loggedin as patient or doctor
        	//4. If doctor, then launch doctor landing view
        	//Ext.Viewport.add(Ext.create('DoctorQuickMobile.view.doctor.LandingView'));
        	//5. If Patient, then launch patient landing view.
        	//Ext.Viewport.add(Ext.create('DoctorQuickMobile.view.patient.LandingView'));
            //Ext.Viewport.add(Ext.create('DoctorQuickMobile.view.doctor.consultation.RequestDetailView'));
            Ext.Viewport.add(Ext.create('DoctorQuickMobile.view.doctor.DashboardView'));

        //},3000);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

var requesttest = function () {
    var reqObj = {
        mobile : 8904814609,
        password : 'thiyagu'
    };
    $.ajax({
            url : 'http://localhost:8000/loginDoctor',
            method : 'POST',
            dataType : 'json',
            data : reqObj,
            success : function(data) {    
                console.log('success',data);
            },
            error: function (err) {
                console.log('Error', err);
            }
        });
};

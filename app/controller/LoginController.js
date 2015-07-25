Ext.define('DoctorQuickMobile.controller.LoginController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginView : 'common_loginView',
            loginForm : 'common_loginView #loginFormPanelId'
         },
        
        control : {
            'common_loginView #registerBtnId' : { tap: 'showPatientRegistartionView', scope: this},
            'common_loginView #registerDocBtnId' : { tap: 'showDoctoRegistrationView', scope: this},
            'common_loginView #learnMoreBtnId' : { tap: 'showLearnMoreView', scope: this},
            'common_loginView #loginBtnId' : { tap : 'doLogin', scope : this }
            
        }
    },
    
    init : function () {
        console.log('login controller');
        this.dataService = DoctorQuickMobile.data.DataService;
        this.commonController = DoctorQuickMobile.app.getController('CommonController');
    },

    /*
    *   Showing Patient registration view
    */

    showPatientRegistartionView : function () {
        console.log('show patient registration');
        Ext.Viewport.add(Ext.create('DoctorQuickMobile.view.patient.registration.PatientRegMainView'));
        Ext.Viewport.setActiveItem(1);
    },

    /*
    *   Showing Doctor registration view
    */
    showDoctoRegistrationView : function(){
    	console.log('show doctor registration');
        Ext.Viewport.add(Ext.create('DoctorQuickMobile.view.doctor.registration.DocRegMainView'));
        Ext.Viewport.setActiveItem(1);
    },

    /*
    *   Showing Learn More view
    */
    showLearnMoreView : function() {
        console.log('showing learn more view.....');
    },
    
    /*
    *   Do login 
    *   According to the loginType
    *   Whether user is a doctor or patient
    */
    doLogin : function(){

    	var loginForm = this.getLoginForm();
        this.loginReqObj = {
            'mobileNumber' : loginForm.getComponent('mobileNumberId').getValue(),
            'password' : loginForm.getComponent('passwordId').getValue()
        };
    	
    	if (this.commonController.validateForms(this.loginReqObj, loginForm)) {
    	   
           var reqObj = {
                mobile : this.loginReqObj.mobileNumber,
                password : this.loginReqObj.password 
           };

           if (loginDetail.loginType === 'Doctor') {
                DoctorQuickMobile.data.Service.makeServerReqest('loginDoctor', reqObj, this.loginSuccessCb, this.loginFailureCb, this);
            } else {
              DoctorQuickMobile.data.Service.makeServerReqest('loginPatient', reqObj, this.loginSuccessCb, this.loginFailureCb, this);  
            }
        }
    },

    loginSuccessCb : function (data) {
        console.log('login success');

        // if (data.status) {

        //     return true;
        // }
        this.loginResData = data;
        loginDetail.authtoken = data; //Please update this value after getting proper response
        this.commonController.storingLoginCredentials();
        //add userId and password to the config data
        this.commonController.initializeView();

    },

    loginFailureCb : function () {
        //loginDetail.authtoken = 'test'; ///no internet conn please remove it
        //this.commonController.storingLoginCredentials();
        //add userId and password to the config data
        //this.commonController.initializeView();
        console.log('login fails');
    }
    
    
});





Ext.define('DoctoApp.controller.doctoController.LoginController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	mainView : 'main',
        	loginFormFieldSet : 'doctorLoginScreen #loginFormPanelId',
        	registerDocto1Form: 'registerDoctorScreen1 #registerDocContainer1 #registerDocto1Form',
        	registerDocto2Form: 'registerDoctorScreen2 #registerDocContainer2 #registerDocto2Form'
        		
         },
        
        control : {
            'doctorLoginScreen #footerContainer' : { tap : 'footerTapHandler', scope : this },
            'doctorLoginScreen button#loginBtnId' : { tap : 'doLogin', scope : this },
            
            'registerDoctorScreen1 #registerDocContainer1 button#_registerNameNextBtn' : { tap : 'navigateTodocRegPage2', scope : this },
            'registerDoctorScreen2 #registerDoctor' : { tap : 'registerDoctor', scope : this }
            
        }
    },
    
    init : function () {
        this.dataService = DoctoApp.data.DataService;
    },

    footerTapHandler : function(event, node, options, eOpts){
    	
    	if(event.target.id == 'regAsDoctorBtnId'){
    		
    		this.showDoctoRegistrationView1();
    	}
    },
    showDoctoRegistrationView1 : function(){
    	this.getMainView().setActiveItem('registerDoctorScreen1');
    },
    
    doLogin : function(){
    	var loginForm = this.getLoginFormFieldSet();
    	
    	var mobileNumber = loginForm.getComponent('phNumId').getValue();
    	var pswd = loginForm.getComponent('pswdId').getValue();
    	
    	//Validations : 
    	//1. phNumber and passwrod fields must not be empty
    	//2. phNumber enetered must be of 10 digits
    	if(mobileNumber == null || pswd == ''){
    		alert('Please enter both mobile number and password');
    		return;
    	}
    	
    	if((''+mobileNumber).length != 10){
    		alert('Please eneter valid mobile number');
    		return;
    	}
    	
    	//Passed Validations?  Then do login request to server
    	this.dataService.doDoctorLogin(mobileNumber, pswd, function(result){
    		
    		//Login is successfull. Save the authtoken obtained in local DB.
    		//So that it can be checked upon during app launch and directly user will be taken to main screen.
    		
    		alert('Login successfull');
    	},
    	function(result){
    		alert('Login failure');
    	},this);
    },
    
    navigateTodocRegPage2 : function(){
    	
    	var registerDocto1Form = this.getRegisterDocto1Form();
    	
    	var fName = registerDocto1Form.getFieldsAsArray()[0].getValue();
    	var mName = registerDocto1Form.getFieldsAsArray()[1].getValue();
    	var lName = registerDocto1Form.getFieldsAsArray()[2].getValue();
    	
    	if(fName == '' || lName == ''){
    		alert('First name and last name are mandatory');
    		return;
    	}
    	
    	this.formValCache = {
    			fName : fName,
    			mName : mName,
    			lName : lName
    	};
    	//Passed validations ? Then switch to next egistration page.
    	this.getMainView().setActiveItem('registerDoctorScreen2');
    },
    
    registerDoctor : function(){
    
    	var registerDocto2Form = this.getRegisterDocto2Form();
    	
    	var email = registerDocto2Form.getFieldsAsArray()[0].getValue();
    	var mobileNumber = registerDocto2Form.getFieldsAsArray()[1].getValue();
    	
    	if(email == ''){
    		alert('Plese enter email address');
    		return;
    	}
    	
    	if(mobileNumber == null || (''+mobileNumber).length != 10){
    		alert('Please enter valid mobile number');
    		return;
    	}
    	
    	//Passed validations ? Then make server request for registration.
    	this.dataService.doDoctorRegistration(this.formValCache.fName, this.formValCache.mName, this.formValCache.lName, email, mobileNumber,
    			function(){
    				alert('Registered successfully');
    			},
    			function(result){
    				alert('failed to register');
    			},this);
    }
    
});
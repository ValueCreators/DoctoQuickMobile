/*
*	Patient registration controller
*	This controller holds the action of patient registration.
*
*	Once user has registered the details, then he will receive the otp for his mobile number.
*	After entering the otp , app will take him to login and user can his dashboard.
*
*
*
*--------------------------------------------------------------
*						author@thiyagu
*--------------------------------------------------------------
*/



Ext.define('DoctorQuickMobile.controller.patient.PatientRegController', {

	extend: 'Ext.app.Controller',

	config: {
		refs: {
			patientRegMainView : 'patientRegMainView',
			registrationView1 : 'patientRegMainView patientRegistration_1',
			registrationView2 : 'patientRegMainView patientRegistration_2',
			registrationView3 : 'patientRegMainView patientRegistration_3'
		},
		control: {
			'patientRegMainView patientRegistration_1 #_registerPatientNext1Btn' : { tap: 'gotoReg2View', scope: this},
			'patientRegMainView patientRegistration_2 #_registerPatientNext2Btn' : { tap: 'gotoReg3View', scope: this},
			'patientRegMainView patientRegistration_2 #back-btn-Id' : { tap: 'goBack', scope: this},
			'patientRegMainView patientRegistration_3 #back-btn-Id2' : { tap: 'goBack', scope: this},
			'patientRegistration_3 #_patientOtpResendBtn' : { tap: 'resendVerificationCode', scope: this},
			'patientRegistration_3 #_patientOtpConfirmBtn' : { tap: 'confirmVerificationCode', scope: this}
		}
	},

	init : function () {
		this.dataService = DoctorQuickMobile.data.DataService;
		this.commonController = DoctorQuickMobile.app.getController('CommonController');
	},

	gotoReg2View : function (event) {
		console.log('goto reg2View');

		var form1 = this.getRegistrationView1().getComponent('patientReg1FormId');
		this.patientRegForm1Obj = form1.getValues();

		if (this.commonController.validateForms(this.patientRegForm1Obj, form1)) {
			this.getPatientRegMainView().setActiveItem(1);
		}
		
	},

	gotoReg3View : function (event) {

		console.log('goto reg3View');
		var form2 = this.getRegistrationView2().getComponent('patientReg2FormId');
		this.patientRegForm2Obj = form2.getValues();

		if (this.commonController.validateForms(this.patientRegForm2Obj, form2)) {
			
			//service call
			var reqObj = {
				'firstName' : this.patientRegForm1Obj.firstName,
				'lastName' : this.patientRegForm1Obj.middleName,
				'middleName' : this.patientRegForm1Obj.lastName,
				'age' : this.patientRegForm1Obj.age,
				'email' : this.patientRegForm2Obj.email,
				'mobile' : this.patientRegForm2Obj.mobileNumber,
				'sex' : this.patientRegForm2Obj.gender,
				'languageKnown' : '',
				'patientId' : '',
				'password' : this.patientRegForm2Obj.password,
				'ifcCode' : '',
				'accountNumber' : '',
				'fees' : '',
				'dob' : '',
				'status' : '',
				'timeStamp' : '',
				'authenticationToken' : '',
				'profileImage' : '',
				'walletId' : '',
				'city' : ''
			}

			DoctorQuickMobile.data.Service.makeServerReqest('registerPatient', reqObj, this.patientRegistrationSuccessCb, this.patientRegistrationfailureCb, this);
			
		}
	},

	patientRegistrationSuccessCb : function (data) {

		console.log('after success call back',data);
		this.patientResponseData = data;

		/*	Setting login type whether he is patient or doctor
		*	And storing in the localstorage in desktop and local databse on the mobile
		*/
		loginDetail.loginType = 'Patient';
		this.commonController.storingLoginCredentials();

		this.getPatientRegMainView().setActiveItem(2);
		$('#otp-mobilenumber span')[0].innerHTML = this.patientRegForm2Obj.mobileNumber;
	},

	patientRegistrationfailureCb : function (data) {
		console.log('failure call back',data);
		//this just for sample because of no internet conection. Please remove it when internet is up
		this.getPatientRegMainView().setActiveItem(2);
		$('#otp-mobilenumber span')[0].innerHTML = this.patientRegForm2Obj.mobileNumber;
	
	},

	resendVerificationCode : function () {
		console.log('resend otp');
	},

	confirmVerificationCode : function () {
		console.log('confirm otp and do login');
	},

	goBack : function () {
		console.log('go back to the view');
		var activeItemId = this.getPatientRegMainView().getActiveItem().getItemId();
		console.log('active item id is-->',activeItemId);
		if (activeItemId === 'patientRegistration_2') {
			this.patientRegMainView().setActiveItem(0);
		} else if (activeItemId === 'patientRegistration_3') {
			this.patientRegMainView().setActiveItem(1);
		}	
	}

});
/*
*	Common controller for both patient and doctor
*
*	This controller holds the action for initializing the app. This will gives the 
*		whenever app is getting launched, it will deside which view user can see.
*
*	This controller also contains form validation. For this name and itemId are same to validate.ItemId should
*		be prfix with (Id) and it contains removing the error border using removeEmptyCls  function() .
*
*--------------------------------------------------------------
*						author@thiyagu
*--------------------------------------------------------------
*/


Ext.define('DoctorQuickMobile.controller.CommonController', {

	extend: 'Ext.app.Controller',

	config : {

		refs : {
			doctorDashBoardView : 'doctor_dashboardView',
			docBatchBtn : 'doctor_mainPanel toolbar #batchBtnId',
			statusNotificationBtn : 'doctor_mainPanel toolbar container#statusNotificationId',
			gotoPatientDashBoardBtn : 'patient_mainPanel toolbar button#gotoDashBoardBtn',
			gotoDoctorDashBoardBtn : 'doctor_mainPanel toolbar button#gotoDashBoardBtn',								
		},

		control : {
			gotoPatientDashBoardBtn : { tap : 'initializeView', scope : this },
			gotoDoctorDashBoardBtn : { tap : 'initializeView', scope : this },
			'doctor_dashboardView' : { activate : 'onDocDashBoardActivate', deactivate : 'onDocDashBoardDeActivate', scope : this },
			'patient_dashboardView' : { activate : 'onPatientDashBoardActivate', deactivate : 'onPatientDashBoardDeActivate', scope : this },

		}

	},

	init : function () {
		this.myConsultDoctor = DoctorQuickMobile.app.getController("patient.MyConsultController");
	},

	initializeView : function () {
		console.log('view initialization');

		/*
		*	We are adding only one view at a time
		*	Whenever application is launching.
		*/
		Ext.Viewport.removeAll();
		
		if (!loginDetail.authtoken) {
			/*
			* 	First time when user opens the application, 
			*	we are showing the login view
			*/
			Ext.Viewport.add(Ext.create('DoctorQuickMobile.view.common.LoginView'));

		} else if (loginDetail && loginDetail.loginType === 'Doctor') {

			//Doctor main View
			this.landingView = Ext.Viewport.add(Ext.create('DoctorQuickMobile.view.doctor.LandingView'));
			this.landingView.getComponent('doctorMainPanel').getComponent('_mainPanelContainer').setActiveItem('doctor_dashboardView');
			//this.onDashBoardActivate(); 


		} else if (loginDetail && loginDetail.loginType === 'Patient') {

			//Patient main view
			this.landingView = Ext.Viewport.add(Ext.create('DoctorQuickMobile.view.patient.LandingView'));	
			this.landingView.getComponent('patientMainPanel').getComponent('_mainPanelContainer').setActiveItem('patient_dashboardView');
			//this.onDashBoardActivate();
			this.myConsultDoctor.cunsultMyDoctor = false;
		}

	},

	validateForms : function (formObj, form) {
		for (var item in formObj) {
			//in the view name and itemId are same. and Itemid should be append with Id
			var $ele = form.getComponent(item+'Id');
			if ($ele.getRequired && $ele.getRequired() && !formObj[item]) {
				$ele.addCls('emptyCls');
				return false;
			} else {
				$ele.removeCls('emptyCls');
			}

		}

		return true;

	},

	removeEmptyCls : function (ele, event) {

		if (ele.config && ele.config.name === 'mobileNumber') {

			//checking mobile validation
			if (ele.getValue() && ele.getValue().toString().length === 10) {
				ele.removeCls('emptyCls');
			} else {
				ele.addCls('emptyCls');
			}

		} else if (ele.config && ele.config.name === 'email') {

			//checking email validation
			if (ele.getValue()) {
				ele.removeCls('emptyCls');
			} else {
				ele.addCls('emptyCls');
			}

		} else {

			//checking text validation and all other than mobile number and email
			if (ele.getValue()) {
				ele.removeCls('emptyCls');
			} else {
				ele.addCls('emptyCls');
			}

		}
		
	},

	storingLoginCredentials : function () {

        if (!isMobile) {
            var data = JSON.stringify(loginDetail);
            localStorage.setItem('loginCredentials',data);
        } else {
            //setting these values in the local database in the mobile
        }
    },

    onDocDashBoardActivate : function() {

    	//alert("onDashBoardAct");
    	this.getDocBatchBtn().show();
		this.getStatusNotificationBtn().show();
    },

    onDocDashBoardDeActivate : function() {

    	//alert("onDocDashBoardDeActivate");
    	this.getDocBatchBtn().hide();
		this.getStatusNotificationBtn().hide();
    },

    onPatientDashBoardActivate : function() {

    	//alert("onPatientDashBoardActivate");
    },

    onPatientDashBoardDeActivate : function() {

    	//alert("onPatientDashBoardDeActivate");
    }

});
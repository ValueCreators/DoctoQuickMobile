Ext.define('DoctorQuickMobile.controller.CustomerCareController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					customerCareView : 'customerCareView',
					doctorMainPanelContainer : 'doctor_mainPanel panel#_mainPanelContainer',
					doctorMainPanelToolbarId : 'doctor_mainPanel toolbar#mainPanelToolbarId',
					doctorGotoDashBoardBtn : 'doctor_mainPanel toolbar button#gotoDashBoardBtn',
					patientMainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
					patientMainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
					patientGotoDashBoardBtn : 'patient_mainPanel toolbar button#gotoDashBoardBtn'		
				},
				control : {
					customerCareView : { activate : 'customerCareActivate', deactivate : 'customerCareDeactivate', scope : this }	
				}
	},
	
	init : function(){
		
	},
	
	showCustomerCareView : function(){
		//alert('customer care view');
		//this.customerView = Ext.Viewport.add(Ext.create('DoctorQuickMobile.view.common.CustomerCareView'));
		if (loginDetail.loginType == 'Doctor') {
			this.getDoctorMainPanelContainer().setActiveItem('customerCareView');
       		this.getDoctorMainPanelToolbarId().setTitle("Customer Care");
       	} else {
       		this.getPatientMainPanelContainer().setActiveItem('customerCareView');
       		this.getPatientMainPanelToolbarId().setTitle("Customer Care");
       	}
	},

	customerCareActivate : function () {
		//this.getDocProfileEditOrSubmitBtn().show();
		if (loginDetail.loginType == 'Doctor') {
			this.getDoctorGotoDashBoardBtn().show();
		} else {
			this.getPatientGotoDashBoardBtn().show();
		}
	},

	customerCareDeactivate : function () {
		//this.getDocProfileEditOrSubmitBtn().hide();
		if (loginDetail.loginType == 'Doctor') {
			this.getDoctorGotoDashBoardBtn().hide();
		} else {
			this.getPatientGotoDashBoardBtn().hide();
		}
	}
});
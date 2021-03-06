Ext.define('DoctorQuickMobile.controller.patient.MyConsultController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					myConsultationScreen : 'myConsultationView',
					mainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
					gotoDashBoardBtn : 'patient_mainPanel toolbar button#gotoDashBoardBtn',

					docProfileContainer : 'doctorProfileView container#_doctorProfileViewContainer',
					docMainPanel : 'doctor_mainPanel panel#_mainPanelContainer',
					docMainPanelToolbarId : 'doctor_mainPanel toolbar#mainPanelToolbarId',
					gotoDocDashBoardBtn : 'doctor_mainPanel toolbar button#gotoDashBoardBtn'
				},
				control : {
					myConsultationScreen : { activate : 'onConsultationActivate', deactivate : 'onConsultationDeactivate', scope : this },			
					'#myConsultationViewId #myConsultatedDoctorsList' : { itemtap : "showDoctorProfile", scope : this },
				}
	},
	
	init : function(){
		this.myDoctorController = DoctorQuickMobile.app.getController("patient.MyDoctorsController");
	},

	onConsultationActivate : function () {
		if (loginDetail.loginType == 'Doctor') {
			this.getGotoDocDashBoardBtn().show();
		} else {
			this.getGotoDashBoardBtn().show();
		}
	},


	onConsultationDeactivate : function () {
		if (loginDetail.loginType == 'Doctor') {
			this.getGotoDocDashBoardBtn().hide();
		} else {
			this.getGotoDashBoardBtn().hide();
		}
	},

	
	showConsultationsView : function(){

		if (loginDetail.loginType == 'Doctor') {
			this.getDocMainPanel().setActiveItem('myConsultationView');
    		this.getDocMainPanelToolbarId().setTitle("My Consultation");
		} else {
			this.getMainPanelContainer().setActiveItem('myConsultationView');
    		this.getMainPanelToolbarId().setTitle("My Consultation");
    		this.cunsultMyDoctor = true;
    	}
	},

	showDoctorProfile : function (me, index, target, record, e, eOpts)  {
		//TODO
		//this.myDoctorController.onDoctorSelect(me, 1, target, record, e, eOpts);

		this.getMainPanelContainer().setActiveItem('doctorProfileView');
       	this.getMainPanelToolbarId().setTitle("Doctor Profile");
       	this.getDocProfileContainer().setData(docProfileData);
	}
});
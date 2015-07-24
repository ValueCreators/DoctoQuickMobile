Ext.define('DoctorQuickMobile.controller.patient.MyConsultController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					myConsultationScreen : 'myConsultationView',
					mainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
					gotoDashBoardBtn : 'patient_mainPanel toolbar button#gotoDashBoardBtn',
					docProfileContainer : 'doctorProfileView container#_doctorProfileViewContainer',	
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
		this.getGotoDashBoardBtn().show();
	},


	onConsultationDeactivate : function () {
		this.getGotoDashBoardBtn().hide();
	},

	
	showConsultationsView : function(){
		this.getMainPanelContainer().setActiveItem('myConsultationView');
    	this.getMainPanelToolbarId().setTitle("My Consultation");
	},

	showDoctorProfile : function (me, index, target, record, e, eOpts)  {
		//TODO
		//this.myDoctorController.onDoctorSelect(me, 1, target, record, e, eOpts);

		this.getMainPanelContainer().setActiveItem('doctorProfileView');
       	this.getMainPanelToolbarId().setTitle("Doctor Profile");
       	this.getDocProfileContainer().setData(docProfileData);
	}
});
Ext.define('DoctorQuickMobile.controller.patient.SpecialityController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					mainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
					//todoVinay : Navigation pending
					specialityList : 'specialitiesView #specialitiesList',
					medicalSpecialityView : 'medicalSpecialityView'
				},
				control : {
					'specialitiesView' : { activate : 'onSpecialitiesActivate', deactivate : 'onSpecialitiesDeActivate', scope : this },
					medicalSpecialityView : { activate : 'onMedSpecActivate', deactivate : 'onMedSpecDeActivate', scope : this },
					specialityList : {itemtap : 'onSpecialitySelect', scope : this }	
				}
	},
	
	init : function(){
		this.commonController = DoctorQuickMobile.app.getController("CommonController");
	},
	
	showSpecialitiesView : function(){
		this.getMainPanelToolbarId().setTitle("Medical Speciality");
		this.getMainPanelContainer().setActiveItem("specialitiesView");

	},
	onSpecialitiesActivate : function() {

		this.commonController.getGotoPatientDashBoardBtn().show();
	},

	onSpecialitiesDeActivate : function() {

		this.commonController.getGotoPatientDashBoardBtn().hide();
	},
	
	onMedSpecActivate : function() {

		this.commonController.getGotoPatientDashBoardBtn().show();
	},

	onMedSpecDeActivate : function() {

		this.commonController.getGotoPatientDashBoardBtn().hide();
	},
	
	onSpecialitySelect : function(list, index, target, record, e, eOpts ){

	   	this.getMainPanelContainer().setActiveItem('medicalSpecialityView');
       	this.getMainPanelToolbarId().setTitle("Medical Speciality");
       	this.getMedicalSpecialityView().setData(record.getData());
	}
});
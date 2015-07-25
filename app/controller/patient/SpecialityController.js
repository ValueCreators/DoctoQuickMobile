Ext.define('DoctorQuickMobile.controller.patient.SpecialityController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					mainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
					//todoVinay : Navigation pending
					//specialityList : 'specialitiesView #specialitiesList'
				},
				control : {
					'specialitiesView' : { activate : 'onSpecialitiesActivate', deactivate : 'onSpecialitiesDeActivate', scope : this },
					//specialityList : {itemtap : 'onSpecialitySelect', scope : this }	
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
	
//	onSpecialitySelect : function(me, index, target, record, e, eOpts ) {
//
//	   	this.getMainPanelContainer().setActiveItem('doctorProfileView');
//       	this.getMainPanelToolbarId().setTitle("Doctor Profile");
//       	this.getDocProfileContainer().setData(record.getData());
//	}
});
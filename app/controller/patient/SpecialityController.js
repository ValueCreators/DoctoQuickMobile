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
					//specialityList : {itemtap : 'onSpecialitySelect', scope : this }	
				}
	},
	
	init : function(){
		
	},
	
	showSpecialitiesView : function(){
		this.getMainPanelToolbarId().setTitle("Medical Speciality");
		this.getMainPanelContainer().setActiveItem("specialitiesView");

	},
	
//	onSpecialitySelect : function(me, index, target, record, e, eOpts ) {
//
//	   	this.getMainPanelContainer().setActiveItem('doctorProfileView');
//       	this.getMainPanelToolbarId().setTitle("Doctor Profile");
//       	this.getDocProfileContainer().setData(record.getData());
//	}
});
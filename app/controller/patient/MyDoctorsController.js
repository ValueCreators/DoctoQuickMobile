Ext.define('DoctorQuickMobile.controller.patient.MyDoctorsController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					mainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
				},
				control : {
							
				}
	},
	
	init : function(){
		
	},
	
	showMyDocsView : function(){
		
		if(!this.myDoctorsView){
			this.myDoctorsView = Ext.create('DoctorQuickMobile.view.patient.other.MyDoctors'); 
		}

		this.getMainPanelToolbarId().setTitle("My Doctors");
		this.getMainPanelContainer().add(this.myDoctorsView);
		this.getMainPanelContainer().setActiveItem(this.myDoctorsView);
	}
});
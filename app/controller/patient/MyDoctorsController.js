Ext.define('DoctorQuickMobile.controller.patient.MyDoctorsController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					mainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
					docProfileContainer : 'doctorProfileView container#_doctorProfileViewContainer',
					gotoMyDoctorsBtn : 'patient_mainPanel toolbar button#gotoMyDocsView'	
				},
				control : {
					'myDoctorsView list#myDoctorsList' : { itemtap : "onDoctorSelect", scope : this },
					'doctorProfileView' : { activate : 'onDocProfileActivate', deactivate : 'onDocProfileDeActivate', scope : this },
					gotoMyDoctorsBtn : { tap : 'showMyDocsView', scope : this },
					'myDoctorsView' : { activate : 'onMyDocsActivate', deactivate : 'onMyDocsDeActivate', scope : this },
				}
	},
	
	init : function(){
		this.commonController = DoctorQuickMobile.app.getController("CommonController");
	},
	
	showMyDocsView : function(){
		
		/*if(!this.myDoctorsView){
			this.myDoctorsView = Ext.create('DoctorQuickMobile.view.patient.other.MyDoctors'); 
		}

		this.getGotoMyDoctorsBtn().hide();*/

		this.getMainPanelToolbarId().setTitle("My Doctors");
		//this.getMainPanelContainer().add(this.myDoctorsView);
		// this.getMainPanelContainer().setActiveItem(this.myDoctorsView);
		this.getMainPanelContainer().setActiveItem("myDoctorsView");
	},

	onDoctorSelect : function(me, index, target, record, e, eOpts ) {

		//alert("item tap");
		console.log(record.getData());

	   	this.getMainPanelContainer().setActiveItem('doctorProfileView');
       	this.getMainPanelToolbarId().setTitle("Doctor Profile");
       	this.getDocProfileContainer().setData(record.getData());
	},

	onDocProfileActivate : function() {

		this.getGotoMyDoctorsBtn().show();
	},

	onDocProfileDeActivate : function() {

		this.getGotoMyDoctorsBtn().hide();
	},

	onMyDocsActivate : function() {

		this.commonController.getGotoPatientDashBoardBtn().show();
	},

	onMyDocsDeActivate : function() {

		this.commonController.getGotoPatientDashBoardBtn().hide();
	}
});
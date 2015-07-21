Ext.define('DoctorQuickMobile.controller.doctor.AccStatementController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
						accountStatementView : 'accountStatementView',
						mainPanelContainer : 'doctor_mainPanel panel#_mainPanelContainer',
						mainPanelToolbarId : 'doctor_mainPanel toolbar#mainPanelToolbarId',
						gotoDashBoardBtn : 'doctor_mainPanel toolbar button#gotoDashBoardBtn'
				},
				control : {
					accountStatementView : { activate : 'accountStatementActivate', deactivate : 'accountStatementDeactivate', scope : this },			
				}
	},
	
	init : function(){
		
	},
	
	showAccStatementView : function(){
		//alert('Account Statement');
		this.getMainPanelContainer().setActiveItem('accountStatementView');
       	this.getMainPanelToolbarId().setTitle("Account Statement");
	},

	accountStatementActivate : function () {
		//this.getDocProfileEditOrSubmitBtn().show();
		this.getGotoDashBoardBtn().show();
	},

	accountStatementDeactivate : function () {
		//this.getDocProfileEditOrSubmitBtn().hide();
		this.getGotoDashBoardBtn().hide();	
	}

});
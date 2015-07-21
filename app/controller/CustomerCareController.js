Ext.define('DoctorQuickMobile.controller.CustomerCareController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					customerCareView : 'customerCareView',
					mainPanelContainer : 'doctor_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'doctor_mainPanel toolbar#mainPanelToolbarId',
					gotoDashBoardBtn : 'doctor_mainPanel toolbar button#gotoDashBoardBtn'					
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
		this.getMainPanelContainer().setActiveItem('customerCareView');
       	this.getMainPanelToolbarId().setTitle("Customer Care");
	},

	customerCareActivate : function () {
		//this.getDocProfileEditOrSubmitBtn().show();
		this.getGotoDashBoardBtn().show();
	},

	customerCareDeactivate : function () {
		//this.getDocProfileEditOrSubmitBtn().hide();
		this.getGotoDashBoardBtn().hide();	
	}
});
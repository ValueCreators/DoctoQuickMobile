Ext.define('DoctorQuickMobile.controller.CustomerCareController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
							
				},
				control : {
							
				}
	},
	
	init : function(){
		
	},
	
	showCustomerCareView : function(){
		alert('customer care view');
		this.customerView = Ext.Viewport.add(Ext.create('DoctorQuickMobile.view.common.CustomerCareView'));
	}
});
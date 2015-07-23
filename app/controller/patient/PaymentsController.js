Ext.define('DoctorQuickMobile.controller.patient.PaymentsController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					patientPaymentScreen : 'patientPaymentsScreen',
					mainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
					gotoDashBoardBtn : 'patient_mainPanel toolbar button#gotoDashBoardBtn'
				},
				control : {
					patientPaymentScreen : { activate : 'onPaymentActivate', deactivate : 'onPaymentDeactivate', scope : this },	
				}
	},
	
	init : function(){
		
	},

	onPaymentActivate : function () {
		this.getGotoDashBoardBtn().show();
	},

	onPaymentDeactivate : function () {
		this.getGotoDashBoardBtn().hide();
	},
	
	showPaymentsView : function(){
		this.getMainPanelContainer().setActiveItem('patientPaymentsScreen');
    	this.getMainPanelToolbarId().setTitle("Payments");
	}
});
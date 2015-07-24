
Ext.define('DoctorQuickMobile.controller.patient.PaymentsDetailController',{
				
	extend: 'Ext.app.Controller',    
	config:{

		refs:{

			paymentDetailScreen : 'paymentDetailScreen',
			mainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
			mainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
			gotoDashBoardBtn : 'patient_mainPanel toolbar button#gotoDashBoardBtn',
			paymentDetailBackBtn : 'patient_mainPanel toolbar button#paymentDetailBackBtnId'

		},
		control : {
			paymentDetailScreen : { activate : 'onPaymentDetailActivate', deactivate : 'onPaymentDetailDeactivate', scope : this },	
			paymentDetailBackBtn : {tap: 'gotToDashBoard', scope: this}

		}
	},

	init : function(){
		this.commonController = DoctorQuickMobile.app.getController('CommonController');
	},

	onPaymentDetailActivate : function () {
		this.getPaymentDetailBackBtn().show();
	},

	onPaymentDetailDeactivate : function () {
		this.getPaymentDetailBackBtn().hide();
	},

	gotToDashBoard : function () {
		this.commonController.initializeView();
	},

	showPaymentDetailScreen : function () {
		this.getMainPanelContainer().setActiveItem('paymentDetailScreen');
    	this.getMainPanelToolbarId().setTitle("Payment Details");
	}
});



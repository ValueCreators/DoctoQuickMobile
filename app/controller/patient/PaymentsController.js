Ext.define('DoctorQuickMobile.controller.patient.PaymentsController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs : {
					patientPaymentScreen : 'patientPaymentsScreen',
					mainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
					gotoDashBoardBtn : 'patient_mainPanel toolbar button#gotoDashBoardBtn',
					gotoPaymentScreen : 'patient_mainPanel toolbar button#paymentBackBtnId',
					refundBtn : 'patientPaymentsScreen #paymentRefundBtnId',
					topUpBtn : 'patientPaymentsScreen #paymentTopupBtnId',
					topUp : 'patientPaymentsScreen #topUpBtnId',
					refund : 'patientPaymentsScreen #refundBtnId'
				},
				control : {
					patientPaymentScreen : { activate : 'onPaymentActivate', deactivate : 'onPaymentDeactivate', scope : this },	
					refundBtn : { tap: 'showRefundBtn', scope: this},
					topUpBtn : {tap: 'showTopUpBtn', scope: this},
					gotoPaymentScreen : {tap: 'paymentBackBtnHandler', scope: this},
					topUp : {tap: 'doTopUp', scope: this},
					refund : {tap: 'doRefund', scope: this}
				}
	},
	
	init : function(){
		this.commonController = DoctorQuickMobile.app.getController('CommonController');
		this.paymentDetaileController = DoctorQuickMobile.app.getController('patient.PaymentsDetailController');
	},

	onPaymentActivate : function () {
		this.getGotoDashBoardBtn().hide();
		this.getGotoPaymentScreen().show();
	},

	onPaymentDeactivate : function () {
		this.getGotoPaymentScreen().hide();
	},
	
	showPaymentsView : function(){
		this.getMainPanelContainer().setActiveItem('patientPaymentsScreen');
    	this.getMainPanelToolbarId().setTitle("Payments");
	},

	paymentBackBtnHandler : function () {
		if (this.openedRefund || this.openedTop) {
			this.openedRefund = false;
			this.openedTop = false;
			this.getMainPanelToolbarId().setTitle("Payments");
			this.getPatientPaymentScreen().getComponent('paymentBtnId').show();
			this.getPatientPaymentScreen().getComponent('paymentBalId').show();
			this.getPatientPaymentScreen().getComponent('topUpBtnId').hide();
			this.getPatientPaymentScreen().getComponent('refundBtnId').hide();
			this.getPatientPaymentScreen().getComponent('amountValueId').hide();
			this.getPatientPaymentScreen().getComponent('balanceId').hide();
		} else {
			this.commonController.initializeView();
		}
	},

	showRefundBtn : function () {
		this.openedRefund = true;
		this.getPatientPaymentScreen().getComponent('refundBtnId').show();
		this.getPatientPaymentScreen().getComponent('amountValueId').show();
		this.getPatientPaymentScreen().getComponent('balanceId').show();
		this.getMainPanelToolbarId().setTitle("Refund");
		this.getPatientPaymentScreen().getComponent('paymentBtnId').hide();
		this.getPatientPaymentScreen().getComponent('paymentBalId').hide();
		this.getPatientPaymentScreen().getComponent('topUpBtnId').hide();
	
	},

	showTopUpBtn : function () {
		this.openedTop = true;
		this.getPatientPaymentScreen().getComponent('refundBtnId').hide();
		this.getPatientPaymentScreen().getComponent('amountValueId').show();
		this.getPatientPaymentScreen().getComponent('balanceId').show();
		this.getMainPanelToolbarId().setTitle("TopUp");
		this.getPatientPaymentScreen().getComponent('paymentBtnId').hide();
		this.getPatientPaymentScreen().getComponent('paymentBalId').hide();
		this.getPatientPaymentScreen().getComponent('topUpBtnId').show();
	},

	doTopUp : function () {
		this.paymentDetaileController.showPaymentDetailScreen();
	},

	doRefund : function () {
		this.paymentDetaileController.showPaymentDetailScreen();
	}

});
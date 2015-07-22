xt.define('DoctorQuickMobile.view.patient.wallet.Payments', {
    extend: 'Ext.Panel',
    xtype: 'patientPaymentsScreen',
    fullscreen: true,
    config: {
    	itemId : 'patientPayments',
    	cls : 'patientPaymentsCls',
    	items : [
    		{
    			xtype: 'container',
    			cls: 'topHeaderCls',
    			html: 	'<div>'+
    						'<div><img src="./resources/imges/payments.png" /></div>'+
    						'<div><span>DoctorQuick Wallet</span></div>' +
    					+'</div>'
    		}, 
    		{
    			xtype: 'container',
    			cls: 'balanceCls',
    			itemId: 'balanceId',
    			tpl: patient_templates.balanceItemTpl,
    			hidden : false
    		},
    		{
    			xtype: 'textfield',
    			cls: 'amountValueCls',
    			itemId: 'amountValueId',
    			placeHolder: '00.00',
    			hidden : false
    		},
    		{
    			xtype: 'button',
    			cls: 'topUpBtnCls',
    			itemId: 'topUpBtnId',
    			text: 'Topup'
    		},
    		{
    			xtype: 'button',
    			cls: 'refundBtnCls',
    			itemId: 'refundBtnId',
    			text: 'Refund'
    		},
    		{
    			xtype: 'container',
    			cls: 'paymentBalls',
    			tpl : patient_templates.paymentBalanceItemTpl,
    		},
    		{	
    			xtype : 'container',
    			cls : 'paymentsBtnCls'
    			config : {
    				items : [

    					

    				]
    			}
    		}
    	]
    }
});
Ext.define('DoctorQuickMobile.view.patient.wallet.Payments', {
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
    						'<div class="paymentIconCls"><img src="./resources/images/dq_icon_payments.png" /></div>'+
    						'<div><span>DoctorQuick Wallet</span></div>' +
    					'</div>'
    		}, 
    		{
    			xtype: 'container',
    			cls: 'balanceCls',
    			itemId: 'balanceId',
                html : '<div><span>Balance: $72.00</span></div>',
    			//tpl: patient_templates.balanceItemTpl,
    			hidden : true
    		},
    		{
    			xtype: 'textfield',
    			cls: 'amountValueCls',
    			itemId: 'amountValueId',
    			placeHolder: '00.00',
    			hidden : true
    		},
    		{
    			xtype: 'button',
    			cls: 'topUpBtnCls',
    			itemId: 'topUpBtnId',
    			text: 'Topup',
                hidden: true
    		},
    		{
    			xtype: 'button',
    			cls: 'refundBtnCls',
    			itemId: 'refundBtnId',
    			text: 'Refund',
                hidden: true
    		},
    		{
    			xtype: 'container',
    			cls: 'paymentBalls',
                html: '<div>' + 
                        '<div class="label-cls">Balance</div>' +
                        '<div class="value-cls">$72.00</div>' +
                    '</div>'
    			//tpl : patient_templates.paymentBalanceItemTpl,
    		},
    		{	
    			xtype : 'container',
    			cls : 'paymentsBtnCls clearfix',
				items : [
					{
						xtype : 'button',
						cls : 'paymentRefundBtnCls',
						text : 'Refund',
						itemId : 'paymentRefundBtnId'
					},
					{
						xtype : 'button',
						cls : 'paymentTopupBtnCls',
						text : 'Topup',
						itemId : 'paymentTopupBtnId'
					}

				]
    		}, 
 			{
				xtype: 'container',
				itemId: 'historyTitleId',
				cls: 'historyTitleCls request-pending-txt',
				html: '<div class="title_cls">Transaction History</div>'
    		},
    		{
				xtype: 'list',
				itemId: 'reportListId',
				cls: 'reportListCls',
				//store: 'AccountStatementStore',
				itemTpl: new Ext.XTemplate( 
							'<div class="report-statement-cls">'+

								'<div class="profile-pic"><img src="./resources/images/dq_icon_payments.png" /></div>'+
								'<div class="detail-cls"><p class="name-cls">First Name LastName</p><p class="time-cls">23 november 2014</p></div>'+
								'<div class="amount-cls"><span>$15.00</span></div>'+

							'</div>'
						),
				data: [
					{ title: 'Item 1' },
					{ title: 'Item 2' },
					{ title: 'Item 3' },
					{ title: 'Item 4' }
				]
			}
    	]
    }
});
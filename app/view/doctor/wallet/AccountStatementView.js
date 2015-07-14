Ext.define('DoctorQuickMobile.view.doctor.wallet.AccountStatementView', {
	
	extend: 'Ext.Panel',
	xtype: 'account_statement_view',
	requires: [
		'Ext.TitleBar'
	],

	config : {
		cls: 'accountStatementCls',
		items : [ 
			{
				xtype: 'panel',
				itemId: 'accountStamentId',
				html: 	'<div class="account_statement_container">' +
							'<div class="report_pic">'+
	            				'<img src="./resources/images/dq_icon_payments.png" />'+
	            			'</div>'+
	            			'<div class="report_head"><span>Report</span></div>'+
	            			'<div class="wallet_value">'+
	            				'<label> Available </label>' +
	            				'<span>$72.00</span>'+
	            			'</div>'+
						'</div>'
			}, {
				xtype: 'container',
				itemId: 'historyTitleId',
				cls: 'historyTitleCls',
				html: '<div class="title_cls">Transaction History</div>'
			}, {
				xtype: 'container',
				cls: 'selectDateCls',
				items : [
					{
						xtype: 'datepickerfield',
						cls: 'fromDateCls',
						labelCls: 'calenderIConCls',
						placeHolder : 'From',
						name: 'From',
    					value: ''
					},{
						xtype: 'spacer',
						cls: 'spacerCls',
						html: '-'
					}, {
						xtype: 'datepickerfield',
						cls: 'toDateCls',
						labelCls: 'calenderIConCls',
						placeHolder : 'To',
						name: 'To',
    					value: ''
					}

				]
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
/*
 * 
 */
Ext.define('DoctorQuickMobile.view.doctor.DashboardView', {
				
	extend: 'Ext.Container',
	xtype: 'doctor_dashboardView',
	requires: [
		'Ext.TitleBar'
	],
	config: {
				fullscreen: true,
				layout: 'hbox',
				items : [
//						{
//								xtype : 'doctor_mainPanel',
//								cls: 'slide',
//								
//								// Needed to fit the whole content
//								width: '100%'												
//						}, 
//						{
//								xtype : 'doctor_slideMenu',
//								width : 250
//						},
						{
							cls: 'dashboardViewCls',
							xtype: 'panel',
							items: [{
									xtype: 'togglefield',
									name: 'awesome',
									value: 1,
									label: 'Are you awesome?',
									labelWidth: '40%'
								}, {
									xtype: 'container',
									cls: 'accountCls',
									html: 	'<div class="report_pic">'+
	            								'<img src="./resources/images/dq_icon_payments.png" />'+
	            							'</div>'+
	            							'<div class="report_head"><p>Account Statement</p>'+
	            								'<p>View your earnings in real time</p>'+
	            							'</div>'
								}, {
									xtype: 'container',
									cls: 'demoCls'
								}
							]
						}, {
							xtype: 'container',
							itemId: 'historyTitleId',
							cls: 'historyTitleCls',
							html: '<div class="title_cls">Requests Pending</div>'
						}, {
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
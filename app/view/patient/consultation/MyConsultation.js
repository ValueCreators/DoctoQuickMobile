Ext.define('DoctorQuickMobile.view.patient.consultation.MyConsultation', {
				
	extend: 'Ext.Container',
	xtype: 'myConsultationView',

	config: {
				cls : 'myDoctorsConsViewCls',
				itemId : 'myConsultationViewId',
				layout: 'fit',
				items : [
								{
									 xtype : 'list',
									 itemId : 'myConsultatedDoctorsList',
									 cls: 'myDoctorsConsListCls',
									 //store : 'MyDoctorsStore',
									 selectedCls : '',
									 itemTpl: new Ext.XTemplate( 
												'<div class="doctor-list-cls clearfix">'+
													'<div class="onlineStatusCls"></div>'+
													'<div class="profile-pic"><img src="./resources/images/dq_icon_payments.png" /></div>'+
													'<div class="contentViewCls">' +
														'<div class="detail-cls clearfix"><p class="name-cls">First Name LastName</p><p class="time-cls">10/03/2015</p></div>'+
														'<div class="amount-cls"><span>Thanks for the advice . I will be touch with results from those tests.</span></div>'+
													'</div>' +
													'<img class="nextArrowIconCls" src="./resources/images/arrow_grey.png">'+
												'</div>'
											),
									data: [
										{ title: 'Item 1' },
										{ title: 'Item 2' },
										{ title: 'Item 3' },
										{ title: 'Item 4' }
									]
									 //itemTpl : patient_templates.consultDoctorItemTpl,
								}
						]
			}
});
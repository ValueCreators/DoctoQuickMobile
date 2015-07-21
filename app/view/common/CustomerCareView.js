/**
 * 
 *    Customer care view for both patient and doctor
 *
 *
 *                  Author@thiyagu
 */

 Ext.define('DoctorQuickMobile.view.common.CustomerCareView', {


 	extend: 'Ext.Panel',
	xtype: 'customerCareView',
	config: {
				itemId : 'customerCareViewId',	
				cls : 'customerCareViewCls',
				items : [
							{
								xtype: 'container',
								cls: 'header_txt_cls',
								html: '<div><label>Please contact us through the form below or request a call back</label></div>'
							},{
								xtype: 'textareafield',
								maxRows: 6,
								itemId: 'messageContentId'
							},{
								xtype: 'button',
								cls: 'send_btn_cls',
								itemId: 'commentSendBtnId',
								text: 'Send'
							},{
								xtype: 'spacer',
								cls: 'bottom_container_space_cls'
							},{
								xtype: 'container',
								cls: 'time_indication_cls',
								html: 	'<div>'+
											'<div><img src="" /></div>' + 
											'<div><span>Working Hours: 9am to 9pm</span></div>'+
											'<div><label>(Indian Standard Time)</label></div>'
										+'</div>'
							},{
								xtype: 'button',
								text: 'Request a Callback',
								cls: 'call_request_cls',
								itemId: 'callRequestBtnId'
							}

						]
			}

 });
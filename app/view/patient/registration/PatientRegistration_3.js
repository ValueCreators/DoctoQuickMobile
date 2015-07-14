/**
 *  Patient registration OTP Code confirmation view
 */

 Ext.define('DoctorQuickMobile.view.patient.registration.PatientRegistration_3', {

 	extend: 'Ext.Panel',
 	xtype: 'patientRegistration_3',
 	fullscreen: true,


 	config: {
 		
 		items : [
 			{
 				xtype: 'toolbar',
 				docked: 'top',
 				items : {
 					xtype: 'button',
 					text: 'Back',
 					itemId: 'back-btn-Id2',
 					cls: 'back-btn-cls',
 					iconCls: 'back-btn-icon-cls'
 				}
 			},
 			{
    		
	    		xtype : 'container',
	    		cls : 'headerCls gridCls',
	            html : '<div class="imgCls"><img src="./resources/images/dq_patient_registration_progress2.png"></img></div>'+
	                   '<div class="headerDescCls"><span>Please enter the 4-digit verification code in the text message sent to</span></div>' +
	                   '<div id="otp-mobilenumber"><span></span></div>'
 			}, {
 				xtype: 'container',
 				cls: 'otp-cls',
 				itemId: 'patientReg3FormId',
 				items : [
 					{
			            xtype: 'numberfield',
			            name: 'otp1',
			            cls: 'spaceBtwCls otp1-cls fl-left',
			            itemId: 'otp1Id',
			            autoComplete: false,
			            clearIcon : false,
			            required : true,
			            maxLength: 1,
			            listeners: {
			            	keyup : function (ele, event, eObj) {
			            		console.log('on key up events');
			            		DoctorQuickMobile.app.getController('CommonController').removeEmptyCls(ele, event);
			            	}
			            }
			        },
			        {
			            xtype: 'numberfield',
			            name: 'otp1',
			            cls: 'spaceBtwCls otp2-cls fl-left',
			            itemId: 'otp1Id',
			            autoComplete: false,
			            clearIcon : false,
			            required : true,
			            maxLength: 1,
			            listeners: {
			            	keyup : function (ele, event, eObj) {
			            		console.log('on key up events');
			            		DoctorQuickMobile.app.getController('CommonController').removeEmptyCls(ele, event);
			            	}
			            }
			        },
			        {
			            xtype: 'numberfield',
			            name: 'otp1',
			            cls: 'spaceBtwCls otp3-cls fl-left',
			            itemId: 'otp1Id',
			            autoComplete: false,
			            clearIcon : false,
			            required : true,
			            maxLength: 1,
			            listeners: {
			            	keyup : function (ele, event, eObj) {
			            		console.log('on key up events');
			            		DoctorQuickMobile.app.getController('CommonController').removeEmptyCls(ele, event);
			            	}
			            }
			        },
			        {
			            xtype: 'numberfield',
			            name: 'otp1',
			            cls: 'spaceBtwCls otp4-cls',
			            itemId: 'otp1Id',
			            autoComplete: false,
			            clearIcon : false,
			            required : true,
			            maxLength: 1,
			            listeners: {
			            	keyup : function (ele, event, eObj) {
			            		console.log('on key up events');
			            		DoctorQuickMobile.app.getController('CommonController').removeEmptyCls(ele, event);
			            	}
			            }
			        }
			    ]

 			}, 
 			{
 				xtype: 'container',
 				cls: 'otp-btn-cls clearfix',
 				items : [
		 			{
			        	xtype: 'button',
			        	cls : 'resendBtnCls bgBtn1 fl-left',
						text : 'Resend',
						itemId : '_patientOtpResendBtn'
			        },{
			        	xtype: 'button',
			        	cls : 'confirmBtnCls bgBtn1 fl-left',
						text : 'Confirm',
						itemId : '_patientOtpConfirmBtn'
			        }
		        ]
	    	},{
	        	xtype: 'container',
	        	cls: 'bottomTextCls',
	        	html: "<div>Did't receive a text from DoctorQuick? Tap Resend.</div>"
	        },{
	        	xtype: 'container',
	        	cls: 'bottomTextCls',
	        	html: '<div>By signing in, I agree to DoctorQuicks terms and conditions</div>'
	        }
 		]
 	}
 });
 				
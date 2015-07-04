/**
 *  Patient Registration2 view
 *
 * In this view contains user detail such as mobile number, gender, email address and password
 *
 *	******* author@Thiyagu ************
 */

 Ext.define('DoctorQuickMobile.view.patient.registration.PatientRegistration_2', {

 	extend: 'Ext.Panel',
 	xtype: 'patientRegistration_2',
 	fullscreen: true,


 	config: {
 		
 		items : [

 			{
 				xtype: 'toolbar',
 				docked: 'top',
 				items : {
 					xtype: 'button',
 					itemId: 'back-btn-Id',
 					text: 'Back',
 					cls: 'back-btn-cls',
 					iconCls: 'back-btn-icon-cls'
 				}
 			},{
    		
	    		xtype : 'container',
	    		cls : 'headerCls gridCls',
	            html : '<div class="imgCls"><img src="./resources/images/dq_patient_registration_progress2.png"></img></div>'+
	                   '<div class="headerDescCls"><span>Age, gender, email & password</span></div>'
 			},{
 				xtype: 'formpanel',
 				cls: 'patientReg1FormCls  patientReg2FormCls',
 				itemId: 'patientReg2FormId',
 				scrollable: true,
 				items : [
 					{
			            xtype: 'numberfield',
			            name: 'mobileNumber',
			            cls: 'spaceBtwCls',
			            itemId: 'mobileNumberId',
			            placeHolder: 'Mobile Number',
			            autoComplete: false,
			            clearIcon : false,
			            required : true,
			            listeners: {
			            	keyup : function (ele, event, eObj) {
			            		console.log('on key up events');
			            		DoctorQuickMobile.app.getController('CommonController').removeEmptyCls(ele, event);
			            	}
			            }
			        },{
			        	xtype: 'container',
			        	cls: 'gender-container-cls',
			        	itemId: 'genderId',
			        	items: [
			        		{
					            xtype: 'radiofield',
					            cls: 'gender-male-cls fl-left',
					            name : 'gender',
					            value: 'male',
					            label: 'Male',
					            labelWidth: '100%',
					            checked: true
					        },{
					            xtype: 'radiofield',
					            cls: 'gender-male-cls',
					            name : 'gender',
					            value: 'female',
					            label: 'Female',
					            labelWidth: '100%'
					        }
			        	]
			        },{
			            xtype: 'emailfield',
			            name: 'email',
			            cls: 'spaceBtwCls',
			            itemId: 'emailId',
			            placeHolder: 'Email Address',
			            autoComplete: false,
			            clearIcon : false,
			            required : true,
			            listeners: {
			            	keyup : function (ele, event, eObj) {
			            		console.log('on key up events');
			            		DoctorQuickMobile.app.getController('CommonController').removeEmptyCls(ele, event);
			            	}
			            }
			        },{
			            xtype: 'passwordfield',
			            name: 'password',
			            cls: 'spaceBtwCls',
			            itemId: 'passwordId',
			            placeHolder: 'Password',
			            autoComplete: false,
			            clearIcon : false,
			            required : true,
			            listeners: {
			            	keyup : function (ele, event, eObj) {
			            		console.log('on key up events');
			            		DoctorQuickMobile.app.getController('CommonController').removeEmptyCls(ele, event);
			            	}
			            }
			        },{
    		
			    		xtype : 'container',
			    		cls : 'emailDescCls',
			            html : '<div class="descCls"><span>Prescription and consultation receipts will be mailed to this email address.</span></div>'
		 			},{
			        	xtype: 'button',
			        	cls : 'nextBtnCls bgBtn1',
						text : 'Next',
						itemId : '_registerPatientNext2Btn'
			        },{
			        	xtype: 'container',
			        	cls: 'bottomTextCls',
			        	html: '<div>By signing in, I agree to DoctorQuicks terms and conditions</div>'
			        }
 				]
 			}

 		]

 	}





 });
/**
 *   Patient registration one
 */

 Ext.define('DoctorQuickMobile.view.patient.registration.PatientRegistration_1', {

 	extend: 'Ext.Panel',
 	xtype: 'patientRegistration_1',
 	fullscreen: true,


 	config: {
 		
 		items : [
 			{
    		
	    		xtype : 'container',
	    		cls : 'headerCls gridCls',
	            html : '<div class="headerTxtCls"><h2>Patient Registration</h2></div>'+
	                    '<div class="imgCls"><img src="./resources/images/dq_patient_registration_progress1.png"></img></div>'+
	                    '<div class="headerDescCls"><span>Register now and get your first consultation FREE with a doctor of your choice</span></div>'
 			},{
 				xtype: 'formpanel',
 				cls: 'patientReg1FormCls',
 				itemId: 'patientReg1FormId',
 				scrollable: true,
 				items : [
 					{
			            xtype: 'textfield',
			            name: 'firstName',
			            cls: 'spaceBtwCls',
			            itemId: 'firstNameId',
			            placeHolder: 'First Name',
			            autoComplete: false,
			            clearIcon : false,
			            required : true,
			            listeners: {
			            	keyup : function (ele, event, eObj) {
			            		console.log('on key up events');
			            		DoctorQuickMobile.app.getController('CommonController').removeEmptyCls(ele, event);
			            	}
			            }
			        },
			        {
			            xtype: 'textfield',
			            name: 'middleName',
			            itemId: 'middleNameId',
			            placeHolder: 'Middle Name',
			            cls: 'spaceBtwCls',
			            autoComplete: false,
			            clearIcon : false,
			            required: false,
			        },
			        {
			            xtype: 'textfield',
			            name: 'lastName',
			         	itemId: 'lastNameId',
			            placeHolder: 'Last Name',
			            cls: 'spaceBtwCls',
			            autoComplete: false,
			            clearIcon : false,
			            required: true,
			            listeners: {
			            	keyup : function (ele, event, eObj) {
			            		console.log('on key up events');
			            		DoctorQuickMobile.app.getController('CommonController').removeEmptyCls(ele, event);
			            	}
			            }
			        },
			        {
			            xtype: 'numberfield',
			            name: 'age',
			            cls: 'spaceBtwCls',
			            itemId: 'ageId',
			            placeHolder: 'Age',
			            autoComplete: false,
			            clearIcon : false,
			            required : true,
			            numbered: true,
			            listeners: {
			            	keyup : function (ele, event, eObj) {
			            		console.log('on key up events');
			            		DoctorQuickMobile.app.getController('CommonController').removeEmptyCls(ele, event);
			            	}
			            }
			        },
			        {
			        	xtype: 'button',
			        	cls : 'nextBtnCls bgBtn1',
						text : 'Next',
						itemId : '_registerPatientNext1Btn'
			         },
			        //	{
			        // 	xtype: 'container',
			        // 	cls: 'bottomTextCls',
			        // 	html: '<div>By signing in, I agree to DoctorQuicks terms and conditions</div>'
			        // }
 				]
 			}

 		]
 	}


 });
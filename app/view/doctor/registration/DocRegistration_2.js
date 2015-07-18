/*
 * 
 *	Registration For doctor Flow for second view
 *
 *	This view holds the doctor information such as email and mobile number
 *
 *
 *--------------------------------------------------------------
 *						author@thiyagu
 *--------------------------------------------------------------
*/
Ext.define('DoctorQuickMobile.view.doctor.registration.RegisterDoctor2', {
    extend: 'Ext.Panel',
    xtype: 'docRegistration_2',
    config: {
    	
    	itemId : 'registerNameScreenId2',
    	cls : 'registerContainer2Cls bg1',
    	
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
 			}, 
            {
    		  
                xtype : 'container',
                cls : 'headerCls gridCls registerNameContainerCls ',
                html : '<div class="imgCls"><img src="./resources/images/docReg2.png"></img></div>'
    	   },
           {
				xtype : 'container',
				itemId : "registerDocContainer2",
    			cls : 'registerContainerContentCls gridCls',
    			scrollable: {
				    direction: 'vertical',
				    directionLock: true
				},

    			items: [{
					xtype : 'fieldset',
					itemId : 'registerDocto2Form',
					cls : 'reg2ContainerFormPanelCls',
					//scrollable : true,
					items : [{
						xtype : 'emailfield',
						cls : 'textfiledCls',
						name: 'email',
						itemId: 'emailId',
						required: true,
						placeHolder : 'Enter your mail Id',
						clearIcon : false
					},{
						xtype : 'spacer',
						cls : 'spacerCls'
					},{
						xtype : 'numberfield',
						cls : 'textfiledCls',
						name : 'mobile',
						itemId : 'mobileId',
						required : true,
						placeHolder : 'Mobile number',
						clearIcon : false
					},{
						xtype : 'spacer',
						cls : 'spacerCls'
					},{
						xtype : 'button',
						cls : 'nextBtnCls bgBtn1',
						text : 'Submit',
						itemId : 'registerDoctor'
					}]
				}]
        		
    	    }
        ]
    }
});

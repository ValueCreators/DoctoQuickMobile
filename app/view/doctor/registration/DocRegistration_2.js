/**
 * 
 */
Ext.define('DoctorQuickMobile.view.registration.RegisterDoctor2', {
    extend: 'Ext.Panel',
    xtype: 'registerDoctorScreen2',
    config: {
    	
    	itemId : 'registerNameScreenId2',
    	cls : 'registerContainer2Cls bg1',
    	
    	items : [
            //itemId : 'registerScreen2ContentId',
            {
                xtype : 'container',
                cls : 'headerCls gridCls',
                itemId : 'backBtnRegistration',
                html : '<div class="backBtnCls" onclick="DoctorQuickMobile.app.getController(\'doctoController.LoginController\').showDoctoRegistrationView1()"><img src="./resources/images/dq_arrow_back_black.png"></img><span>Back</span></div>'
            },
            {
    		  
                xtype : 'container',
                cls : 'headerCls gridCls registerNameContainerCls ',
                html : '<div class="imgCls"><img src="./resources/images/dq_patient_registration_progress2.png"></img></div>'
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
						placeHolder : 'Enter your mailId'
					},{
						xtype : 'spacer',
						cls : 'spacerCls'
					},{
						xtype : 'numberfield',
						cls : 'textfiledCls',
						placeHolder : 'Mobile number'
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

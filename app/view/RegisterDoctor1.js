Ext.define('DoctorQuickMobile.view.registration.RegisterDoctor1', {
    extend: 'Ext.Panel',
    xtype: 'registerDoctorScreen1',
    config: {
    	
    	itemId : 'registerNameScreenId',
    	cls : 'registerNameContainerCls bg1',
    	
    	items : [{
    		
    		xtype : 'container',
    		cls : 'headerCls gridCls',
            html : '<div class="headerTxtCls"><h2>Doctor Registration</h2></div>'+
                    '<div class="imgCls"><img src="./resources/images/dq_patient_registration_progress1.png"></img></div>'+
                    '<div class="headerDescCls"><span>DoctorQuick is a unique technology to help you consult and treat patients at your own time and pace from different corners of the country and get paid for your time.</span></div>'
    	},{
    		
    		xtype : 'fieldset',
    		itemId : '_nameDetailsPanel',
    		cls : 'nameDetailsPanelCls',
    		//scrollable : true,
    		items : [{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			placeHolder : 'First Name'
    		},{
                xtype : 'spacer',
                cls : 'spacerCls'
            },{
    			xtype : 'textfield',
    			cls : 'textfiledCls',
    			placeHolder : 'Middle Name'
    		},{
                xtype : 'spacer',
                cls : 'spacerCls'
            },{
    			xtype : 'textfield',
    			cls : 'textfiledCls regNameLastFieldCls',
    			placeHolder : 'Last Name'
    		},{
                xtype : 'spacer',
                cls : 'spacerCls'
            },{
    			xtype : 'button',
    			cls : 'nextBtnCls bgBtn1',
    			text : 'Next',
    			itemId : '_registerNameNextBtn'
    		}]
    	}]
    }
});

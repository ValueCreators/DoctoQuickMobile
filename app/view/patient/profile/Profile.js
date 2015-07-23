Ext.define('DoctorQuickMobile.view.patient.profile.Profile', {
    extend: 'Ext.Panel',
    xtype: 'patientProfileScreen',
    fullscreen: true,
     config: {
    	itemId : 'patientProfile',
    	cls : 'doctorLoginCls reviewPanelCls',
    	items : [
    				{   
    				    xtype : 'panel',
    				    scrollable : true,
    				    itemId : '_doctorProfileContainer',
    				    cls : 'patientProfilePanelContainerCls',
    				    //height : '100%',
			            tpl : patient_templates.profileContainerTpl
			        }/*,{
			        	xtype : 'toolbar',
			        	docked : 'bottom',
			        	//layout : 'hbox',
			        	//title : 'Doctor Registration',
			        	cls : 'reviewPanelToolbarCls',
			        	items : [
			        		{
				    			xtype : 'button',
				    			cls : 'loginBtnCls bgBtn1 reviewPanelToolBtnCls',
				    			itemId : 'closeDoctorProfile',
				    			text : 'Back',
				    			//flex : 1
			        		},{
				    			xtype : 'spacer',
				    			cls : 'spacerCls'
				    		},{
				    			xtype : 'button',
				    			cls : 'loginBtnCls bgBtn1 reviewPanelToolBtnCls',
				    			itemId : 'editOrSubmitProfile',
				    			text : 'Edit',
				    			//flex : 1
			        		}

			        	]
			        }*/
			    ]
    		}
});


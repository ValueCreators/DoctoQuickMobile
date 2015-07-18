Ext.define('DoctorQuickMobile.view.doctor.profile.Profile', {
    extend: 'Ext.Panel',
    xtype: 'reviewScreen',
    fullscreen: true,
    config: {
    	itemId : 'doctorProfile',
    	cls : 'doctorLoginCls reviewPanelCls',
    	items : [{
			        	xtype : 'toolbar',
			        	docked : 'top',
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
				    			itemId : 'editProfile',
				    			text : 'Edit',
				    			//flex : 1
			        		}

			        	]
			        },
    				{   
    				    xtype : 'container',
    				    scrollable : true,
    				    itemId : '_doctorProfileContainer',
    				    cls : 'reviewPanelContainerCls',
			            tpl : doctor_templates.profileContainerTpl
			        }
			    ]
    		}
});


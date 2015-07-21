Ext.define('DoctorQuickMobile.view.doctor.profile.Profile', {
    extend: 'Ext.Panel',
    xtype: 'doctorProfileScreen',
    //fullscreen: true,
    config: {
    	itemId : 'doctorProfile',
    	cls : 'doctorLoginCls reviewPanelCls',
    	items : [
    				{   
    				    xtype : 'container',
    				    scrollable : true,
    				    itemId : '_doctorProfileContainer',
    				    cls : 'docProfilePanelContainerCls',
			            tpl : doctor_templates.profileContainerTpl
			        }/*,

			        {
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


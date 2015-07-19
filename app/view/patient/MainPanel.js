Ext.define('DoctorQuickMobile.view.patient.MainPanel', {
	
	extend: 'Ext.Panel',
	xtype: 'patient_mainPanel',
	
	config: {
				itemId : 'patientMainPanel',	
				cls : 'patientMainPanelCls slide',
				items : [
				         {
				        	 xtype : 'toolbar',
				        	 title : 'DoctorQuick',
				        	 docked : 'top',
				        	 cls : 'mainPanelToolbarCls',
				        	 itemId : 'mainPanelToolbarId',
				        	 items : [{
							    			xtype : 'button',
							    			cls : 'loginBtnCls bgBtn1 reviewPanelToolBtnCls',
							    			itemId : 'gotoDashBoardBtn',
							    			text : 'Back',
							    			hidden : true
						        		},
				        	          {
				        	        	  xtype : 'spacer'
				        	          },{
							    			xtype : 'button',
							    			cls : 'loginBtnCls bgBtn1 reviewPanelToolBtnCls',
							    			itemId : 'editOrSubmitProfile',
							    			text : 'Edit',
							    			hidden : true
						        		},
				        	          {
										  name : 'patient_nav_btn',
										  iconCls : 'menu_iconCls',
										  ui : 'plain'
				        	          }
				        	         ]
				         },{
								xtype : 'panel',
								itemId : '_mainPanelContainer',
								cls : 'mainPanelContainerCls',
								config : {

									layout : 'card',
									
									items : [{
										xtype : 'patientProfileScreen'
									}]
								}
							}
				        ]
	}
});


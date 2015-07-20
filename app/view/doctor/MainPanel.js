Ext.define('DoctorQuickMobile.view.doctor.MainPanel', {
		
	extend: 'Ext.Panel',
	xtype: 'doctor_mainPanel',
	
	config: {
			itemId : 'doctorMainPanel',	
			cls : 'doctorMainPanelCls slide',
			items : [ {
				xtype : 'toolbar',
				title : 'DoctorQuick',
				docked : 'top',
				cls : 'mainPanelToolbarCls',
				itemId : 'mainPanelToolbarId',
				items : [
					{
						xtype: 'container',
						cls: 'batch-cls',
						itemId: 'batchBtnId',
						html: '<div><img src="./resources/images/nitify-icon.png"></div>',
						hidden : true
					},{
		    			xtype : 'button',
		    			cls : 'loginBtnCls bgBtn1 reviewPanelToolBtnCls',
		    			itemId : 'gotoDashBoardBtn',
		    			text : 'Back',
		    			hidden : true
	        		},
					{
						xtype: 'container',
						cls : 'status-notification-cls',
						itemId: 'statusNotificationId',
						html: '<div id="status-btn-id" class="offline-cls"></div>',
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
						xtype: 'button',
						itemId: 'doctor_nav_btn_Id',
						name : 'doctor_nav_btn',
						iconCls : 'menu_iconCls',
						ui : 'plain'
					}
				]
			}, {
				xtype : 'panel',
				itemId : '_mainPanelContainer',
				cls : 'mainPanelContainerCls',
				config : {

					layout : 'card',
					
					items : [
					{
						xtype: 'doctor_dashboardView'
					},
					{
						xtype : 'doctorProfileScreen'
					}]
				}
			}
			/**/
		]
	}
});

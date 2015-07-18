Ext.define('DoctorQuickMobile.view.doctor.MainPanel', {
		
	extend: 'Ext.Container',
	xtype: 'doctor_mainPanel',
	
	config: {
				itemId : 'doctorMainPanel',	
				cls : 'doctorMainPanelCls slide',
				items : [
				         {
				        	 xtype : 'toolbar',
				        	 title : 'DoctorQuick',
				        	 docked : 'top',
				        	 cls : 'mainPanelToolbarCls',
				        	 
				        	 items : [
				        	          {
				        	        	  xtype : 'spacer'
				        	          },
				        	          {
				        	          	  xtype : 'button',
										  name : 'doctor_nav_btn',
										  iconCls : 'menu_iconCls',
										  ui : 'plain'
				        	          }
				        	         ]
				         },
				         {
				        	 xtype : 'container',
				        	 cls : 'containerCls',
				        	 html : '<div style="padding:50px;text-align:center;font-weight:bold;">Welcome Doctor</div>'
				         }
				        ]
	}
});

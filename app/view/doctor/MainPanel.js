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
										  name : 'doctor_nav_btn',
										  iconCls : 'menu_iconCls',
										  ui : 'plain'
				        	          }
				        	         ]
				         },
				         {
				        	 xtype : 'container',
				        	 cls : 'containerCls',
				        	 html : 'Welcome Doctor'
				         }
				        ]
	}
});

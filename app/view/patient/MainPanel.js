Ext.define('DoctorQuickMobile.view.patient.MainPanel', {
	
	extend: 'Ext.Container',
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
				        	 
				        	 items : [
				        	          {
				        	        	  xtype : 'spacer'
				        	          },
				        	          {
										  name : 'patient_nav_btn',
										  iconCls : 'menu_iconCls',
										  ui : 'plain'
				        	          }
				        	         ]
				         },
				         {
				        	 xtype : 'container',
				        	 cls : 'containerCls',
				        	 html : 'Welcome Patient'
				         }
				        ]
	}
});


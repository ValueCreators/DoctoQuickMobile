Ext.define('DoctorQuickMobile.view.patient.SlideMenu', {
	
	extend: 'Ext.Container',
	xtype: 'patient_slideMenu',
	
	config: {
					
		itemId : 'patientSlideMenuId',			
		cls : 'nav-list slideMenuCls in',
		
		items : [
		         {
		        	 xtype : 'toolbar',
		        	 docked : 'top',
		        	 cls : 'slideMenuTopToolbarCls',
		         },
		         {
		        	 xtype : 'list',
		        	 itemId : 'patientMenuList',
		        	 cls : 'patientMenuListCls',
		        	 itemTpl : common_templates.menuItemTpl,
		        	 scrollable: false,
		        	 data : [
		        	         {
		        	        	 id : 'profile',
		        	        	 title : 'Profile',
		        	        	 iconCls : 'profile_iconCls'
		        	         },
		        	         {
		        	        	 id : 'myDoctors',
		        	        	 title : 'My Doctors',
		        	        	 iconCls : 'myDocs_iconCls'
		        	         },
		        	         {
		        	        	 id : 'myConsultations',
		        	        	 title : 'My Consultations',
		        	        	 iconCls : 'myConsult_iconCls'
		        	         },
		        	         {
		        	        	 id : 'payments',
		        	        	 title : 'Payments',
		        	        	 iconCls : 'payments_iconCLs'
		        	         },
		        	         {
		        	        	 id : 'reviewApp',
		        	        	 title : 'Review App',
		        	        	 iconCls : 'review_iconCls'
		        	         },
		        	         {
		        	        	 id : 'notif',
		        	        	 title : 'Notifications',
		        	        	 iconCls : 'notif_iconCls',
		        	        	 showNotifToggle : 'true'
		        	         },
		        	         {
		        	        	 id : 'customerCare',
		        	        	 title : 'Customer Care',
		        	        	 iconCls : 'customerCare_iconCls'
		        	         }
		        	        ]
		         },	
		         {
		        	 xtype : 'toolbar',
		        	 docked : 'bottom',
		        	 cls : 'slideMenuBtmToolbarCls',
		        	 
		        	 items : [
		        	          {
		        	        	  xtype : 'button',
		        	        	  itemId : 'signOutBtn',
		        	        	  cls : 'signOutBtnCls',
		        	        	  iconCls : 'signOut_iconCls',
		        	        	  text : 'Sign Out'
		        	          }
		        	         ]
		         }
		        ]
					
	}
});
Ext.define('DoctorQuickMobile.view.doctor.SlideMenu', {
			
	extend: 'Ext.Container',
	xtype: 'doctor_slideMenu',
	
	config: {
					
		itemId : 'doctorSlideMenuId',			
		cls : 'nav-list slideMenuCls',
		
		items : [
		         {
		        	 xtype : 'toolbar',
		        	 docked : 'top',
		        	 cls : 'slideMenuTopToolbarCls',
		         },
		         {
		        	 xtype : 'list',
		        	 itemId : 'doctorMenuList',
		        	 cls : 'doctorMenuListCls',
		        	 itemTpl : common_templates.menuItemTpl,
		        	 scrollable: false,
		        	 data : [
		        	         {
		        	        	 id : 'profile',
		        	        	 title : 'Profile',
		        	        	 iconCls : 'profile_iconCls'
		        	         },
		        	         {
		        	        	 id : 'myConsultations',
		        	        	 title : 'My Consultations',
		        	        	 iconCls : 'myConsult_iconCls'
		        	         },
		        	         {
		        	        	 id : 'reviewApp',
		        	        	 title : 'Review App',
		        	        	 iconCls : 'review_iconCls'
		        	         },
		        	         {
		        	        	 id : 'customerCare',
		        	        	 title : 'Customer Care',
		        	        	 iconCls : 'customerCare_iconCls'
		        	         },
		        	         {
		        	        	 id : 'acctStatement',
		        	        	 title : 'Account Statement',
		        	        	 iconCls : 'acctStat_iconCls'
		        	         },
		        	         {
		        	        	 id : 'notif',
		        	        	 title : 'Notifications',
		        	        	 iconCls : 'notif_iconCls',
		        	        	 showNotifToggle : 'true'
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
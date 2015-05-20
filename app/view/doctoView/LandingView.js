Ext.define('DoctoApp.view.doctoView.LandingView', {
	extend : 'Ext.Panel',
	xtype: 'LandingView',
	config : {
		itemId : [
		          {
		        	  xtype : 'component',
		        	  itemId : 'landingArea',
		        	  html : '<p>Welcome to DoctorQuick</p>'
		          },
		
		]
	}
});
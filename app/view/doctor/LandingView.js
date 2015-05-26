/**
 * 
 */
Ext.define('DoctorQuickMobile.view.doctor.LandingView', {
				
	extend: 'Ext.Container',
	xtype: 'doctor_landingView',
	requires: [
		'Ext.TitleBar'
	],
	config: {
				fullscreen: true,
				layout: 'hbox',
				items : [{
								xtype : 'doctor_mainPanel',
								cls: 'slide',
								
								// Needed to fit the whole content
								width: '100%'												
						}, {
								xtype : 'doctor_slideMenu',
								width : 250
						}]
			}
});
/**
 * 
 */
Ext.define('DoctorQuickMobile.view.patient.LandingView', {
				
	extend: 'Ext.Container',
	xtype: 'patient_landingView',
	requires: [
		'Ext.TitleBar'
	],
	config: {
				fullscreen: true,
				layout: 'hbox',
				items : [{
								xtype : 'patient_mainPanel',
								cls: 'slide',
								
								// Needed to fit the whole content
								width: '100%'												
						}, {
								xtype : 'patient_slideMenu',
								width : 250
						}]
			}
});
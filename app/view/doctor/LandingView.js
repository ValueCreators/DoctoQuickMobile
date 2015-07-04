/**
 * This is the Landing view for doctor 
 */
Ext.define('DoctorQuickMobile.view.doctor.LandingView', {
				
	extend: 'Ext.Container',
	xtype: 'doctor_landingView',

	config: {
				cls : 'doctorLandingViewCls',
				fullscreen: true,
				layout: 'hbox',
				items : [{
								xtype : 'doctor_mainPanel',
								
								// Needed to fit the whole content
								width: '100%'												
						}, {
								xtype : 'doctor_slideMenu',
								width : 250
						}]
			}
});
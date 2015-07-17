/**
 * 
 */
Ext.define('DoctorQuickMobile.view.patient.LandingView', {
				
	extend: 'Ext.Container',
	xtype: 'patient_landingView',

	config: {
				cls : 'patientLandingViewCls',
				fullscreen: true,
				layout: 'hbox',
				items : [{
								xtype : 'patient_mainPanel',
								
								// Needed to fit the whole content
								width: '100%'												
						}, {
								xtype : 'patient_slideMenu',
								width : '250px'
						}]
			}
});
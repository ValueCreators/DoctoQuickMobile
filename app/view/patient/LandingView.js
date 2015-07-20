/**
 * 
 */
Ext.define('DoctorQuickMobile.view.patient.LandingView', {
				
	extend: 'Ext.Container',
	xtype: 'LandingView',

	config: {
				cls : 'patientLandingViewCls',
				fullscreen: true,
				layout: 'hbox',
				items : [
							{
								xtype : 'patient_mainPanel',
								flex : 1
							},											
							{
								xtype : 'patient_slideMenu',
								width : '250px',
								//hidden: true
							}
						]
			}
});
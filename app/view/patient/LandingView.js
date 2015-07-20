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
				items : [
							{
								xtype: 'container',
								cls: 'togglw-container-cls',
								html:   '<div class="switch">' +
											'<div><span>Did You Know?</span></div>'+
											'<div><span>First consultation with the doctor of your choice is free!</span></div>'+
										'</div>'
							}, 
							{
								xtype : 'container',
								cls : 'request-pending-txt',
								html : '<div>Find a Doctor</div>'
							},
							{
								xtype: 'list',
								itemId : 'listId',
								cls : 'patientReqListCls',
								//store : 'RequestPendingStore',
								itemTpl : patient_templates.findDoctorItemTpl,
								data: [
								    { 
								    	profilePic: './resources/images/icon_specialities.png',
								    	name: 'Medical Speciality',
								    	description: 'Find a doctor specific to your problem',
								    },{ 
								    	profilePic: './resources/images/icon_search.png',
								    	name: 'Search',
								    	description: 'Search Doctors by name or speciality',
								    },{ 
								    	profilePic: './resources/images/icon_doctor.png',
								    	name: 'My Doctors',
								    	description: 'Doctors you have recently consulted',
								    },
								]
							},											
							{
									xtype : 'patient_slideMenu',
									width : '250px',
									//hidden: true
							}]
			}
});
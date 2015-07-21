/*
 * 
 */
Ext.define('DoctorQuickMobile.view.patient.DashboardView', {
				
	extend: 'Ext.Panel',
	xtype: 'patient_dashboardView',

	config: {
			cls : 'patientDashboardCls',
			items: [
					{
						xtype: 'container',
						cls: 'togglw-container-cls',
						html:   '<div class="switch">' +
									'<div class="questionCls"><span>Welcome?</span></div>'+
									'<div class="questionDesCls"><span>First a doctor below and get treated Quickly!</span></div>'+
								'</div>'
					},
					{
						xtype: 'container',
						cls: 'demo-video-link',
						html: '<div class="demo-txt-cls"><span>Demo</span><img src="./resources/images/icon_play_demo.png" /></div>'
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
					}
			]
		}
});
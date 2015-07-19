Ext.define('DoctorQuickMobile.view.patient.MainPanel', {
	
	extend: 'Ext.Container',
	xtype: 'patient_mainPanel',
	
	config: {
				itemId : 'patientMainPanel',	
				cls : 'patientMainPanelCls slide',
				items : [
							 {
								xtype : 'toolbar',
								title : 'DoctorQuick',
								docked : 'top',
								cls : 'mainPanelToolbarCls',

								items : [

									{
										xtype: 'container',
										cls: 'batch-cls',
										html: '<div><img src="./resources/images/nitify-icon.png"></div>'
									},
									{
										xtype: 'container',
										cls : 'status-notification-cls',
										html: '<div id="status-btn-id" class="offline-cls"></div>'
									},
									{
										xtype : 'spacer'
									},
									{
										xtype: 'button',
										itemId: 'doctor_nav_btn_Id',
										name : 'doctor_nav_btn',
										iconCls : 'menu_iconCls',
										ui : 'plain'
									}
								]
							 },
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
							}, {
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


/*
 * 
 */
Ext.define('DoctorQuickMobile.view.doctor.DashboardView', {
				
	extend: 'Ext.Container',
	xtype: 'doctor_dashboardView',

	config: {	
				cls: 'doctor_dashboardVieCls',
				items : [
					{
						xtype : 'container',
						cls : 'topContainerCls',
						items : [
							{	
								xtype : 'container',
								cls : 'containerCls',
								html : '<div id="status-txt-id" class="status-txt-cls">Offline</div>'
							},
							{
					            xtype: 'container',
								cls: 'togglw-container-cls',
					            html: '<div class="switch">' +
										  '<input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox"> ' +	
										  '<label id="cmn-toggle-2" for="cmn-toggle-1">Offline</label>' +
										'</div>'
							},
							{
								xtype: 'container',
								cls: 'togglw-container-cls',
								html:   '<div class="switch">' +
											'<div class="questionCls"><span>Welcome Doctor?</span></div>'+
											'<div class="questionDesCls"><span>When you are ready to receive to patients, just set your status to "Online"!</span></div>'+
										'</div>'
							},
							{
								xtype: 'container',
								cls: 'demo-video-link',
								html: '<div class="demo-txt-cls"><span>Demo</span><img src="./resources/images/icon_play_demo.png" /></div>'
							},

						]

						
					}, {
			        	xtype : 'container',
			        	cls : 'request-pending-txt',
			        	html : '<div>Request Pending</div>'
			        }, {
		            	xtype: 'list',
		            	itemId : 'pendingRequestListId',
		            	cls : 'patientReqListCls',
		            	itemTpl : doctor_templates.requestPendingItemTpl,
		            	data: [
					        { 
					        	profilePic: './resources/dq_icon_small_mydoctors.png',
					        	firstName: 'name1',
					        	lastName: 'name2',
					        	location: 'bag',
					        	patientId: 'qwerty' },
					        { profilePic: './resources/dq_icon_small_mydoctors.png',
					        	firstName: 'name1',
					        	lastName: 'name2',
					        	location: 'bag',
					        	patientId: 'qwerty' },
					        { profilePic: './resources/dq_icon_small_mydoctors.png',
					        	firstName: 'name1',
					        	lastName: 'name2',
					        	location: 'bag',
					        	patientId: 'qwerty' },
					        { profilePic: './resources/dq_icon_small_mydoctors.png',
					        	firstName: 'name1',
					        	lastName: 'name2',
					        	location: 'bag',
					        	patientId: 'qwerty' },
					        	{ profilePic: './resources/dq_icon_small_mydoctors.png',
					        	firstName: 'name1',
					        	lastName: 'name2',
					        	location: 'bag',
					        	patientId: 'qwerty' },
					        { profilePic: './resources/dq_icon_small_mydoctors.png',
					        	firstName: 'name1',
					        	lastName: 'name2',
					        	location: 'bag',
					        	patientId: 'qwerty' },
					        { profilePic: './resources/dq_icon_small_mydoctors.png',
					        	firstName: 'name1',
					        	lastName: 'name2',
					        	location: 'bag',
					        	patientId: 'qwerty' }
					    ]
		            }
				]
			}
});
Ext.define('DoctorQuickMobile.view.doctor.MainPanel', {
		
	extend: 'Ext.Panel',
	xtype: 'doctor_mainPanel',
	
	config: {
			itemId : 'doctorMainPanel',	
			cls : 'doctorMainPanelCls slide',
			items : [ {
				xtype : 'toolbar',
				title : 'DoctorQuick',
				docked : 'top',
				cls : 'mainPanelToolbarCls',
				itemId : 'mainPanelToolbarId',
				items : [
					{
						xtype: 'container',
						cls: 'batch-cls',
						html: '<div><img src="./resources/images/nitify-icon.png"></div>',
						hidden : true
					},{
		    			xtype : 'button',
		    			cls : 'loginBtnCls bgBtn1 reviewPanelToolBtnCls',
		    			itemId : 'gotoDashBoardBtn',
		    			//text : 'Back',
		    			iconCls : 'gotoDashBoardBtnCls',
					  	ui : 'plain',
		    			hidden : true
	        		},{
		    			xtype : 'button',
		    			cls : 'loginBtnCls bgBtn1 reviewPanelToolBtnCls',
		    			itemId : 'gotoNotesMainPanelBtn',
		    			text : 'Notes',
		    			iconCls : 'gotoDashBoardBtnCls',
					  	ui : 'plain',
		    			hidden : true
	        		},
					{
						xtype: 'container',
						cls : 'status-notification-cls',
						html: '<div id="status-btn-id" class="offline-cls"></div>',
						hidden : true
					},
					{
						xtype : 'spacer'
					},{
		    			xtype : 'button',
		    			cls : 'loginBtnCls bgBtn1 reviewPanelToolBtnCls',
		    			itemId : 'editOrSubmitProfile',
		    			text : 'Edit',
		    			hidden : true
	        		},
					{
						name : 'doctor_nav_btn',
						iconCls : 'menu_iconCls',
						ui : 'plain'
					}
				]
			}, {
				xtype : 'panel',
				itemId : '_mainPanelContainer',
				cls : 'mainPanelContainerCls',
				config : {
					
				layout : 'card',
					items : [{
						xtype : 'doctorProfileScreen'
					},{
						xtype : 'notesMainPanel',
						itemId : 'notesMainPanel'
					}]
				}
			}
			/*{
				xtype : 'container',
				cls : 'containerCls',
				html : '<div id="status-txt-id" class="status-txt-cls">Offline</div>'
			}, {
	            xtype: 'container',
				cls: 'togglw-container-cls',
	            html: '<div class="switch">' +
						  '<input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox"> ' +	
						  '<label id="cmn-toggle-2" for="cmn-toggle-1">Offline</label>' +
						'</div>',
				listener : function () {
					$("#cmn-toggle-1").bind('change', function (event) {
						console.log('on change event');
		                var checked = event.args.check;
		                $("#eventlog1").html("Checked: " + checked);
		            });
				}
	        }, {
	        	xtype : 'container',
	        	cls : 'request-pending-txt',
	        	html : '<div>Request Pending</div>'
	        }, {
            	xtype: 'list',
            	itemId : 'listId',
            	cls : 'patientReqListCls',
            	//store : 'RequestPendingStore',
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
            }*/
		]
	},

	init : function() {
		this.setActiveItem(0);
	}
});

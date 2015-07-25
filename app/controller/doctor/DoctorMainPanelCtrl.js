Ext.define('DoctorQuickMobile.controller.doctor.DoctorMainPanelCtrl',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					mainPanelContainer : 'doctor_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'doctor_mainPanel toolbar#mainPanelToolbarId',
					doctorProfileContainer : 'videoCallView container#_doctorVideoCallView',
					statusNotificationBtn : 'doctor_mainPanel toolbar container#statusNotificationId'
				},
				control : {
					'doctor_dashboardView list#pendingRequestListId' : { itemtap : "onPendingReqTap", scope : this },

					//TODO : onDeactivate Not working
					// 'videoCallView' : { activate : "onVideoCallActivate", deactivate : "onVideoCallDeactivate", scope : this },
					'videoCallView' : { activate : "onVideoCallActivate", scope : this }
				}
	},
	
	init : function(){
		
	},
	
	showProfileView : function(){
		
       this.getMainPanelContainer().setActiveItem('doctorProfileScreen');
       this.getMainPanelToolbarId().setTitle("Profile");
       this.getDoctorProfileContainer().setData(docProfileData);

	},

	onPendingReqTap : function(me, index, target, record, e, eOpts) {

		//alert("onPendingReqTap >> ");

		this.getMainPanelContainer().setActiveItem('doctor_request_detail_view');
	},

	showCallView : function () {
		this.getMainPanelContainer().setActiveItem('videoCallView');
		this.getMainPanelToolbarId().setTitle("Call");
		this.getDoctorProfileContainer().setData(docProfileData);

		$("#callInfoMsg").removeClass("displayNone");
		$("#callInfoMsg").addClass("displayBlock");
	},

	showCallEndedView : function() {

	//alert("Call Ended");

	   $("#callInfoMsg").removeClass("displayBlock");
       $("#callInfoMsg").addClass("displayNone");

       $("#callEndedInfoDivId").removeClass("displayNone");
       $("#callEndedInfoDivId").addClass("displayBlock");

       $("#endConsultationBtnDivId").removeClass("displayNone");
       $("#endConsultationBtnDivId").addClass("displayBlock");

       $("#endCallBtnId").removeClass("callEndActiveCls");
       $("#endCallBtnId").addClass("callEndInActiveCls");
	},

	showNotesView : function() {
		DoctorQuickMobile.app.getController('doctor.NotesController').showNotesView();
	},

	onVideoCallActivate : function() {

		this.getStatusNotificationBtn().show();
	},

	onVideoCallDeActivate : function() {

		this.getStatusNotificationBtn().hide();
	}
});
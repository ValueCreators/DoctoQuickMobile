Ext.define('DoctorQuickMobile.controller.patient.PatientMainController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					mainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
					doctorProfileContainer : 'patientVideoCallView container#_patientVideoCallView'
				},
				control : {
					//'patient_dashboardView list#pendingRequestListId' : { itemtap : "onPendingReqTap", scope : this },

					//TODO : onDeactivate Not working
					//'patientVideoCallView' : { activate : "onVideoCallActivate", deactivate : "onVideoCallDeactivate", scope : this },
					
				}
	},
	
	init : function(){
		
	},

	showVideoCallView : function() {

		//alert("onPendingReqTap >> ");

	   this.getMainPanelContainer().setActiveItem('patientVideoCallView');
       this.getMainPanelToolbarId().setTitle("Call");
       this.getDoctorProfileContainer().setData(patientProfileData);

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

	callBack : function() {

	},

	endConsultation : function() {

	}

});
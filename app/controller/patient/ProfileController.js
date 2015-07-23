Ext.define('DoctorQuickMobile.controller.patient.ProfileController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					patientProfileScreen : 'patientProfileScreen',
					mainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
					patientProfileContainer : 'patientProfileScreen container#_doctorProfileContainer',
					patientProfileBackBtn : 'patientProfileScreen toolbar button#closeDoctorProfile',
					patientProfileEditOrSubmitBtn : 'patient_mainPanel toolbar button#editOrSubmitProfile',
					gotoDashBoardBtn : 'patient_mainPanel toolbar button#gotoDashBoardBtn',

					docProfileContainer : 'doctorProfileView container#_doctorProfileViewContainer',					
				},
				control : {
					patientProfileScreen : { activate : 'onProfileActivate', deactivate : 'onProfileDeactivate', scope : this },
					patientProfileBackBtn : { tap : 'closeProfileView', scope : this },
					patientProfileEditOrSubmitBtn : { tap : 'onEditOrSave', scope : this },
					gotoDashBoardBtn : { tap : 'gotoDashBoard', scope : this}
				}
	},
	
	init : function(){
		this.profileView = null;
	},

	onProfileActivate : function() {
		this.getPatientProfileEditOrSubmitBtn().show();
		this.getGotoDashBoardBtn().show();
	},

	onProfileDeactivate : function() {
		this.getPatientProfileEditOrSubmitBtn().hide();
		this.getGotoDashBoardBtn().hide();
	},

	showProfileView : function(){
		
       // this.getMainPanelContainer().setActiveItem('patientProfile');

       this.getMainPanelContainer().setActiveItem('doctorProfileView');
       this.getMainPanelToolbarId().setTitle("Doctor Profile");
       this.getDocProfileContainer().setData(docProfileData);
       /*
			Uncomment later.
       */
       /*this.getMainPanelContainer().setActiveItem('patientProfileScreen');
       this.getMainPanelToolbarId().setTitle("Profile");
       this.getPatientProfileContainer().setData(patientProfileData);*/
	},

	closeProfileView : function() {
        this.profileView.destroy();
        this.profileView = null;
    },

    onEditOrSave : function(btn, e, eOpts) {
    	alert("OnEditOrSave");

    	if(btn.getText() == "Edit") {
    		btn.setText("Save");
    		$(".patientProfilePanelContainerCls .value").addClass("contentEditableCls");
    		return;
    	} 

		/**
			Doctor Profile Details Save Implementation here.
		*/ 

		var profileFieldsDOMArr = $(".patientProfilePanelContainerCls .dataRow");   	

		if(profileFieldsDOMArr.length > 0) {
			var requestObj = {};
			for(var i=0; i<profileFieldsDOMArr.length; i++) {

				var childDOM = profileFieldsDOMArr[i].children;

				var field = childDOM[0].getAttribute("field");
				var fieldVal = childDOM[1].innerHTML;

				requestObj[field] = fieldVal;
			}
		}
		
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Please Wait...'});
		DoctorQuickMobile.data.Service.makeServerReqest('registerPatient', requestObj, this.saveProfileSuccess, this.saveProfileFailure, this);
    },

    saveProfileSuccess : function() {
    	Ext.Viewport.setMasked(false);
    	Ext.Msg.alert("SUCCESS", "Profile saved Successfully.");
    	this.getPatientProfileEditOrSubmitBtn().setText("Edit");
    	$(".patientProfilePanelContainerCls .value").removeClass("contentEditableCls");
    },

    saveProfileFailure : function() {
    	Ext.Viewport.setMasked(false);
    	Ext.Msg.alert("Failure", "There is some problem occurred while saving the profile.");
    }
});
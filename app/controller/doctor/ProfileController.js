Ext.define('DoctorQuickMobile.controller.doctor.ProfileController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					doctorProfileScreen : 'doctorProfileScreen',
					mainPanelContainer : 'doctor_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'doctor_mainPanel toolbar#mainPanelToolbarId',
					doctorProfileContainer : 'doctorProfileScreen container#_doctorProfileContainer',
					docProfileBackBtn : 'doctorProfileScreen toolbar button#closeDoctorProfile',
					docProfileEditOrSubmitBtn : 'doctor_mainPanel toolbar button#editOrSubmitProfile',
					gotoDashBoardBtn : 'doctor_mainPanel toolbar button#gotoDashBoardBtn'					
				},
				control : {
					doctorProfileScreen : { activate : 'onProfileActivate', deactivate : 'onProfileDeactivate', scope : this },
					docProfileBackBtn : { tap : 'closeDocProfileView', scope : this },
					docProfileEditOrSubmitBtn : { tap : 'onDocProfileEditOrSave', scope : this },
					gotoDashBoardBtn : { tap : 'gotoDashBoard', scope : this}
				}
	},
	
	init : function(){
		this.docProfileView = null;
	},

	onProfileActivate : function() {
		this.getDocProfileEditOrSubmitBtn().show();
		this.getGotoDashBoardBtn().show();
	},

	onProfileDeactivate : function() {
		this.getDocProfileEditOrSubmitBtn().hide();
		this.getGotoDashBoardBtn().hide();
	},
	
	showProfileView : function(){
		//alert('doc profile view');

		/*if(!this.docProfileView) {
            this.docProfileView = Ext.Viewport.add(Ext.create("DoctorQuickMobile.view.doctor.profile.Profile"));
        }
        this.getDoctorProfileContainer().setData(docProfileData);
        this.docProfileView.show();*/

       this.getMainPanelContainer().setActiveItem('doctorProfileScreen');
       this.getMainPanelToolbarId().setTitle("Profile");
       this.getDoctorProfileContainer().setData(docProfileData);
	},

	closeDocProfileView : function() {
        this.docProfileView.destroy();
        this.docProfileView = null;
    },

    onDocProfileEditOrSave : function(btn, e, eOpts) {
    	//alert("OnEditOrSave");

    	if(btn.getText() == "Edit") {
    		btn.setText("Save");
    		$(".docProfilePanelContainerCls .value").addClass("contentEditableCls");
    		return;
    	} 

		/**
			Doctor Profile Details Save Implementation here.
		*/ 

		var profileFieldsDOMArr = $(".docProfilePanelContainerCls .dataRow");   	

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
		DoctorQuickMobile.data.Service.makeServerReqest('registerDoctor', requestObj, this.saveProfileSuccess, this.saveProfileFailure, this);
    },

    saveProfileSuccess : function() {
    	Ext.Viewport.setMasked(false);
    	Ext.Msg.alert("SUCCESS", "Profile saved Successfully.");
    	this.getDocProfileEditOrSubmitBtn().setText("Edit");
    	$(".docProfilePanelContainerCls .value").removeClass("contentEditableCls");
    },

    saveProfileFailure : function() {
    	Ext.Viewport.setMasked(false);
    	Ext.Msg.alert("Failure", "There is some problem occurred while saving the profile.");
    }
});
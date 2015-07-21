Ext.define('DoctorQuickMobile.controller.doctor.NotesController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
					notesMainPanel : 'notesMainPanel',
					mainPanelContainer : 'doctor_mainPanel panel#_mainPanelContainer',
					mainPanelToolbarId : 'doctor_mainPanel toolbar#mainPanelToolbarId',
					gotoDashBoardBtn : 'doctor_mainPanel toolbar button#gotoDashBoardBtn',
					notesContainer : 'notesMainPanel container#_notesContainer',
					diagnosisContainer : 'notesMainPanel container#_diagnosisContainer',
					testsContainer : 'notesMainPanel container#_testContainer',
					medicationContainer : 'notesMainPanel container#_medicationContainer',
					gotoNoteMainPanelBtn : 'doctor_mainPanel toolbar button#gotoNotesMainPanelBtn',

				},				
				control : {
					notesMainPanel : { activate : 'onNotesMainActivate', deactivate : 'onNotesMainDeactivate', scope : this },
					diagnosisContainer : { activate : 'onDiagnosisActivate', deactivate : 'onDiagnosisDeActivate', scope : this },
					testsContainer : { activate : 'onTestsActivate', deactivate : 'onTestsDeActivate', scope : this },
					medicationContainer : { activate : 'onMedicationActivate', deactivate : 'onMedicationDeActivate', scope : this },
					gotoNoteMainPanelBtn : { tap : 'onNotesMainActivate' , scope : this }
				}
	},
	
	init : function(){
		
	},

	onNotesMainActivate : function() {
		this.getGotoDashBoardBtn().show();
		this.getNotesMainPanel().setActiveItem(0);
		this.getNotesContainer().setData(notesData);
		this.getMainPanelToolbarId().setTitle("Notes");
	},

	onNotesMainDeactivate : function() {
		this.getGotoDashBoardBtn().hide();
	},

	onDiagnosisActivate : function() {
		this.getGotoNoteMainPanelBtn().show();
		this.getGotoDashBoardBtn().hide();
		this.getMainPanelToolbarId().setTitle("Diagnosis");
	},

	onDiagnosisDeActivate : function() {
		this.getGotoNoteMainPanelBtn().hide();
		this.getGotoDashBoardBtn().show();
		this.getMainPanelToolbarId().setTitle("Notes");
	},
	
	showNotesView : function(){
		//alert('doc notes view');

		/*if(!this.docProfileView) {
            this.docProfileView = Ext.Viewport.add(Ext.create("DoctorQuickMobile.view.doctor.profile.Profile"));
        }
        this.getDoctorProfileContainer().setData(docProfileData);
        this.docProfileView.show();*/

       this.getMainPanelContainer().setActiveItem('notesMainPanel');
       this.getMainPanelToolbarId().setTitle("Notes");
	},

	closeDocProfileView : function() {
        this.docProfileView.destroy();
        this.docProfileView = null;
    },

    showNotesSubView : function(cardPos) {

    	alert("showNotesSubView :: "+cardPos);

    	var view = "";
    	var _notesMain = this.getNotesMainPanel();
    	_notesMain.setActiveItem(cardPos);
    	if(cardPos == 1) {
    		view = "Diagnosis";
    		this.getDiagnosisContainer().setData(notesData);
    		this.getMainPanelToolbarId().setTitle("Diagnosis");
    	} else if(cardPos == 2) {
    		view = "Tests";
    		this.getTestsContainer().setData(notesData);
    		this.getMainPanelToolbarId().setTitle("Tests");
    	} else if(cardPos == 3) {
    		view = "Medication";
    		this.getMedicationContainer().setData(notesData);
    		this.getMainPanelToolbarId().setTitle("Medication");
    	}
    }

});
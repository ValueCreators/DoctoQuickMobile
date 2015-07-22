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
					gotoNoteMainPanelBtn : { tap : 'goBackToNotesMain' , scope : this }
				}
	},
	
	init : function(){
		this.diagnosisData = "";
		this.testsData = "";
		this.medicationData = "";
	},

	goBackToNotesMain : function() {
		this.getGotoDashBoardBtn().show();
		this.getNotesMainPanel().setActiveItem(0);
		this.getMainPanelToolbarId().setTitle("Notes");
		this.getGotoNoteMainPanelBtn().hide();
	},

	onNotesMainActivate : function() {
		this.getGotoDashBoardBtn().show();
		this.getNotesMainPanel().setActiveItem(0);
		this.getNotesContainer().setData(notesData);
		this.getMainPanelToolbarId().setTitle("Notes");
		this.getGotoNoteMainPanelBtn().hide();
	},

	onNotesMainDeactivate : function() {
		this.getGotoDashBoardBtn().hide();
	},

	/*onDiagnosisActivate : function() {
		this.getGotoNoteMainPanelBtn().show();
		this.getGotoDashBoardBtn().hide();
		this.getMainPanelToolbarId().setTitle("Diagnosis");
	},

	onDiagnosisDeActivate : function() {
		this.getGotoNoteMainPanelBtn().hide();
		this.getGotoDashBoardBtn().show();
		this.getMainPanelToolbarId().setTitle("Notes");
	},*/
	
	showNotesView : function(){

       this.getMainPanelContainer().setActiveItem('notesMainPanel');
       this.getMainPanelToolbarId().setTitle("Notes");
	},

	closeDocProfileView : function() {
        this.docProfileView.destroy();
        this.docProfileView = null;
    },

    showNotesSubView : function(cardPos) {

    	//alert("showNotesSubView :: "+cardPos);

    	var view = "";
    	var _notesMain = this.getNotesMainPanel();
    	_notesMain.setActiveItem(1);

    	$("#notesEditableDivId").focus();
    	this.getGotoNoteMainPanelBtn().show();
		this.getGotoDashBoardBtn().hide();
		this.getMainPanelToolbarId().setTitle("Diagnosis");
		this.getDiagnosisContainer().setData(notesData);
    	if(cardPos == 1) {
    		view = "Diagnosis";
    		//this.getDiagnosisContainer().setData(notesData);
    		this.getMainPanelToolbarId().setTitle("Diagnosis");
    		$("#notesEditableDivId")[0].innerText = this.diagnosisData;
    	} else if(cardPos == 2) {
    		view = "Tests";
    		//this.getTestsContainer().setData(notesData);
    		this.getMainPanelToolbarId().setTitle("Tests");
    		$("#notesEditableDivId")[0].innerText = this.testsData;
    	} else if(cardPos == 3) {
    		view = "Medication";
    		//this.getMedicationContainer().setData(notesData);
    		this.getMainPanelToolbarId().setTitle("Medication");
    		$("#notesEditableDivId")[0].innerText = this.medicationData;
    	}
    },

    saveOrClearNotesData : function(btnValue) {

    	isClearData = false;

    	if(btnValue == "clear") 
    		isClearData = true;

    	var mainPanelTitle = this.getMainPanelToolbarId().getTitle()._title;
    	var divInnerText = $("#notesEditableDivId")[0].innerText;
    	if(mainPanelTitle == "Diagnosis") {

    		if(isClearData) {
    			this.diagnosisData = "";
    			$("#diagnosisTick")[0].src = "resources/images/480x854/dq_tick_incircle_off_480x854.png";
    		} else {
    			this.diagnosisData = divInnerText ;
    			$("#diagnosisTick")[0].src = "resources/images/480x854/dq_tick_incircle_on_480x854.png";
    		}
    	} else if(mainPanelTitle == "Tests") {

    		if(isClearData) {
    			this.testsData = "";
    			$("#testsTick")[0].src = "resources/images/480x854/dq_tick_incircle_off_480x854.png";
    		} else {
    			this.testsData = divInnerText ;
    			$("#testsTick")[0].src = "resources/images/480x854/dq_tick_incircle_on_480x854.png";
    		}
    	} else if(mainPanelTitle == "Medication") {
    		if(isClearData) {
    			this.testsData = "";
    			$("#medicationTick")[0].src = "resources/images/480x854/dq_tick_incircle_off_480x854.png";
    		} else {
    			this.testsData = divInnerText ;
    			$("#medicationTick")[0].src = "resources/images/480x854/dq_tick_incircle_on_480x854.png";
    		}
    	}

    	if(!isClearData)
    		this.goBackToNotesMain();
    	else
    		$("#notesEditableDivId")[0].innerText = "";
    }

});
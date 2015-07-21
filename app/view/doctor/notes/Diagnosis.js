Ext.define('DoctorQuickMobile.view.doctor.notes.Diagnosis', {
    extend: 'Ext.Container',
    xtype: 'diagnosis',
    config: {
    	scrollable : true,
	    itemId : '_diagnosisContainer',
	    cls : 'notesSubContainer',
        tpl : doctor_templates.notesOtherContainersTpl
    }
});


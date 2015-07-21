Ext.define('DoctorQuickMobile.view.doctor.notes.Notes', {
    extend: 'Ext.Container',
    xtype: 'medication',
    config: {
    	scrollable : true,
	    itemId : '_medicationContainer',
	    cls : '',
        tpl : doctor_templates.notesOtherContainersTpl
    }
});


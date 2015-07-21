Ext.define('DoctorQuickMobile.view.doctor.notes.Notes', {
    extend: 'Ext.Container',
    xtype: 'notesPanel',

    config : {

        scrollable : true,
        itemId : '_notesContainer',
        cls : '',
        tpl : doctor_templates.notesContainerTpl
    }
});


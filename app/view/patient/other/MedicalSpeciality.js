Ext.define('DoctorQuickMobile.view.patient.other.MedicalSpeciality', {
    extend: 'Ext.Component',
    xtype: 'medicalSpecialityView',

    config: {
    	itemId : 'medicalSpecialityView',
    	cls : 'medicalSpecialityViewCls',
    	tpl : patient_templates.medicalSpecialityTpl
    }
});


Ext.define('DoctorQuickMobile.store.patient.SpecialityStore', {
    extend: 'Ext.data.Store',
    config: {
    	model: "DoctorQuickMobile.model.patient.SpecialityModel",
    	data : SPECIALITIES
    }
});
Ext.define('DoctorQuickMobile.store.patient.MyDoctorsStore', {
    extend: 'Ext.data.Store',
    config: {
    	model: "DoctorQuickMobile.model.patient.DoctorModel",
    	data : DOCTOR_LIST
    }
});
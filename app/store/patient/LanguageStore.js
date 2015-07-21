Ext.define('DoctorQuickMobile.store.patient.LanguageStore', {
    extend: 'Ext.data.Store',
    config: {
    	model: "DoctorQuickMobile.model.patient.LanguageModel",
    	data : LANGUAGES
    }
});
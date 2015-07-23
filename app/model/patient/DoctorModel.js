Ext.define('DoctorQuickMobile.model.patient.DoctorModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                 {name: 'id', type: 'string'},
                 {name: 'fName', type: 'string'},
                 {name: 'lName', type: 'string'},
                 {name: 'rating', type: 'float'},
                 {name: 'no_of_reviews', type: 'int'},
                 {name: 'practiceSinceYear', type: 'int'},
                 {name: 'speciality', type: 'string'},
                 {name: 'degrees', type: 'string'},
                 {name: 'online', type: 'boolean'},
                 {name: 'profile_pic', type: 'string'}
        ]
    }
});
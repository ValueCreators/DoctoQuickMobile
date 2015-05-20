Ext.regModel('DoctorLogin', {
    fields: [
        {name: 'phoneNumber', type: 'number'},
        {name: 'password', type: 'password'}
    ],
    validations: [
        {type: 'presence', name: 'phoneNumber', message:"Enter your PhoneNumber"},
        {type: 'presence', name: 'password', message : "Enter your Password"},
        //{type: 'format',   name: 'email', matcher: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message:"Wrong Email Format"},
        {type : 'password', name:'password', length: 10 }
    ]
});
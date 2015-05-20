Ext.define('DoctoApp.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    config: {
    	
    	layout : 'card',
    	
    	items : [
            {
                xtype : 'doctorLoginScreen'
            },
            {
                xtype : 'registerDoctorScreen1'
            },
            {
        		xtype : 'registerDoctorScreen2'
        	},
            {
                xtype : 'LandingView'
            }
        ]
    }
});


// ,{
//             xtype : 'regContactDetailsScreen'
//         },{
//             xtype : 'capturePicScreen'
//         }
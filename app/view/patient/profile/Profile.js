Ext.define('DoctorQuickMobile.view.patient.profile.Profile', {
    extend: 'Ext.Panel',
    xtype: 'patientProfileScreen',
    fullscreen: true,
     config: {
    	itemId : 'patientProfile',
    	cls : 'doctorLoginCls reviewPanelCls',
    	items : [
    				{   
    				    xtype : 'panel',
    				    scrollable : true,
    				    itemId : '_doctorProfileContainer',
    				    cls : 'patientProfilePanelContainerCls',
    				    //height : '100%',
			            tpl : patient_templates.profileContainerTpl
			        }
			    ]
    		}
});


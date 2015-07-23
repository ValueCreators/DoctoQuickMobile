Ext.define('DoctorQuickMobile.view.patient.other.DoctorProfile', {
    extend: 'Ext.Panel',
    xtype: 'doctorProfileView',
    fullscreen: true,
    config: {
    	itemId : 'doctorProfileView',
    	cls : 'doctorLoginCls reviewPanelCls',
    	items : [
    				{   
    				    xtype : 'container',
    				    scrollable : true,
    				    height : '100%',
    				    itemId : '_doctorProfileViewContainer',
			            tpl : patient_templates.doctorProfileViewTpl
			        }
			    ]
    		}
});


Ext.define('DoctorQuickMobile.view.patient.consultation.video.VideoCall', {
    extend: 'Ext.Panel',
    xtype: 'patientVideoCallView',
    fullscreen: true,
    config: {
    	itemId : 'patientVideoCallView',
    	cls : 'doctorLoginCls reviewPanelCls videoCallViewPanelCls',
    	items : [
    				{   
    				    xtype : 'container',
    				    scrollable : true,
    				    height : '100%',
    				    itemId : '_patientVideoCallView',
			            tpl : doctor_templates.patientCallScreenTpl
			        }
			    ]
    		}
});


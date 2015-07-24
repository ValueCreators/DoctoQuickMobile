Ext.define('DoctorQuickMobile.view.doctor.consultation.video.VideoCall', {
    extend: 'Ext.Panel',
    xtype: 'videoCallView',
    fullscreen: true,
    config: {
    	itemId : 'videoCallView',
    	cls : 'doctorLoginCls reviewPanelCls videoCallViewPanelCls',
    	items : [
    				{   
    				    xtype : 'container',
    				    scrollable : true,
    				    height : '100%',
    				    itemId : '_doctorVideoCallView',
			            tpl : doctor_templates.doctorCallScreenTpl
			        }
			    ]
    		}
});


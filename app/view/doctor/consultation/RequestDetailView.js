Ext.define('DoctorQuickMobile.view.doctor.consultation.RequestDetailView', {

	extend: 'Ext.Container',
	xtype: 'doctor_request_detail_view',
	requires: [
		'Ext.TitleBar'
	],
	config : {
		items : {
			xtype: 'panel',
			 scrollable: true,
			itemId : 'requestDetailViewId',
            cls : 'requestDetailViewCls height100',
            html : '<div class="patientRequestDetails">'+
            			'<div class="patientProfilePic">'+
            				'<img src="./resources/images/dq_registration_background.png" />'+
            			'</div>'+
            			'<div class="nameContent">'+
            				'<span>FirstName LastName</span>' +
            			'</div>'+
            			'<div class="ageSexCls">'+
            				'<span>Male, Age 26</span>'+
            			'</div>'+
            			'<div class="regionLocationCls">'+
            				'<span>Region or location</span>'+
            			'</div>'+
            			'<div class="bottomDetailCls">'+
	            			'<div class="requestedVoiceCls">'+
	            				'<p> Requested a voice call </p>'+
	            				'<p> 30 min ago</p>'+
	            			'</div>'+
	            			'<div class="acceptDeclineCls">'+
	            				'<div class="declineBtnCls">'+
	            					'<img class="declineImgCls" src="./resources/images/dq_request_decline_off.png" />'+
	            					'<p>Decline</p>'+
	            				'</div>'+
	            				'<div class="acceptBtnCls" onclick="DoctorQuickMobile.app.getController(\'doctor.DoctorMainPanelCtrl\').showCallView()">'+
	            					'<img class="acceptImgCls" src="./resources/images/dq_request_accept_up.png" />'+
	            					'<p>Accept</p>'+
	            				'</div>'+
	            			'</div>'+
	            		'</div>'+
            		'</div>',
            //tpl : listItemTpl,
//            scrollable: {
//                direction: 'vertical'
//            }
		}
	}



});
Ext.define('DoctorQuickMobile.view.doctor.consultation.RequestDetailView', {

	extend: 'Ext.Container',
	xtype: 'doctor_request_detail_view',
	requires: [
		'Ext.TitleBar'
	],
	config : {
		items : {
			xtype: 'panel',
			itemId : 'requestDetailViewId',
            cls : 'requestDetailViewCls height100',
            html : '<div class="patientRequestDetails">'+
            			'<div class="patientProfilePic">'+
            				'<img src="./resources/images/dq_icon_small_mydoctors.png" />'+
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
	            				'<div class="acceptBtnCls">'+
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
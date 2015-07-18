Ext.define('DoctorQuickMobile.controller.doctor.SlideMenuController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
							mainPanel : 'doctor_mainPanel',
							slideMenu : 'doctor_slideMenu #doctorMenuList',
							
							navBtn : 'button[name="doctor_nav_btn"]'
				},
				control : {
							navBtn : {
										tap : 'toggleNav'
							},
							
							slideMenu : {
										itemtap : 'switchView'
										}
				}
	},
	
	init : function(){
		this.profile_controller = DoctorQuickMobile.app.getController('doctor.ProfileController');
		this.myConsult_controller = DoctorQuickMobile.app.getController('doctor.MyConsultController');
		this.reviewApp_controller = DoctorQuickMobile.app.getController('ReviewAppController');
		this.customerCare_controller = DoctorQuickMobile.app.getController('CustomerCareController');
		this.accStatement_controller = DoctorQuickMobile.app.getController('doctor.AccStatementController');
		this.notif_controller = DoctorQuickMobile.app.getController('NotificationsController');
	},
	
	/**
	 * Toggle the slide navogation view
	 */
	toggleNav : function(){
					
		var me = this;
		var mainEl = me.getMainPanel().element;
		
		if (mainEl.hasCls('out')) {
				
			mainEl.removeCls('out').addCls('in'); 
			me.getMainPanel().setMasked(false);
		} else {
				
			mainEl.removeCls('in').addCls('out');  
			me.getMainPanel().setMasked(true);
		}
	},
	
	switchView : function(list, index, target, record){
		
		this.toggleNav();
		switch(record.data.id){
		
			case 'profile' :
				DoctorQuickMobile.app.getController('doctor.ProfileController').showProfileView();
				break;
			case 'myConsultations' :
				this.myConsult_controller.showConsultationsView();
				break;
			case 'reviewApp' :
				this.reviewApp_controller.launchAppStoreForReview();
				break;
			case 'customerCare' :
				this.customerCare_controller.showCustomerCareView();
				break;
			case 'acctStatement' :
				this.accStatement_controller.showAccStatementView();
				break;
			case 'notif' :
				this.notif_controller.toggleNotifications();
				break;
			default :
				break;
		}
	}
});
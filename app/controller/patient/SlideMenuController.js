Ext.define('DoctorQuickMobile.controller.patient.SlideMenuController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
							mainPanel : 'patient_mainPanel',
							slideMenu : 'patient_slideMenu',
							slideMenuList : 'patient_slideMenu #patientMenuList',
							
							navBtn : '#patientMainPanel button[name="patient_nav_btn"]'
				},
				control : {
							navBtn : {
										tap : 'slideMenuOpen'
							},
							
							slideMenuList : {
										itemtap : 'switchView'
										}
				}
	},
	
	init : function(){
		this.profile_controller = DoctorQuickMobile.app.getController('patient.ProfileController');
		this.myDoc_controller = DoctorQuickMobile.app.getController('patient.MyDoctorsController');
		this.myConsult_controller = DoctorQuickMobile.app.getController('patient.MyConsultController');
		this.reviewApp_controller = DoctorQuickMobile.app.getController('ReviewAppController');
		this.customerCare_controller = DoctorQuickMobile.app.getController('CustomerCareController');
		this.payments_controller = DoctorQuickMobile.app.getController('patient.PaymentsController');
		this.notif_controller = DoctorQuickMobile.app.getController('NotificationsController');
	},
	
	
	/**
	 * Toggle the slide navogation view
	 */
	slideMenuOpen : function(){
					
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
		
		this.slideMenuOpen();
		switch(record.data.id){
		
			case 'profile' :
				this.profile_controller.showProfileView();
				break;
			case 'myDoctors' :
				this.myDoc_controller.showMyDocsView();
				break;
			case 'myConsultations' :
				this.myConsult_controller.showConsultationsView();
				break;
			case 'reviewApp' :
				this.reviewApp_controller.launchAppStoreForReview();
				break;
			case 'customerCare' :
				console.log('customer care---->');
				this.customerCare_controller.showCustomerCareView();
				break;
			case 'payments' :
				this.payments_controller.showPaymentsView();
				break;
			case 'notif' :
				this.notif_controller.toggleNotifications();
				break;
			default :
				break;
		}
	}
});
Ext.define('DoctorQuickMobile.controller.doctor.SlideMenuController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
							mainPanel : 'doctor_mainPanel',
							slideMenu : 'doctor_slideMenu',
							
							navBtn : 'button[name="nav_btn"]'
				},
				control : {
							navBtn : {
										tap : 'toggleNav'
							},
							
							slideMenu : {
										itemtap : function(list, index, target, record){
													this.toggleNav();
												  }
										}
				}
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
	}
});
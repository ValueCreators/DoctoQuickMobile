Ext.define('DoctorQuickMobile.controller.ReviewAppController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
							
				},
				control : {
							
				}
	},
	
	init : function(){
		this.appId = "com.greettech.tallycareapp";
	},
	
	launchAppStoreForReview : function(){
		//alert('Launch app store for review');	
		
		//var appId = "com.greettech.tallycareapp";
		//var appId = "com.valuecreators.doctorreg";
		
		if(isMobile) {

			cordova.plugins.market.open(this.appId, {
			  success: function() {
				//alert("Success..");
			  },
			  failure: function() {
				//alert("Failure..");
			  }
			});
		}
	}
});
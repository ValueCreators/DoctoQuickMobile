Ext.define('DoctorQuickMobile.data.Service', {

	singleton: true,
	
	//serviceUrl : 'http://192.168.1.3:8000/',
	serviceUrl : 'http://52.25.74.102:8000/',

	makeServerReqest : function(node_route, reqObj, successCallback, errorCallback, scope) {

		Ext.Ajax.request({
		    
		    url : this.serviceUrl + node_route,
		    method : 'POST',
		    params : reqObj,
			useDefaultXhrHeader : false,
		    
		    success : function (response) {
		    	
		    	//If the server is sending non JSON, string call error callback with invalid response
		    	try{
		    		var responseObj = JSON.parse(response.responseText);
		    	}catch(e){
		    		errorCallback.apply(scope, ['Invalid Response']);
		    		return;
		    	}

		    	successCallback.apply(scope, [responseObj]);
		    },
		    failure: function(response) {
		    	
		    	//If the server is sending non JSON, string call error callback with invalid response
		    	try{
		    		var responseObj = JSON.parse(response.responseText);
		    	}catch(e){
		    		errorCallback.apply(scope, ['Invalid Response']);
		    		return;
		    	}
		    	
		    	errorCallback.apply(scope, [responseObj]);
		    }
		});
	},

	testWebService : function () {
        var reqObj = {
            mobile : 8904814609,
            password : 'thiyagu'
        };
        Ext.Ajax.request({
            
            url : 'http://localhost:8000/agent',
            method : 'POST',
            params : reqObj,
            useDefaultXhrHeader : false,
            
            success : function (response) {
                
                //If the server is sending non JSON, string call error callback with invalid response
               
                    var responseObj = JSON.parse(response.responseText);
                    console.log('success response object-->', responseObj);
               
            },
            failure: function(response) {
                
                //If the server is sending non JSON, string call error callback with invalid response
                    var responseObj = JSON.parse(response.responseText);
                    console.log('failure response object-->', responseObj);
                
            }
        });
    }


});











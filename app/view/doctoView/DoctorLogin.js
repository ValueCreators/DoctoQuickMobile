Ext.define('DoctoApp.view.DoctorLogin', {
    extend: 'Ext.Panel',
    xtype: 'doctorLoginScreen',
    fullscreen: true,
    config: {
    	itemId : 'doctorLoginId',
    	cls : 'doctorLoginCls bg1',
    	items : [
    		{
	    		xtype : 'container',
	    		html : '<div class="doctorRegisterHeaderCls"></div>', //After done Please remove the html
	    		cls : 'headerLogoCls gridCls'
    		},
    		{	
    			xtype : 'container',
    			cls : 'contentCls gridCls',
    			scrollable: {
				    direction: 'vertical',
				    directionLock: true
				},

    			items: [
    				{
			    		xtype : 'fieldset',
			    		itemId : 'loginFormPanelId',
			    		cls : 'loginFormPanelCls gridCls',
			    		items : [{
			    			xtype : 'numberfield',
			    			itemId: 'phNumId',
			    			cls : 'textfiledCls',
			    			maxValue: 10,
			    			placeHolder : 'Phone Number',
			    			clearIcon : false
			    		},
			    		{
			    			xtype : 'spacer',
			    			cls : 'spacerCls'
			    		},
			    		{
			    			xtype : 'passwordfield',
			    			itemId: 'pswdId',
			    			cls : 'textfiledCls',
			    			placeHolder : 'Password',
			    			clearIcon : false
			    		},
			    		{
			    			xtype : 'spacer',
			    			cls : 'spacerCls'
			    		},
			    		{
			    			xtype : 'button',
			    			cls : 'loginBtnCls bgBtn1',
			    			itemId : 'loginBtnId',
			    			text : 'Login'
			    		}
			    	]
		    		},
		    		{
		    			xtype : 'spacer',
		    			cls : 'spacerCls'
		    		},
		    		{
		    			xtype : 'label',
		    			cls : 'termsAndConCls gridCls',
		    			text : 'By ',
		    			html : '<p><span>By logging in you agree to our </span><a>terms & conditions</a></p>'
		    		},
		    		{
		    			xtype : 'spacer',
		    			cls : 'spacerCls'
		    		},
		    		{
			    		xtype: 'container',
			            name : 'rememberme',
			            cls : 'rememberMeCls clearfix gridCls',
			            html : '<div class="remandForCls"><input type="checkbox" id="remembermeCheckBoxId"/><span class="padLeft">Remember me</span></div><div class="remandForCls textAlignRight" id="forgetPwdBtn"><span>Forgot Password<span></div>'	
		    		},
		    		{
		    			xtype : 'spacer',
		    			cls : 'spacerCls'
		    		},
		    		{
		    			xtype : 'button',
		    			cls : 'registerBtnCls bgBtn2 gridCls',
		    			itemId : 'registerBtnId',
		    			text : 'Register'
		    		},
		    		{
		    			xtype : 'spacer',
		    			cls : 'spacerCls'
		    		},
		    		{
			    		xtype: 'container',
			    		itemId : 'footerContainer',
			    		cls : 'gridCls clearfix bottomOptionsToolsCls',
			            html : '<div class="learnMoreContainer">'+
			            		'	<div>'+
		    					'		<img id="learnMoreBtnId" src="./resources/images/learnMore2.png"></img>'+
		    					'	</div>'+
		    					'	<div>'+
		    					'		<span>Learn more</span>'+
		    					'	</div>'+
		    					'</div>'+
		    					'<div class="registerDoctorCls">'+
		    					'	<div>'+
		    					'		<img id="regAsDoctorBtnId" src="./resources/images/addMore2.png"></img>'+
		    					'	</div>'+
		    					'	<div>'+
		    					'		<span>Register as a doctor</span>'+
		    					'	</div>'+
		    					'</div>',
		    					
		    			listeners : {
		    				painted : function(ele){
		    					
		    					var loginController = DoctoApp.app.getController('doctoController.LoginController')
		    					ele.on('singletap',function(event, node, options, eOpts){
		    						loginController.footerTapHandler(event, node, options, eOpts);
		    					});
		    				}
		    			}
		    		}
    			]
    		}
    	]

    }
});

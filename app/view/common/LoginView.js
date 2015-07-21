/**
 *	Login view 
 */
Ext.define('DoctorQuickMobile.view.common.LoginView', {
    extend: 'Ext.Panel',
    xtype: 'common_loginView',
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
				scrollable: true,

    			items: [
    				{
			    		xtype : 'fieldset',
			    		itemId : 'loginFormPanelId',
			    		cls : 'loginFormPanelCls gridCls',
			    		items : [{
			    			xtype : 'numberfield',
			    			name: 'mobileNumber',
			    			itemId: 'mobileNumberId',
			    			cls : 'textfiledCls',
			    			maxValue: 10,
			    			placeHolder : 'Phone Number',
			    			required: true,
			    			clearIcon : false,
			    			listeners: {
				            	keyup : function (ele, event, eObj) {
				            		console.log('on key up events');
				            		DoctorQuickMobile.app.getController('CommonController').removeEmptyCls(ele, event);
				            	}
				            }
			    		},
			    		{
			    			xtype : 'spacer',
			    			cls : 'spacerCls'
			    		},
			    		{
			    			xtype : 'passwordfield',
			    			name: 'password',
			    			itemId: 'passwordId',
			    			cls : 'textfiledCls',
			    			placeHolder : 'Password',
			    			required: true,
			    			clearIcon : false,
			    			listeners: {
			            	keyup : function (ele, event, eObj) {
			            		console.log('on key up events');
			            		DoctorQuickMobile.app.getController('CommonController').removeEmptyCls(ele, event);
			            	}
			            }
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
		    		}, {
		    			xtype: 'container',
			    		cls : 'gridCls bottomOptionsToolsCls',
			    		items : [
			    			{
			    				xtype: 'button',
			    				itemId: 'learnMoreBtnId',
			    				cls: 'learnMoreBtnCls fl-left',
			    				iconCls: 'learn-more-icon-cls',
			    				html: '<div class="text-cls">Learn More</div>'
			    			}, {
			    				xtype: 'button',
			    				itemId: 'registerDocBtnId',
			    				cls: 'registerDocBtnCls fl-right',
			    				iconCls: 'register-doc-icon-cls',
			    				html: '<div class="text-cls">Register as a doctor<div>'
			    			}
			    		]
		    		}
    			]
    		}
    	]

    }
});

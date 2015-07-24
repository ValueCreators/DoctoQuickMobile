Ext.define('DoctorQuickMobile.view.patient.wallet.PaymentDetails', {
    extend: 'Ext.Panel',
    xtype: 'paymentDetailScreen',
    fullscreen: true,
    config: {
		itemId : 'paymentDetailId',
		cls : 'paymentDetailCls',
		items : [
			{
    			xtype: 'container',
    			cls: 'topHeaderCls',
    			html: 	'<div>'+
    						'<div class="paymentIconCls"><img src="./resources/images/dq_icon_payments.png" /></div>'+
    						'<div><span>DoctorQuick Wallet</span></div>' +
    					'</div>'
    		}, 
    		{
    			xtype: 'container',
    			cls : 'paymentDetailContantCls',
    			scrollable: true,
    			html : '<div>'+

    						'<div class="cardTypeCls clearfix">'+
    							'<div class="labelCls"><span>Card type</span></div>'+
    							'<div class="valueCls"><span>Visa</span></div>'+
    						'</div>' +

    						'<div class="cardDetail clearfix">'+
    							'<div class="ownerNameCls">' +
    								'<div class="labelCls"><span>Name on card</span></div>'+
    								'<div class="valueCls"><span>First name Last name</span></div>'+
    							'</div>'+
    							'<div class="cardNumberCls">'+
    								'<div class="labelCls"><span>Card number</span></div>'+
    								'<div class="valueCls"><span>xxxx xxxx xxxx xx89</span></div>'+
    							'</div>'+
    						'</div>' +

    						'<div class="expCvc clearfix">'+
    							'<div class="expDate">' +
    								'<div class="labelCls"><span>Exp Date</span></div>'+
    								'<div class="valueCls"><span>Jan 2016</span></div>'+
    							'</div>'+
    							'<div class="cvcCls">'+
    								'<div class="labelCls"><span>CVC</span></div>'+
    								'<div class="valueCls"><span>xxx</span></div>'+
    							'</div>'+
    						'</div>' +

    						'<div class="postCodeCls clearfix">'+
    							'<div class="labelCls"><span>PostCode</span></div>'+
    							'<div class="valueCls"><span>xxx</span></div>'+
    						'</div>' +

    						'<div class="emailCls clearfix">'+
    							'<div class="labelCls"><span>Email Address</span></div>'+
    							'<div class="valueCls"><span>jrt.chandru@gmail.com</span></div>'+
    						'</div>' +

    				   '</div>'
    		},
    		{
    			xtype: 'button',
    			itemId: 'doTopBtnId',
    			cls: 'doTopBtnCls',
    			text: 'Topup',

    		}
		]
	}
});
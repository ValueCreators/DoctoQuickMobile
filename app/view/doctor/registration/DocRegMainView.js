/*
 *  Card layout for the docor registration screen - Main Screen
 *
 *   adding all the registration panels
 *	 after completion of each panels , setactivating the next panels
 *
 *--------------------------------------------------------------
 *						author@thiyagu
 *--------------------------------------------------------------
 */

Ext.define('DoctorQuickMobile.view.doctor.registration.DocRegMainView', {

	extend: 'Ext.Panel',
	xtype: 'docRegMainView',

	config: {

		cls : 'docRegMainViewCls',
		fullscreen: true,
		layout: 'card',

		items : [

			{
				xtype: 'docRegistration_1',
				itemId: 'docRegistration_1',
				cls: 'docRegistration_1_cls registerNameContainerCls bg1'
			}, 
			{
				xtype: 'docRegistration_2',
				itemId: 'docRegistration_2',
				cls: 'docRegistration_2_cls registerNameContainerCls bg1'
			}

		]
	}

});
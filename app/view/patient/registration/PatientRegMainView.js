/**
 *  Card layout for the patient registration screen Main Screen
 */

Ext.define('DoctorQuickMobile.view.patient.registration.PatientRegMainView', {

	extend: 'Ext.Panel',
	xtype: 'patientRegMainView',

	config: {

		cls : 'patientRegMainViewCls',
		fullscreen: true,
		layout: 'card',

		items : [

			{
				xtype: 'patientRegistration_1',
				itemId: 'patientRegistration_1',
				cls: 'patient_registration_1_cls registerNameContainerCls bg1'
			}, 
			{
				xtype: 'patientRegistration_2',
				itemId: 'patientRegistration_2',
				cls: 'patient_registration_2_cls registerNameContainerCls bg1'
			},
			{
				xtype: 'patientRegistration_3',
				itemId: 'patientRegistration_3',
				cls: 'patient_registration_3_cls registerNameContainerCls bg1'
			}

		]
	}

});
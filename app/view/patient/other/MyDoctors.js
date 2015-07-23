Ext.define('DoctorQuickMobile.view.patient.other.MyDoctors', {
				
	extend: 'Ext.Container',
	xtype: 'myDoctorsView',

	config: {
				cls : 'myDoctorsViewCls',
				itemId : 'myDoctorsViewId',
				layout: 'fit',
				items : [
								{
									 xtype : 'list',
									 itemId : 'myDoctorsList',
									 cls: 'myDoctorsListCls',
									 store : 'MyDoctorsStore',
									 selectedCls : '',
									 itemTpl : patient_templates.doctorItemTpl,
								}
						]
			}
});
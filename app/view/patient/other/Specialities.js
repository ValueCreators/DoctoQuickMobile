Ext.define('DoctorQuickMobile.view.patient.other.Specialities', {
				
	extend: 'Ext.Container',
	xtype: 'specialitiesView',

	config: {
				cls : 'specialitiesViewCls',
				itemId : 'specialitiesViewId',
				layout: 'fit',
				items : [
								{
									 xtype : 'list',
									 itemId : 'specialitiesList',
									 cls: 'specialitiesListCls',
									 store : 'SpecialityStore',
									 selectedCls : '',
									 itemTpl : patient_templates.specialityItemTpl,
								}
						]
			}
});
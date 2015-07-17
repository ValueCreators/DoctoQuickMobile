Ext.define('DoctorQuickMobile.model.RequestPendingModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
             	'ticket_count',
        		'date',
        		'title',
        		'venue',
        		'price',
        		'id',
        		'color',
        		'cityId',
        		'detailObj'
        ]
    }
});
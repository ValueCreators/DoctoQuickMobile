var listItemTpl = new Ext.XTemplate(
		'<div class="eventItemCls">'+
		   '<p>Hello World</p>'+
       '</div>',
        {
			getDate : function(date){
				
				return Ext.Date.format(new Date(date), 'D M d');
			},
			getTime : function(date){
				
				return Ext.Date.format(new Date(date), 'h m A');
			}
});


var accountStatementViewTpl = new Ext.XTemplate(

		'<div> Hello World </div>'

);

var accountStatementTpl = new Ext.XTemplate(

	

);
Ext.define('DoctorQuickMobile.view.doctor.notes.NotesMain', {
    extend: 'Ext.Panel',
    xtype: 'notesMainPanel',
    fullscreen: true,
    layout : 'card',
    config: {
    	
    	itemId : '_noteMainPanel',
    	cls : 'notesMainPanelCls',
    	items : [
    				{   
                        xtype : 'container',
    				    scrollable : true,
                        itemId : '_notesContainer',
                        cls : 'height100 notesContainerCls',
                        height : '100%',
                        tpl : doctor_templates.notesContainerTpl
			        },
			        {   
    				    xtype : 'container',
                        itemId : '_diagnosisContainer',
                        cls : 'notesSubContainer',
                        tpl : doctor_templates.notesOtherContainersTpl
			        },
			        {   
    				    xtype : 'container',
                        itemId : '_testContainer',
                        cls : 'notesSubContainer',
                        tpl : doctor_templates.notesOtherContainersTpl
			        },
			        {   
    				    xtype : 'container',
                        itemId : '_medicationContainer',
                        cls : 'notesSubContainer',
                        tpl : doctor_templates.notesOtherContainersTpl
			        }
			    ]
    		},

    		/*init : function() {
				this.setActiveItem(0);
			}*/
});


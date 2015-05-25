Ext.define('DoctorQuickMobile.controller.doctoController.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
           mainView : 'main',
           doctorLoginScreen : 'doctorLoginScreen',
           registerDoctorScreen1 : 'registerDoctorScreen1',
           registerDoctorScreen2 : 'registerDoctorScreen2'
         },
        
        control : {
            
            //'registerDoctorScreen1 button#_registerNameNextBtn' : { tap : 'showDoctoRegistrationView2', scope : this },
//            'registerDoctorScreen2 #registerDoctor' : { tap : 'registerDoctor', scope : this }
            //'#closeBtnCls ' : {tap : 'closeOverlay', scope : this}
        }
    },
    
    init : function () {
        this.dataService = DoctorQuickMobile.data.DataService;
    },

//    showDoctoRegistrationView2 : function () {
//        this.getMainView().setActiveItem('registerDoctorScreen2');
//    },

    registerDoctor : function () {
        console.log('register doctor');

        var form1Value = this.getMainView().getComponent('registerNameScreenId1').getComponent("registerDocContainer1").getComponent('registerDocto1Form');
        var form2Value = this.getMainView().getComponent('registerNameScreenId2').getComponent("registerDocContainer2").getComponent('registerDocto2Form');

        var reqObj = {
            "action": "saveDoctorDetails",
            "params": {
                "doctorId": "Doctor122",
                "fName": form1Value.getAt(0).getValue(),
                "mName": form1Value.getAt(2).getValue(),
                "lName": form1Value.getAt(4).getValue(),
                "country": "",
                "degrees": "",
                "mailId": form2Value.getAt(0).getValue(),
                "mobileNumber": form2Value.getAt(2).getValue(),
                "specializationList": "",
                "gender": "",
                "practiceSinceYear": 1990,
                "knownLaunguages": "",
                "status": ""
            }
        };  
        this.registerDoctorAPI.makeServerReqest(JSON.stringify(reqObj), this.registerSuccessCl, this.registerFailureCl );
    },

    registerSuccessCl : function (data) {
        console.log('successfully data saved',data);
        //Ext.Viewport.add(DoctorQuickMobile.view.notificationOverlay).showBy();
         overlay = Ext.Viewport.add({
            xtype: 'panel',
            cls: 'notifyOverlay',

            // We give it a left and top property to make it floating by default
            left: 0,
            top: 0,

            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            hideOnMaskTap: false,

            // Make it hidden by default
            hidden: true,

            // Set the width and height of the panel
            //width: isPhone ? 260 : 400,
            //height: isPhone ? '70%' : 400,

            // Here we specify the #id of the element we created in `index.html`
            contentEl: 'content',

            // Style the content and make it scrollable
            styleHtmlContent: true,

            items : [
                {
                    itemId : 'overlayContentId',
                    cls : 'overlayContentCls',
                    html : '<div class="headerCls"><h2>Thank you</h2></div>'+
                          '<div class="descCls1">Thank you registering successfully!!!</div>'+
                          '<div class="descCls2">Someone from DoctorQuick will call you back shortlyto help you signup</div>'
                },
                {
                    xtype : 'button',
                    cls : 'bgBtn1 closeBtnCls',
                    text : 'Close'
                }

            ]
        });

         overlay.show();
    },

    registerFailureCl : function (data) {
        console.log('register fails',data);
         //Ext.Viewport.add(DoctorQuickMobile.view.notificationOverlay).showBy();
         overlay = Ext.Viewport.add({
            xtype: 'panel',
            cls: 'notifyOverlay',

            // We give it a left and top property to make it floating by default
            left: 0,
            top: 0,

            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            hideOnMaskTap: false,

            // Make it hidden by default
            hidden: true,

            // Set the width and height of the panel
            //width: isPhone ? 260 : 400,
            //height: isPhone ? '70%' : 400,

            // Here we specify the #id of the element we created in `index.html`
            contentEl: 'content',

            // Style the content and make it scrollable
            styleHtmlContent: true,

            items : [
                {
                    itemId : 'overlayContentId',
                    cls : 'overlayContentCls',
                    html : '<div class="headerCls"><h2>Registration Fails!!!</h2></div>'
                },
                {
                    xtype : 'button',
                    cls : 'bgBtn1 closeBtnCls',
                    text : 'Close',
                    handler : function (thisView, e) {
                    	thisView.up().hide();
                    }
                }

            ]
        });

         overlay.show();

    },


    
});
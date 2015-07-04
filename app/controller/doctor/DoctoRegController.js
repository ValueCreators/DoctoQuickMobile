
/*
*   Doctor registration controller
*   This controller holds the action of doctor registration
*
*   After registration user can see the overlay for notification
*       Whether registered successfully or not. 
*
*   Once registration is success user can see the login screen. 
*
*--------------------------------------------------------------
*                       author@thiyagu
*--------------------------------------------------------------
*/




Ext.define('DoctorQuickMobile.controller.doctor.DoctoRegController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
           docRegMainView : 'docRegMainView',
           docRegView1 : 'docRegMainView docRegistration_1',
           docRegView2 : 'docRegMainView docRegistration_2'
         },
        
        control : {
            
            'docRegMainView docRegistration_1 #_registerNameNextBtn' : { tap : 'gotoReg2View', scope : this},
            'docRegistration_2 #back-btn-Id' : { tap : 'goBackToReg1View', scope : this},
            'docRegistration_2 #registerDoctor' : { tap : 'registerDoctor', scope: this}
        }
    },
    
    init : function () {
        this.dataService = DoctorQuickMobile.data.DataService;
        this.commonController = DoctorQuickMobile.app.getController('CommonController');
    },

    gotoReg2View : function () {
        console.log('goto reg2View');

        var form1 = this.getDocRegView1().getComponent('registerDocContainer1').getComponent('registerDocto1Form');
        this.docRegForm1Obj = {
            'firstName' : form1.getComponent('firstNameId').getValue(),
            'middleName' : form1.getComponent('middleNameId').getValue(),
            'lastName' : form1.getComponent('lastNameId').getValue()
        };

        if (this.commonController.validateForms(this.docRegForm1Obj, form1)) {
            this.getDocRegMainView().setActiveItem(1);
        }
    },

    goBackToReg1View : function () {
        this.getDocRegMainView().setActiveItem(0);
    },

    registerDoctor : function () {
        console.log('register doctor');

        var form2 = this.getDocRegView2().getComponent('registerDocContainer2').getComponent('registerDocto2Form');
        this.docRegForm2Obj = {
            'email' : form2.getComponent('emailId').getValue(),
            'mobile' : form2.getComponent('mobileId').getValue()
        };

         if (this.commonController.validateForms(this.docRegForm2Obj, form2)) {

            var reqObj = {
                "fName": this.docRegForm1Obj.firstName,
                "mName": this.docRegForm1Obj.middleName,
                "lName": this.docRegForm1Obj.lastName,
                "mailId": this.docRegForm2Obj.email,
                "mobileNumber": this.docRegForm2Obj.mobile
            };
            DoctorQuickMobile.data.Service.makeServerReqest('registerDoctor', reqObj, this.registerSuccessCl, this.registerFailureCl, this);
            
        }
    },

    registerSuccessCl : function (data) {
        console.log('successfully data saved',data);
        //Ext.Viewport.add(DoctorQuickMobile.view.notificationOverlay).showBy();

        /*  Setting login type whether he is patient or doctor
        *   And storing in the localstorage in desktop and local databse on the mobile
        */
        loginDetail.loginType = 'Doctor';
        this.commonController.storingLoginCredentials();


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
                          '<div class="descCls2">Someone from DoctorQuick will call you back shortly to help you signup</div>'
                },
                {
                    xtype : 'button',
                    cls : 'bgBtn1 closeBtnCls',
                    text : 'Close',
                    handler : function (thisView, e) {
                        DoctorQuickMobile.app.getController('CommonController').initializeView();
                        thisView.up().hide();
                    }
                }

            ]
        });

         overlay.show();
    },

    registerFailureCl : function (data) {
        console.log('register fails',data);
         //Ext.Viewport.add(DoctorQuickMobile.view.notificationOverlay).showBy();


         //Please remove it after internet works only for test
         /*  Setting login type whether he is patient or doctor
        *   And storing in the localstorage in desktop and local databse on the mobile
        */
        loginDetail.loginType = 'Doctor';
        this.commonController.storingLoginCredentials();

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
                        DoctorQuickMobile.app.getController('CommonController').initializeView();
                    	thisView.up().hide();
                    }
                }

            ]
        });

         overlay.show();

    }

    
});
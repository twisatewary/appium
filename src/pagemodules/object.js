var objects=require("../pagelocators/locators.js");
var log4js = require('log4js');
var logger = log4js.getLogger();
//const log4js = require('log4js');
logger.level = 'debug';
log4js.configure({
    appenders: { signindetails: { type: 'file', filename: 'signindetails.log' } },
    categories: { default: { appenders: ['signindetails'], level: 'info' } },
});

var variable={
    fsigninlink: function(username,password){
        element(objects.J_SIGNINLINK).click();
        expect(browser.getCurrentUrl()).toBe("https://www.jetblue.com/signin?returnUrl=https:%2F%2Fwww.jetblue.com%2F");
        browser.sleep(3000);
        element(objects.J_USERNAME).sendKeys(username);
        logger.info("Username entered");
        element(objects.J_PASSWORD).sendKeys(password);
        logger.info("Password entered");
        element(objects.J_SIGINBUTTON).click();
        browser.sleep(3000);
       expect(browser.getCurrentUrl()).toBe("https://www.jetblue.com/");
        logger.info("SIGNIN Completed");

    },

    fbook: function() {
       element(objects.J_BOOK).click();
        browser.sleep(3000);
        element(objects.J_BOOKFLIGHTS).click();

    },

    fdashboardflightandhotels:function(dcity,acity){
        element(objects.J_BOOKFLIGHTANDHOTELS).click();
        element(objects.J_DEPARTCITY_input).sendKeys(dcity);
        browser.sleep(3000);
        element(objects.J_DEPARTCITY).click();
        browser.sleep(3000);
        element(objects.J_ARRIVECITY_input).sendKeys(acity);
        browser.sleep(3000);
        element(objects.J_ARRIVECITY).click();
        browser.sleep(3000);
       var pickdeparturedate= element(objects.J_DEPARTUREDATE);

// get today's date
        var today = new Date(2019,2,12);
        var dd = today.getDate();
        var mm = today.getMonth();
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        today = mm+'/'+dd+'/'+yyyy;

        pickdeparturedate.sendKeys(today);
        browser.sleep(3000);
        try {
            throw new Error("Faking something going wrong!");
        } catch (e) {
            logger.error("An error occurred", e);
        }

      var pickarrivaldate= element(objects.J_RETURNDATE);

        var nextday = new Date(2019,3,12);
        var dd1 = nextday.getDate();
        var mm1 = nextday.getMonth();
        var yyyy1 = nextday.getFullYear();

        if(dd1<10) {
            dd1='0'+dd1
        }

        if(mm1<10) {
            mm1='0'+mm1
        }

        nextday = mm1+'/'+dd1+'/'+yyyy1;

        pickarrivaldate.clear();
        pickarrivaldate.sendKeys(nextday);
        browser.sleep(3000);
       /*element(objects.J_TRAVELLER).click();
        //browser.sleep(3000);
      var y= element(objects.J_LETSGOSOMWHR);
        y.getText().then(function (text) {
            console.log(text);
        });
        //element(objects.J_SEARCHVACCATION).click();*/
        pickarrivaldate.sendKeys(protractor.Key.TAB);
        browser.sleep(3000);
      //  element(objects.J_TRAVELLER).click();
       // browser.sleep(3000);
       /*var ele = element(by.xpath("(.//button[@theme='secondary'])[2]"))

        browser.executeScript("arguments[0].scrollIntoView()", ele.getWebElement());
        ele.click();*/
        element(objects.J_SEARCHVACCATION).click();
        browser.sleep(3000);
        expect(browser.getCurrentUrl()).toBe("https://vacations.jetblue.com/B6/AirPackageSearchExternal.do");
    },







       fdashboardflights:function(depcity,acity) {
           element(objects.J_BOOKFLIGHTS).click();
           browser.sleep(3000);
           element(objects.J_CHECKBOX).click();
           browser.sleep(3000);
           element(objects.J_DPEARTFLIGHT).sendKeys(depcity);
           browser.sleep(3000);
           element(objects.J_DEPARTCITY).click();
           browser.sleep(3000);
           element(objects.J_ARRIVEFLIGHT).sendKeys(acity);
           browser.sleep(3000);
           element(objects.J_ARRIVECITY).click();
           browser.sleep(3000);
           var pickdeparturedate = element(objects.J_FROMFLIGHTDATE);

// get today's date
           var today = new Date();
           var dd = today.getDate();
           var mm = today.getMonth() +2;
           var yyyy = today.getFullYear();

           if (dd < 10) {
               dd = '0' + dd
           }

           if (mm < 10) {
               mm = '0' + mm
           }

           today = mm + '/' + dd + '/' + yyyy;

           pickdeparturedate.clear();
           pickdeparturedate.sendKeys(today);
           browser.sleep(3000);


           var pickarrivaldate = element(objects.J_TOFLIGHTDATE);

           var nextday = new Date();
           var dd1 = nextday.getDate();
           var mm1 = nextday.getMonth()+3;
           var yyyy1 = nextday.getFullYear();

           if (dd1 < 10) {
               dd1 = '0' + dd1
           }

           if (mm1 < 10) {
               mm1 = '0' + mm1
           }

           nextday = mm1 + '/' + dd1 + '/' + yyyy1;

           pickarrivaldate.clear();
           pickarrivaldate.sendKeys(nextday);
           browser.sleep(3000);
           pickarrivaldate.sendKeys(protractor.Key.TAB);
           browser.sleep(3000);
           element(objects.J_SEARCHFLIGHTS).click();
           browser.sleep(3000);
           element(objects.J_CONTINUETOFLIGHTRESULT).click();
           browser.sleep(3000);
           expect(browser.getCurrentUrl()).toBe("https://book.jetblue.com/B6/webqtrip.html");


       },


    fverifyusername:function () {
        var a = element(objects.J_ERRORTEXT);
        expect(a.getText()).toBe("We need a valid email address.");
    },

    fverifylogin1: function () {
            var b= element(objects.J_ERRORTEXT1);
            expect(b.getText()).toBe("Either your username or password isn't right");

        } ,


    }



module.exports = variable;
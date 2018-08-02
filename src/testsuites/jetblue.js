var jetblue=require("../pagemodules/object.js")

describe("jetblue",function () {
    beforeEach (function(){
        browser.ignoreSynchronization=true;
        browser.get("https://www.jetblue.com/");
           jetblue.fsigninlink("twisatewary@gmail.com","twisa233");
      //  jetblue.fverifyusername();
        //jetblue.fverifylogin1();

    })
   /* it("Dashboardflights",function () {
        jetblue.fdashboardflights("bost","los");

    })*/
    it("Dashboardflightsandhotels",function () {
          jetblue.fdashboardflightandhotels("bost","los");

    })
   /* it("book",function () {
        jetblue.fbook();
    })*/

})
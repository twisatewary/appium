describe("Intoduction to protractor",function() {
    it("opening zoo",function(){

        browser.get("http://www.thetestroom.com/jswebapp/");
        browser.sleep(3000);
        element(by.model("person.name")).sendKeys("twisa");
        element(by.id("continue_button")).click();
        browser.sleep(3000);
        element(by.model("animal")).click();
        element(by.css('[value="3"]')).click();
        element(by.id("continue_button")).click();
        browser.sleep(3000);



    })

})
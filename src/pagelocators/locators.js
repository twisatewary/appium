var jetlocators={

    J_SIGNINLINK : by.linkText("Sign in"),
    J_USERNAME : by.css("[id*=login-email_]"),
    J_PASSWORD:by.css("[id*=password-email_"),
    J_SIGINBUTTON: by.buttonText("Sign in"),
    J_ERRORTEXT:by.id("emailError"),
    J_ERRORTEXT1:by.css['(class="pb1 mb2 red f6")'],
    J_BOOK:by.linkText("Book"),
    J_BOOKFLIGHTS:by.xpath("//*[@id=\"tabTitle_0\"]/span/span"),
    J_BOOKFLIGHTANDHOTELS: by.xpath("(.//span[@class='dib white ng-star-inserted'])[2]"),
    J_DOLLARSRADIO:by.css['(class="checkbox ba b--royal-blue bg-white pointer")'],
    J_NEWDEALS:by.linkText("See all deals with Best Fare Finder"),
   // J_DEPART:by.css['(class="f5 fl ph3 pv2 pt0 bn core-blue w-100 border-box no-flying-focus ng-pristine ng-valid ng-touched")[1]'],
    J_DEPARTCITY_input:by.xpath("/html[1]/body[1]/jb-app[1]/div[1]/div[1]/jb-homepage[1]/div[1]/jb-book-trip[1]/div[1]/div[2]/jb-booker-tabs[1]/jb-tabs[1]/div[3]/jb-booker-tabs-wrapper[1]/div[1]/div[1]/jb-booker[1]/form[1]/div[1]/jb-city-pair-selector[1]/div[1]/jb-city-selector[1]/div[1]/div[1]/div[1]/input[1]"),
    J_DEPARTCITY:by.css("#listbox>li"),
    J_ARRIVECITY_input:by.xpath("/html[1]/body[1]/jb-app[1]/div[1]/div[1]/jb-homepage[1]/div[1]/jb-book-trip[1]/div[1]/div[2]/jb-booker-tabs[1]/jb-tabs[1]/div[3]/jb-booker-tabs-wrapper[1]/div[1]/div[1]/jb-booker[1]/form[1]/div[1]/jb-city-pair-selector[1]/div[1]/jb-city-selector[2]/div[1]/div[1]/div[1]/input[1]"),
    J_ARRIVECITY:by.css("#listbox>li"),
    J_DEPARTUREDATE:by.xpath("/html[1]/body[1]/jb-app[1]/div[1]/div[1]/jb-homepage[1]/div[1]/jb-book-trip[1]/div[1]/div[2]/jb-booker-tabs[1]/jb-tabs[1]/div[3]/jb-booker-tabs-wrapper[1]/div[1]/div[1]/jb-booker[1]/form[1]/div[1]/div[2]/jb-date-aggregator[1]/div[1]/div[1]/div[1]/div[1]/input[1]"),
    J_RETURNDATE:by.xpath("/html[1]/body[1]/jb-app[1]/div[1]/div[1]/jb-homepage[1]/div[1]/jb-book-trip[1]/div[1]/div[2]/jb-booker-tabs[1]/jb-tabs[1]/div[3]/jb-booker-tabs-wrapper[1]/div[1]/div[1]/jb-booker[1]/form[1]/div[1]/div[2]/jb-date-aggregator[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]"),
  //  J_SEARCHVACCATION:by.xpath("(.//button[@class='dib pointer avenir b b--none white no-underline fpoint875 h3 lh-3 tc nowrap w-100 w-auto-ns w-max-ns t-med min-w7-ns jb-button-secondary bg-orange ph7point0-ns br-rounded-2'])[2]"),
   // J_TRAVELLER:by.xpath("/html[1]/body[1]/jb-app[1]/div[1]/div[1]/jb-homepage[1]/div[1]/jb-book-trip[1]/div[1]/div[2]/jb-booker-tabs[1]/jb-tabs[1]/div[3]/jb-booker-tabs-wrapper[1]/div[1]/div[1]/jb-booker[1]/form[1]/div[1]/div[2]/jb-traveler-selector[1]/div[1]/div[1]/button[1]"),
    J_TRAVELLER:by.id("traveler-selector_t8p9yqxvm"),
    J_SEARCHVACCATION:by.xpath("(.//button[@theme='secondary'])[2]"),
    //J_SEARCHVACCATION:by.xpath("//*[@id=\"booker_ud58f2mlj\"]/div[2]/button"),
     J_LETSGOSOMWHR:by.id("first-focus"),
     J_DPEARTFLIGHT:by.xpath("/html[1]/body[1]/jb-app[1]/div[1]/div[1]/jb-homepage[1]/div[1]/jb-book-trip[1]/div[1]/div[2]/jb-booker-tabs[1]/jb-tabs[1]/div[2]/jb-booker-tabs-wrapper[1]/div[1]/jb-booker[1]/form[1]/div[1]/jb-city-pair-selector[1]/div[1]/jb-city-selector[1]/div[1]/div[1]/div[1]/input[1]"),
     J_ARRIVEFLIGHT:by.xpath("/html[1]/body[1]/jb-app[1]/div[1]/div[1]/jb-homepage[1]/div[1]/jb-book-trip[1]/div[1]/div[2]/jb-booker-tabs[1]/jb-tabs[1]/div[2]/jb-booker-tabs-wrapper[1]/div[1]/jb-booker[1]/form[1]/div[1]/jb-city-pair-selector[1]/div[1]/jb-city-selector[2]/div[1]/div[1]/div[1]/input[1]"),
     J_FROMFLIGHTDATE:by.xpath("/html[1]/body[1]/jb-app[1]/div[1]/div[1]/jb-homepage[1]/div[1]/jb-book-trip[1]/div[1]/div[2]/jb-booker-tabs[1]/jb-tabs[1]/div[2]/jb-booker-tabs-wrapper[1]/div[1]/jb-booker[1]/form[1]/div[1]/div[3]/jb-date-aggregator[1]/div[1]/div[1]/div[1]/div[1]/input[1]"),
     J_TOFLIGHTDATE:by.xpath("/html[1]/body[1]/jb-app[1]/div[1]/div[1]/jb-homepage[1]/div[1]/jb-book-trip[1]/div[1]/div[2]/jb-booker-tabs[1]/jb-tabs[1]/div[2]/jb-booker-tabs-wrapper[1]/div[1]/jb-booker[1]/form[1]/div[1]/div[3]/jb-date-aggregator[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]"),
     J_SEARCHFLIGHTS:by.xpath("(.//button[@theme='secondary'])[1]"),
     J_CONTINUETOFLIGHTRESULT:by.xpath("/html[1]/body[1]/jb-app[1]/div[1]/div[1]/jb-homepage[1]/div[1]/jb-book-trip[1]/div[1]/div[2]/jb-booker-tabs[1]/jb-tabs[1]/div[2]/jb-booker-tabs-wrapper[1]/div[1]/jb-booker[1]/form[1]/jb-dialog-temp-wrapper[1]/div[1]/div[1]/jb-popup-dialog[1]/jb-dialog-temp-content[1]/button[1]"),
     J_CHECKBOX:by.xpath("/html[1]/body[1]/jb-app[1]/div[1]/div[1]/jb-homepage[1]/div[1]/jb-book-trip[1]/div[1]/div[2]/jb-booker-tabs[1]/jb-tabs[1]/div[2]/jb-booker-tabs-wrapper[1]/div[1]/jb-booker[1]/form[1]/div[1]/div[2]/jb-checkbox[1]/div[1]/div[1]"),
}









module.exports = jetlocators;
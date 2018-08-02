exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //sauceSeleniumAddress: 'ondemand.saucelabs.com:443/wd/hub',
    specs: ['src/testsuites/jetblue.js'],
    directConnect:true,
    //capabilities: {

       // 'browserName' :'chrome',
      //  'platform' : 'Windows 10',
        //'version' : '58.0',
   // },
   // sauceUser:"twisatewary",
  //  sauceKey:'2e3b2e9c-f0e1-4ba1-9cce-5d343357c357',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 600000,
    },

};
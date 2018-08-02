exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test.js'],
    //directConnect:true,
    multiCapabilities: [
        {
            browserName: 'firefox'

        },
           {

    browserName:'chrome'
           }
     ],


    jasmineNodeOpts: {
        defaultTimeoutInterval: 600000,
    },


}
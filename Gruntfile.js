module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        protractor: {

            chrome: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: "config.js", // Target-specific config file
                },
            },
            firefox: {

                options: {
                    configFile: "configf.js", // Target-specific config file
                },

            }
        },
        clean: {
           content: ['C:\\Users\\twisa.tewary\\Desktop\\apium\\signindetails.log']
        },




    });

    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean','protractor:chrome','protractor:firefox']);


};
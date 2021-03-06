'use strict';

module.exports = function ( config ) {
    config.set( {
        basePath         : '',
        frameworks       : ['browserify', 'jasmine'],
        files            : [
            '6/test/**/*.js'
        ],
        preprocessors    : {
            '6/test/**/*.js' : ['browserify']
        },
        browserify       : {
            debug     : true,
            transform : ['browserify-istanbul'],
            plugin    : ['proxyquireify/plugin'],
            paths     : ['6/src']
        },
        reporters        : ['progress', 'junit', 'coverage'],
        browsers         : ['PhantomJS'],
        plugins          : [
            'browserify-istanbul',
            'proxyquireify',
            'karma-browserify',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-coverage'
        ],
        coverageReporter : {
            type : 'html',
            dir  : 'target/coverage-reports/'
        },
        junitReporter    : {
            outputDir  : 'target/surefire-reports/',
            outputFile : 'TEST-karma-results.xml'
        }
    } );
};


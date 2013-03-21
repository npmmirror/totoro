'use strict';

var logging = require('winston')
var path = require('path')
var thrillRunner = require('totoro-thrill').runner

module.exports = main

function main(commander, options) {
    var run = options.run;
    var testDir = options.testDir

    options.serve = path.join(testDir, '..')
    options.host = options.queenHost

    thrillRunner(options, function(passed) {
        if (passed instanceof Error) {
            throw passed
        }
        if (passed) {
            process.exit(0)
        } else {
            process.exit(1)
        }
    })
}
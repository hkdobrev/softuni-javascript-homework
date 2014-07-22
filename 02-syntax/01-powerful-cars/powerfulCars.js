(function(undefined) {
    var readline = require('readline'),
        convertKWtoHP = require('./convertKWtoHP.js'),
        rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true
        });

    rl.on("line", function( kW ) {
        kW = +kW;
        console.log(convertKWtoHP(kW));
    });
}());

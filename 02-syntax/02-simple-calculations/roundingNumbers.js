(function(undefined) {
    var readline = require('readline'),
        roundNumber = require('./roundNumber.js'),
        rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true
        });

    rl.on("line", function( number ) {
        roundNumber(number);
    });
}());

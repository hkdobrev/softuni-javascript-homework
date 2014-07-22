(function (module, undefined) {
	function roundNumber (number) {
		console.log(Math.round(number));
		console.log(Math.floor(number));
	}

	if (module && module.exports) {
		module.exports = roundNumber;
	} else {
		this.roundNumber = roundNumber;
	}
}(module));

(function () {
	var date = new Date(),
		hoursString = '' + date.getHours(),
		minutes = date.getMinutes(),
		minutesString = (minutes < 10 ? '0' : '') + minutes;

	console.log(hoursString + ':' + minutesString);
}());

(function (window, Math, unrefined) {
	function calcCircleArea (radius) {
		return Math.PI * radius * radius;
	}

	window.calcCircleArea = calcCircleArea;

}(window, window.Math));

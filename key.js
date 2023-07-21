document.onkeydown = function () {
	if (
		(event.ctrlKey && window.event.keyCode == 70) ||
		(event.ctrlKey && window.event.keyCode == 71) ||
		(event.ctrlKey && window.event.keyCode == 79) ||
		(event.ctrlKey && window.event.keyCode == 80) ||
		(event.ctrlKey && window.event.keyCode == 82) ||
		(event.ctrlKey && window.event.keyCode == 83) ||
		(event.ctrlKey && window.event.keyCode == 85) ||
		(event.keyCode == 112) ||
		(event.keyCode == 113) ||
		(event.keyCode == 114) ||
		(event.keyCode == 116) ||
		(event.keyCode == 117) ||
		(event.keyCode == 118) ||
		(event.keyCode == 119) ||
		(event.keyCode == 120) ||
		(event.keyCode == 121)) { return false }
};

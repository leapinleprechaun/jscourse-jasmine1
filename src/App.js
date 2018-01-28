// Create a new constructor function
var App = function () {
	// Can add directly in the constructor
	// this.add2Numbers = function(num1, num2) {
	//   return num1 + num2;
	// }
}


// Or can add afterwards on the prototype
App.prototype.add2Numbers = function (num1, num2) {
	return num1 + num2;
}


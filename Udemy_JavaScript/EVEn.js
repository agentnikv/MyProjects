function isEven(x) {
	if (x%2 == 0) {
		return true
	} 
	else {
		return false
	}
}

isEven(6)






function factorial(x) {

    var y=1
	for (var i = x; i > 0; i=i-1) {
		y=y*i;
		console.log("y= " + y)
	}
	return y
}

factorial(5)



function kebabToSnake(str) {
	var newStr = str.replace (/Cool/g , "Not Cool");
	return newStr 
}
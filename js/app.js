
var result;

// function for when button is pressed
function calculate() {
	var weight = document.getElementById('inputWeight').value;
	var planetWeight = document.getElementById('dropdownPlanet').value;
	var index = document.getElementById("dropdownPlanet").selectedIndex;
	var planet = document.getElementById("dropdownPlanet").options[index].text;
	
	result = weight * planetWeight;

	console.log(weight);
	console.log(planetWeight);
	console.log(planet);
	console.log(result);

	return {name: planet, val: result};
}

// function to append results to p
function toHTML(numbers) {
	var p = document.getElementById('result');
	var html = '<div> If you were on ' + numbers.name + ', you would weigh ' + numbers.val + 'lbs!' + '</div>';
    
	p.innerHTML = html

    console.log(html);
    
    return false;
}

// final function to show results on click
function toString() {
	toHTML(calculate());

	return false;
}

var button = document.getElementById('button');
button.onclick = toString;











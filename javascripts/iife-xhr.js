function showCarnivores (carnData) {
carnData.forEach(function(dMCarn){
	console.log("Carnivore name:", dMCarn);
	var output = document.getElementById("outputC");
		output.innerHTML += "Carn-E name: " + dMCarn + "<br>";
});
}

//Info we've loaded & send through is: JSON.parse(this.responseText).carnivore;
//source: loadCarnivores function

function showHerbivores (herbData) {
herbData.forEach(function(dMHerb){
	console.log("Herbivore name:", dMHerb);
	var output = document.getElementById("outputH");
		output.innerHTML += "Herb derb: " + dMHerb + "<br>";
});
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);

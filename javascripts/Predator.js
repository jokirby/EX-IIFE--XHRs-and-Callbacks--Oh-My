console.log("Let's begin");
var Predator = (function () {
  var carnivores = [];  //iife immediately runs and Predator is an object holding two functions carn & herb.
  var herbivores = [];  //Predator.carnivores()
                        //        .herbivores()

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "lib/carnivore.json");
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        var carnStuff = JSON.parse(this.responseText).cAnimals;
        callbackToInvoke(carnStuff);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
      });
    },
     loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "lib/herbivore.json");
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        var herbStuff = JSON.parse(this.responseText).hAnimals;
        callbackToInvoke(herbStuff);
      });
    }
  }
})();

console.log("Predator", Predator);

// Predator should expose two public functions to load each JSON files and stores the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
// In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded to then display those animals in your DOM. Example given below.
// In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.
// Here's some code to get you started.
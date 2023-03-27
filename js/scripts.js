
//all code that accesses/manipulates the DOM needs to be in the load -- need to wait to run our DOM manipulating code until webpage has loaded

window.addEventListener("load", function() { 
  const removeH1 = document.querySelector("h1");
  removeH1.remove();
  

  // const form = document.getElementById("calculator");
  // form.addEventListener("submit", handleCalculation);
});



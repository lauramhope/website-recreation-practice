
//all code that accesses/manipulates the DOM needs to be in the load -- need to wait to run our DOM manipulating code until webpage has loaded

window.addEventListener("load", function() { 
  const removeH1 = document.querySelector("h1");
  removeH1.remove();
  const newH1 = document.createElement("h1");
  newH1.append("Webpage Recreation Practice");
  const newP = document.createElement("p");
  newP.append("The HTML of this webpage was created with JavaScript.")
  const newImg = document.createElement("img");
  newImg.setAttribute("src").append("https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  newImg.setAttribute("alt").append("This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  newImg.setAttribute("style").append("width:50%");
  const secondH1 = document.createElement("h1");
  secondH1.append("Facts about the Multicolored Tanager");
  secondH1.after(newH1);
  const liElement1 = document.createElement("li");
  liElement1.append("It is endemic to the mountains of Colombia.");
  const liElement2 = document.createElement("li");
  liElement2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  const newUl = document.createElement("ul");
  newUl.append(liElement1); 
  newUl.append(liElement2);
  liElement2.after(liElement1);
  const newH2 = document.createElement("h2");
  newH2.append("Source");
  const aTag = document.createElement("a");
  aTag.setAttribute("href").append("https://en.wikipedia.org/wiki/Multicoloured_tanager");
});


 
  
  // const form = document.getElementById("calculator");
  // form.addEventListener("submit", handleCalculation);
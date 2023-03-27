
//all code that accesses/manipulates the DOM needs to be in the load -- need to wait to run our DOM manipulating code until webpage has loaded
window.addEventListener("load", function() { 
  const removeH1 = document.querySelector("h1");
  removeH1.remove();
  let body = document.querySelector("body");
  const newH1 = document.createElement("h1");
  body.append(newH1); 
  newH1.append("Webpage Recreation Practice");

  const newP = document.createElement("p");
  newP.append("The HTML of this webpage was created with JavaScript.")
  body.append(newP); 

  const newImg = document.createElement("img");
  newImg.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  newImg.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  newImg.setAttribute("style", "width:50%");
  body.append(newImg); 

  const secondH1 = document.createElement("h1");
  secondH1.append("Facts about the Multicolored Tanager");
  secondH1.after(newH1);
  body.append(secondH1); 

  const liElement1 = document.createElement("li");
  liElement1.append("It is endemic to the mountains of Colombia.");
  body.append(liElement1); 

  const liElement2 = document.createElement("li");
  liElement2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  body.append(liElement2); 

  const newUl = document.createElement("ul");
  newUl.append(liElement1); 
  newUl.append(liElement2);
  liElement2.after(liElement1);
  body.append(newUl); 

  const newH2 = document.createElement("h2");
  newH2.append("Source");
  body.append(newH2); 

  const aTag = document.createElement("a");
  aTag.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  body.append(aTag); 
  console.log(aTag); 
  // body.append(newH1, newP, newImg, secondH1, liElement1, liElement2, newUl, newH2, atag); 

});





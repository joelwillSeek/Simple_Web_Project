let body = document.body;

let newParagraph = document.createElement("p");
let newHeader = document.createElement("h3");
let newDiv = document.createElement("div");
let newDivParagraph = document.createElement("p");
let newDivHeader = document.createElement("h1");

newParagraph.textContent = "Hey I’m red!";
newParagraph.style.cssText = "color:Red;";
newDivHeader.textContent = "I’m in a div";
newDivParagraph.textContent = "ME TOO!";
newHeader.textContent = "I’m a blue h3!";
newHeader.style.cssText = "color:blue";
newDiv.style.cssText = "border:1px solid #000";
newDiv.style.cssText = "background-color:pink";

body.appendChild(newParagraph);
body.appendChild(newHeader);
body.appendChild(newDiv);
newDiv.appendChild(newDivHeader);
newDiv.appendChild(newDivParagraph);

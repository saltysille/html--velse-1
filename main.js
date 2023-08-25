//const image = document.querySelector("img");
//console.log(image);

//const footer = document.querySelector("footer");
//console.log(footer);

// pseudo selector
// Query selector for the first article element

const article1Element = document.querySelector(".grid-1-1 article:first-child");
console.log(article1Element);
// Query selector for the second article element
const article2Element = document.querySelector(".grid-1-1 article:last-child");
console.log(article2Element);

// nærmeste søskende
// Query selector for the first article element
const article3Element = document.querySelector(
  "main > .grid1-1 > article:first-child"
);
console.log(article3Element);
// Query selector for the second article element
const article4Element = document.querySelector(
  "main > .grid1-1 > article:first-child + article"
);
console.log(article4Element);

// Query the header element
const headerElement = document.querySelector("header");

// Change the text content of the h1 element
headerElement.querySelector("h1").textContent = "New Title";

// for 1 article
// Query the first article element
const firstArticle = document.querySelector(".grid-1-1 article:first-child");
console.log(firstArticle);
// Query the first p element within the first article
const firstArticleParagraph = firstArticle.querySelector("p");

// Change the text content of the first p element
firstArticleParagraph.textContent = "New content for the first paragraph.";

// for alle articles
// Query all article elements
const articleElements = document.querySelectorAll(".grid-1-1 article");

// Loop through each article and change the text content of the p element
articleElements.forEach((article) => {
  const paragraphElement = article.querySelector("p");
  paragraphElement.textContent = "New content for the paragraph.";
});

// for alle articles overskrifter
// Query all article elements
const articleElementsh3 = document.querySelectorAll(".grid-1-1 article");

// Loop through each article and change the text content of the p element
articleElementsh3.forEach((article) => {
  const paragraphElement = article.querySelector("h3");
  paragraphElement.textContent = "New h3.";
});

// Ændre billederne i begge articles med javascript
// Query all article elements
const articleElementsimg = document.querySelectorAll(".grid-1-1 article");

// Change the src attribute of the first image
articleElementsimg[0].querySelector("img").src =
  "https://picsum.photos/500/800";

// Change the src attribute of the second image
articleElementsimg[1].querySelector("img").src =
  "https://picsum.photos/id/10/500/800";

// Create a new article element
const newArticle = document.createElement("article");

// Create an image element and set its source
const newImage = document.createElement("img");
newImage.src = "https://picsum.photos/200/300"; // Replace with your image URL
newArticle.appendChild(newImage);

// Create a heading element and set its text content
const newHeading = document.createElement("h3");
newHeading.textContent = "New Article Heading";
newArticle.appendChild(newHeading);

// Create a paragraph element and set its text content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is the content of the new article.";
newArticle.appendChild(newParagraph);

// Query the element after which the new article should be inserted
const referenceElement = document.querySelector(".grid-1-1 article:last-child");

// Insert the new article after the reference element
referenceElement.parentNode.insertBefore(
  newArticle,
  referenceElement.nextSibling
);

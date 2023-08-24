// const info = document.querySelector("h3");
// console.log(info);

// const text = document.querySelector("p");
// console.log(text);

// const pic = document.querySelector("img");
// console.log(pic);

// const footer = document.querySelector("footer");
// console.log(footer);

// const overskrift = document.querySelector("h1");
// console.log(overskrift);

// Pseudo selector
// Query selector for the first article element
const article1Element = document.querySelector(".grid1-1 article:first-child");
console.log(article1Element);
// Query selector for the second article element
const article2Element = document.querySelector(".grid1-1 article:last-child");
console.log(article2Element);

// Nærmeste søskende
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

// Udskift overskrift

// Query the header element
const headerElement = document.querySelector("header");

// Change the text content of the h1 element
headerElement.querySelector("h1").textContent = "New Title";

// Udskift p for en article

// Query the first article element
const firstArticle = document.querySelector(".grid1-1 article:first-child");

// Query the first p element within the first article
const firstArticleParagraph = firstArticle.querySelector("p");

// Change the text content of the first p element
firstArticleParagraph.textContent = "New content for the first paragraph.";

// Udskift p for begge articler

// Query all article elements
const articleElements = document.querySelectorAll(".grid1-1 article");

// Loop through each article and change the text content of the p element
articleElements.forEach((article) => {
  const paragraphElement = article.querySelector("p");
  paragraphElement.textContent = "New content for the paragraph.";
});

// H3

// for alle articles overskrifter
// Query all article elements
const articleElementsh3 = document.querySelectorAll(".grid1-1 article");

// Loop through each article and change the text content of the p element
articleElementsh3.forEach((article) => {
  const paragraphElement = article.querySelector("h3");
  paragraphElement.textContent = "New h3.";
});

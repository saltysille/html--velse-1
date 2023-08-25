//const image = document.querySelector("img");
//console.log(image);

//const footer = document.querySelector("footer");
//console.log(footer);

// pseudo selector
// Query selector for the first article element

document.addEventListener("DOMContentLoaded", function () {
  const article1Element = document.querySelector(
    ".grid-1-1 article:first-child"
  );
  console.log(article1Element);

  const article2Element = document.querySelector(
    ".grid-1-1 article:last-child"
  );
  console.log(article2Element);

  const article3Element = document.querySelector(
    "main > .grid1-1 > article:first-child"
  );
  console.log(article3Element);

  const article4Element = document.querySelector(
    "main > .grid1-1 > article:first-child + article"
  );
  console.log(article4Element);

  const headerElement = document.querySelector("header");
  headerElement.querySelector("h1").textContent = "New Title";

  const firstArticle = document.querySelector(".grid-1-1 article:first-child");
  console.log(firstArticle);

  const firstArticleParagraph = firstArticle.querySelector("p");
  firstArticleParagraph.textContent = "New content for the first paragraph.";

  const articleElements = document.querySelectorAll(".grid-1-1 article");
  articleElements.forEach((article) => {
    const paragraphElement = article.querySelector("p");
    paragraphElement.textContent = "New content for the paragraph.";
  });

  const articleElementsh3 = document.querySelectorAll(".grid-1-1 article");
  articleElementsh3.forEach((article) => {
    const paragraphElement = article.querySelector("h3");
    paragraphElement.textContent = "New h3.";
  });

  const articleElementsimg = document.querySelectorAll(".grid-1-1 article");
  articleElementsimg[0].querySelector("img").src =
    "https://picsum.photos/500/800";
  articleElementsimg[1].querySelector("img").src =
    "https://picsum.photos/id/10/500/800";

  const newArticle = document.createElement("article");
  const newImage = document.createElement("img");
  newImage.src = "https://picsum.photos/200/300";
  newArticle.appendChild(newImage);
  const newHeading = document.createElement("h3");
  newHeading.textContent = "New Article Heading";
  newArticle.appendChild(newHeading);
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This is the content of the new article.";
  newArticle.appendChild(newParagraph);
  const referenceElement = document.querySelector(
    ".grid-1-1 article:last-child"
  );
  referenceElement.parentNode.insertBefore(
    newArticle,
    referenceElement.nextSibling
  );
});

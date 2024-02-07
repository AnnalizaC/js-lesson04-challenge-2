//Transform list element
var firstListItem = document.querySelector("ul li");
//console.log(firstListItem.outerHTML);
firstListItem.style.textTransform = "uppercase";

//font size change
var moreReasons = document.querySelector(".more-reasons");
//console.log(moreReasons.outerHTML);
moreReasons.style.fontSize = "2.5em";

//highlight h3 element
var whyJS = document.querySelector("h3");
//console.log(whyJS.outerHTML);
whyJS.innerHTML = 'Why learn <span class="highlight">JavaScript</span>?';
//console.log(whyJS.outerHTML);
var highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";

//Switching out the image
var mainImage = document.querySelector("img");
//console.log(mainImage.outerHTML);
mainImage.src = "img/js-code.png";
mainImage.alt = "JavaScript code sample";
//console.log(mainImage.outerHTML);

/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global letiables
 *
*/
const title = document.querySelectorAll("h1").text;
const section_names_list = Array.from(document.getElementsByTagName("section"));


/**
 * End Global letiables
 * Start Helper Functions
 *
*/
// this function checks if an element is in the viewport
function isInViewport(item) {
    let rect=item.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        //rect.left >= 0 &&
        rect.top<=(window.innerHeight || document.documentElement.clientHeight)
        //rect.right <= window.innerWidth
      );
};


// this function is activated when the navigator is clicked
function scrollDown(){
  document.getElementById(this.innerText).scrollIntoView({behavior: "smooth"});
};


// this function is activated when the mouse is over the navigator
function blink(){
  this.style="font-size:170%; font-weight:bold;";
  setTimeout(() => { this.style="font-size:150%;"; }, 500);
};


// this function checks if an element is in the viewport
function hideHeader(){
  document.getElementById("navbar__list").style.display= "none";
  setTimeout(function() {
    document.getElementById("navbar__list").style.display= "flex";
  }, 500);
};


// this function activates the sections within viewport
function activateSection(){
  section_names_list.forEach(function(element){
    if (isInViewport(element)){
      element.className ="your-active-class";
      document.getElementById("list"+element.id).style="font-size:170%; background-color:black; font-weight:bold;"
      ;} else {
        element.className ="";
        document.getElementById("list"+element.id).style="font-size:150%;"}
  });
  };

  /*if (isInViewport(element)){
    element.className ="your-active-class";
    document.getElementById("list"+element.id).className = "active-class";
    ;} else {
      element.className ="";
      document.getElementById("list"+element.id).className = "";
  }

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav list
let buildList = function(element) {
  let nav = document.getElementById("navbar__list");
  let li = document.createElement("li");
  li.id="list"+element.id;
  li.appendChild(document.createTextNode(element.id));
  nav.appendChild(li);
  li.addEventListener('click',scrollDown);
  li.addEventListener('mouseover',blink);
};


//this function actually builds the nav
let buildNav= function() {section_names_list.forEach( buildList);}


let runJs = function(){
  buildNav();
  document.addEventListener("scroll", hideHeader);
  document.addEventListener("scroll", activateSection);
};


runJs();

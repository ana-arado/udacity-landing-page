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
 * Define Global Variables
 * 
*/
const sections = Array.from(document.querySelectorAll("section"));
let navbar = [];
const navbarList = document.querySelector("#navbar__list");
let id1 = sections[0].id;



console.log(id1);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function getNameNav (){
    i = 0;
    for (sec of sections){
        navbar.push(sections[i].dataset.nav);
        i++;
    }
}

getNameNav();
console.log(sections[0]);




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildMenu(){
    i = 1;
    for (const name of navbar){
              
        // navbarList.insertAdjacentHTML("beforeend","<li class=menu__link><a href='#'>"+ name + "</a></li>");
        navbarList.insertAdjacentHTML("beforeend",`<li class=menu__link><a href='#section${i}'> ${name} </a></li>`);
        i++

    }
}

buildMenu();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



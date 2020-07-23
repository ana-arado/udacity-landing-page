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
let navBar = [];

// console.log(sections);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function getNameNav (){
    i = 0;
    for (sec of sections){
        navBar.push(sections[i].dataset.nav);
        i++;
    }
}

getNameNav();
console.log(navBar);




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav






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



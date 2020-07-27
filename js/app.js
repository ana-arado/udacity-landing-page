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
let isActive = null;
const mainCont = document.querySelector("main");


console.log(sections);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function getNameNav (){
    i = 0;
    for (const sec of sections){
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
        navbarList.insertAdjacentHTML("beforeend",`<li><a class="menu__link" data-nav="Section ${i}" href='#section${i}'> ${name} </a></li>`);
        i++
    }
}

buildMenu();

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', function(){
    let activeSection = null
// Determines which is the active section
    for (const sec of sections) {
	    const bottom = sec.getBoundingClientRect().bottom
	    if (!activeSection && bottom > window.innerHeight * 0.3) {
            activeSection = sec

	    }
    }
// Changes the classes when active section changes
    if (activeSection.dataset.nav != isActive){
        // Removes classes
        navbarList.querySelector(".your-active-class-nav")?.classList.remove('your-active-class-nav');
        mainCont.querySelector('.your-active-class').classList.remove('your-active-class');
        // Adds classes to active
        activeSection.classList.add('your-active-class');
        const navActive = navbarList.querySelector(`[data-nav="${activeSection.dataset.nav}"]`);
        navActive.classList.add("your-active-class-nav");
        // Persists active
        isActive = activeSection.dataset.nav;
    }
});


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



/***
 * 
 * Global Variables
 * 
 ***/

const sections = [
  ['About', 'about',`
  <article>
    <h2>About</h2>
    <p>Hi, Bastian from Switzerland speaking.</p>
    <p>I am a husband and father of 3, spending free time between sport (triathlon), cooking, taking pictures and playing video games, and kids games too.</p>
    <p>I first learned computer science. Then I went to Australia to learn english. When back, I stopped computer science to learn graphic design. Having both Computer Sciencee and Graphic Design skills opened me a door in Frontend Design and Development. I am currently working as a Frontend and Multimedia Team Lead at SCOTT Sports.</p>
  </article>
  `],
  ['Nanodegree', 'nanodegree', `
  <article>
    <h2>Nanodegree</h2>
    <p>I am currently following a Frontend Developper Nanodegree at Udacity and building that landing page for that purpose.</p>
    <p>The page content is built with the help of some Javascript. The content is currently stored in a variable
     but it would be super nice to have it in a JSON file.</p>
  </article>
  `],
  ['Ironman', 'ironman', `
  <article>
    <h2>You are an Ironman</h2>
    <p>If you do sports like running or biking, you probably already heard about long distance triathlon. The one called Ironman. Simply put: it is 3,8km of swimming, 180,2km of biking and 42,2km of running.</p>
    <p>It is not an easy task but I wanted to try. And I did one, the Ironman Switzerland Thun. Objective: The finish line and that voice on the red carpet: "You are ... an Ironman!</p>
    <p>During the race you go through all feelings possible but that voice at the end is total relief. Damn, that's a hell of a good feeling.</p>
  </article>
  `],
  ['Contact', 'contact', `
  <article>
    <h2>Follow me</h2>
    <p>You can also find me here</p>
    <p class="social-links">
      <a href="https://www.facebook.com/bastian.gurtner" title="author's facebook account" target="_blank">
        <img src="images/facebook-brands.svg" alt="facebook icon">
      </a> 
      <a href="https://www.instagram.com/monsieur_bastian/" title="author's instagram account" target="_blank">
        <img src="images/instagram-brands.svg" alt="instagram icon">
      </a>
    </p>
  </article>
  `]
];

/* End Global Variables */



/***
 * 
 * Functions
 * 
 ***/


/**
* @description Build the navigation from the 'sections' variable
*/
function buildNavigation() {
  const navFragment = document.createDocumentFragment();
  let firstItem = 1;

  for (const section of sections) {
    let [crtName, crtId] = section;
    const newItem = document.createElement('li');

    if (firstItem) {
      newItem.innerHTML = '<a href="#' + crtId + '" class="nav-active">' + crtName + '</a>';
      firstItem = 0;
    } else {
      newItem.innerHTML = '<a href="#' + crtId + '">' + crtName + '</a>';
    }
    navFragment.appendChild(newItem);
  }
  
  const nav = document.getElementById('nav-list');
  nav.appendChild(navFragment);
}



/**
* @description Stick the nav at the top of the screen when scrolling
*/
function stickNavToTop() {
  // select header
  const header = document.querySelector('.navigation');

  if (window.scrollY > 0) {
    header.classList.add('navigation-sticky');
  } else {
    header.classList.remove('navigation-sticky');
  }
  
}


/**
* @description Set the navigation active link depending which section is in the viewport
*/
function navActiveInViewport() {
  // select all nav links
  const navLinks = document.querySelectorAll('nav ul li a');
  
  // for each nav items
  for (const navLink of navLinks) {

    // get the link - same as section id
    const hash = navLink.getAttribute('href');
    // get the section
    const section = document.querySelector(hash);
    // get section positions
    const sectionPosition = section.getBoundingClientRect();
  
    // the section is active in the viewport when
    // almost at the top (< 100px), as long as the bottom
    // is not almost at the top (< 100px)
    if (sectionPosition['top'] <= 150 && sectionPosition['bottom'] >= 150) {
      navLink.classList.add('nav-active');
    } else {
      navLink.classList.remove('nav-active');
    }
  }
}


/**
* @description Build the main content
*/
function buildContent() {
  const contentFragment = document.createDocumentFragment();

  for (const section of sections) {
    let [, crtId, crtHtml] = section;
    const newSection = document.createElement('section');
    
    newSection.id = crtId;
    newSection.innerHTML = crtHtml;
    contentFragment.appendChild(newSection);
  }

  const content = document.querySelector('main');
  content.appendChild(contentFragment);
}


/**
* @description Show back to top button after a little scroll
*/
function showBackToTop() {
  const btn = document.getElementsByClassName('back-to-top');
  const fold = window.innerHeight;

  if (window.scrollY > fold) {
    btn[0].classList.add('back-to-top-visible');
    btn[0].onclick = function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  } else {
    btn[0].classList.remove('back-to-top-visible');
  }
}


/**
* @description Scroll to top
*/
/* function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
} */

/* End Functions */



/***
 * 
 * Events
 * 
 ***/

// set active nav item while scrolling
window.addEventListener("scroll", navActiveInViewport);
// add a back to top button
window.addEventListener("scroll", showBackToTop);
// make navigation sticky
window.addEventListener("scroll", stickNavToTop);

/* End Events */




/***
 * 
 * Build
 * 
 ***/

// navigation
buildNavigation();

// content
buildContent();

/* End Build */
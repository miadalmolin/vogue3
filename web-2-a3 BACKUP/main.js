// Declare pages

let landingPage = document.querySelector("#page-landing");
let historyStartPage = document.querySelector("#page-twenties");
let thirtiesPage = document.querySelector("#page-thirties");
let fortiesPage = document.querySelector("#page-forties");
let fiftiesPage = document.querySelector("#page-fifties");
let sixtiesPage = document.querySelector("#page-sixties");
let seventiesPage = document.querySelector("#page-seventies");
let eightiesPage = document.querySelector("#page-eighties");
let ninetiesPage = document.querySelector("#page-nineties");
let twoThousandsPage = document.querySelector("#page-two-thousands");
let legacyPage = document.querySelector("#page-significance");
let legacyMore = document.querySelector("#page-significance-more");
let iconicMomentsPage = document.querySelector("#page-iconicmoments");
let footerPage = document.querySelector("#page-more");

// //////////////////////////////// HOME PAGE SPINNING MODEL ////////////////////////////////

// Declare variables
const dressModel = document.querySelector(".dress-model"); // get the model viewer element
let rotation = 0; // initial rotation (degrees)

// Function to make model spin
function spinModel() {
  rotation += 0.1; // changes the rotation angle increment per frame. this changes the speed of the animation
  dressModel.cameraOrbit = `${rotation}deg 75deg 310.8m`; // update the camera orbit to rotate the model
  requestAnimationFrame(spinModel); // request the next animation frame to create a smooth animation
}

// Start the spinning animation
spinModel();


//////////////////////////////// HOME PAGE IMG ANIMATION ////////////////////////////////

// Get all the images in the HTMl with an array
const images = Array.from(document.querySelectorAll("#image-animation img"));

// Create random position function so that images are in a different position every time the function runs
function randomPosition(image) {
  // Set constants for min and max values so that the images stay within a certain defined area in the browser window
  const minTop = 5; // min value for top property
  const maxTop = 60; // max value for top property
  const minLeft = 5; // min value for left property
  const maxLeft = 80; // max value for left property

  // Set constants for the random value for the top and left properties
  const randomTop = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop; // Basically the random value =  5(the min value) + (random number between 0 and 1 * 56), which will always give a number between the min and max values
  const randomLeft =
    Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft; // Same as top values

  // Add CSS styling depending on the randomTop and randomLeft values
  image.style.position = "absolute"; // Allows top and left properties to be applied
  image.style.top = randomTop + "vh"; // Return string values
  image.style.left = randomLeft + "vh";
}

// Perform the randomPosition function on each image in the array
images.forEach(randomPosition);

// Create a GSAP timeline for each image
const tl = gsap.timeline({ repeat: -1 }); // repeat -1 makes it repeat infinitely

// Add an animation for each image in the array, in order by their index
images.forEach((image, index) => {
  tl.from(image, {
    opacity: 0,
    duration: 1,
    delay: 1,
    onStart: () => randomPosition(image), // once the timeline reaches the end of the array, perform the function again to give new random values to the top and left properties
  });
  tl.to(image, { opacity: 0, duration: 1, delay: 2.5 });
});

//////////////////////////////// SCROLL NAVIGATION BETWEEN PAGES ////////////////////////////////

// Variables to keep track of the current page
var currentPage = "page-landing";

// Ensure animation is complete before starting the next one - default is false
var animationComplete = false;

// Scroll event listener
window.addEventListener("wheel", function (event) {

  // Set variable for wheel event
  var deltaY = event.deltaY;

  // Execute if the user scrolls down
  if (deltaY > 0) {
    // Scrolling down

    if (currentPage === "page-landing") {
      // Use strict equality to ensure that the value is a string
      // Fade out page-landing and fade in page-twenties
      gsap.to(landingPage, { opacity: 0, display: "none", duration: 1 });
      gsap.set(historyStartPage, { opacity: 0, display: "flex" });
      gsap.to(historyStartPage, {
        delay: 1,
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true; // Set animationComplete to true to allow the next animation to start when the user scrolls again
        },
      });
      currentPage = "page-twenties";
    } else if (currentPage === "page-twenties" && animationComplete) {// use && to ensure that the animation only starts if BOTH properties are true
      // Fade out page-twenties and fade in page-thirties
      animationComplete = false;
      gsap.to(historyStartPage, { opacity: 0, display: "none", duration: 1 });
      gsap.set(thirtiesPage, { opacity: 0, display: "flex" });
      gsap.to(thirtiesPage, {
        delay: 1,
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-thirties";
    } else if (currentPage === "page-thirties" && animationComplete) {
      // Fade out page-thirties and fade in page-forties
      animationComplete = false;
      gsap.to(thirtiesPage, { opacity: 0, display: "none", duration: 1 });
      gsap.set(fortiesPage, { opacity: 0, display: "flex" });
      gsap.to(fortiesPage, {
        delay: 1,
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-forties";
    } else if (currentPage === "page-forties" && animationComplete) {
      // Fade out page-forties and fade in page-fifties
      animationComplete = false;
      gsap.to(fortiesPage, { opacity: 0, display: "none", duration: 1 });
      gsap.set(fiftiesPage, { opacity: 0, display: "flex" });
      gsap.to(fiftiesPage, {
        delay: 1,
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-fifties";
    } else if (currentPage === "page-fifties" && animationComplete) {
      // Fade out page-fifties and fade in page-sixties
      animationComplete = false;
      gsap.to(fiftiesPage, { opacity: 0, display: "none", duration: 1 });
      gsap.set(sixtiesPage, { opacity: 0, display: "flex" });
      gsap.to(sixtiesPage, {
        delay: 1,
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-sixties";
    } else if (currentPage === "page-sixties" && animationComplete) {
      // Fade out page-sixties and fade in page-seventies
      animationComplete = false;
      gsap.to(sixtiesPage, { opacity: 0, display: "none", duration: 1 });
      gsap.set(seventiesPage, { opacity: 0, display: "flex" });
      gsap.to(seventiesPage, {
        delay: 1,
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-seventies";
    } else if (currentPage === "page-seventies" && animationComplete) {
      // Fade out page-seventies and fade in page-eighties
      animationComplete = false;
      gsap.to(seventiesPage, { opacity: 0, display: "none", duration: 1 });
      gsap.set(eightiesPage, { opacity: 0, display: "flex" });
      gsap.to(eightiesPage, {
        delay: 1,
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-eighties";
    } else if (currentPage === "page-eighties" && animationComplete) {
      // Fade out page-eighties and fade in page-nineties
      animationComplete = false;
      gsap.to(eightiesPage, { opacity: 0, display: "none", duration: 1 });
      gsap.set(ninetiesPage, { opacity: 0, display: "flex" });
      gsap.to(ninetiesPage, {
        delay: 1,
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-nineties";
    } else if (currentPage === "page-nineties" && animationComplete) {
      // Fade out page-nineties and fade in page-two-thousands
      animationComplete = false;
      gsap.to(ninetiesPage, { opacity: 0, display: "none", duration: 1 });
      gsap.set(twoThousandsPage, { opacity: 0, display: "flex" });
      gsap.to(twoThousandsPage, {
        delay: 1,
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-two-thousands";
    } else if (currentPage === "page-two-thousands" && animationComplete) {
      // Fade out page-thirties and fade in page-significance
      animationComplete = false;
      gsap.to(twoThousandsPage, { opacity: 0, display: "none", duration: 1 });
      gsap.set(legacyPage, { opacity: 0, display: "flex" });
      gsap.to(legacyPage, {
        delay: 1,
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-significance";
    } else if (currentPage === "page-significance" && animationComplete) {
      // Fade out page-significance and fade in page-iconicmoments
      animationComplete = false;
      gsap.to(legacyPage, { opacity: 0, display: "none", duration: 1 });
      gsap.set(iconicMomentsPage, { opacity: 0, display: "flex" });
      gsap.to(iconicMomentsPage, {
        delay: 1,
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-iconicmoments";
    } else if (currentPage === "page-iconicmoments" && animationComplete) {
      // Fade out page-iconicmoments and fade in page-more
      animationComplete = false;
      gsap.to(iconicMomentsPage, { opacity: 0, display: "none", duration: 1 });
      gsap.set(footerPage, { opacity: 0, display: "flex" });
      gsap.to(footerPage, {
        delay: 1,
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-more";
    }

    // Execute if the user scrolls up
  } else if (deltaY < 0) {
    // Scrolling up
    var tl = gsap.timeline();

    if (currentPage === "page-more" && animationComplete) {
      // Fade out page-more and fade in page-iconicmoments
      animationComplete = false;
      tl.to(footerPage, { opacity: 0, display: "none", duration: 1 });
      tl.set(iconicMomentsPage, { opacity: 0, display: "flex" });
      tl.to(iconicMomentsPage, {
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-iconicmoments";
    } else if (currentPage === "page-iconicmoments" && animationComplete) {
      // Fade out page-iconicmoments and fade in page-significance"
      animationComplete = false;
      tl.to(iconicMomentsPage, { opacity: 0, display: "none", duration: 1 });
      tl.set(legacyPage, { opacity: 0, display: "flex" });
      tl.to(legacyPage, {
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true; // Set animationComplete to true to allow the next animation to start when the user scrolls again
        },
      });
      currentPage = "page-significance";
    } else if (currentPage === "page-significance" && animationComplete) {
      // Fade out page-significance and fade in page-two-thousands"
      animationComplete = false;
      tl.to(legacyPage, { opacity: 0, display: "none", duration: 1 });
      tl.set(twoThousandsPage, { opacity: 0, display: "flex" });
      tl.to(twoThousandsPage, {
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-two-thousands";
    } else if (currentPage === "page-two-thousands" && animationComplete) {
      // Fade out page-two-thousands and fade in page-nineties"
      animationComplete = false;
      tl.to(twoThousandsPage, { opacity: 0, display: "none", duration: 1 });
      tl.set(ninetiesPage, { opacity: 0, display: "flex" });
      tl.to(ninetiesPage, {
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-nineties";
    } else if (currentPage === "page-nineties" && animationComplete) {
      // Fade out page-nineties and fade in page-eighties"
      animationComplete = false;
      tl.to(ninetiesPage, { opacity: 0, display: "none", duration: 1 });
      tl.set(eightiesPage, { opacity: 0, display: "flex" });
      tl.to(eightiesPage, {
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-eighties";
    } else if (currentPage === "page-eighties" && animationComplete) {
      // Fade out page-eighties and fade in page-seventies"
      animationComplete = false;
      tl.to(eightiesPage, { opacity: 0, display: "none", duration: 1 });
      tl.set(seventiesPage, { opacity: 0, display: "flex" });
      tl.to(seventiesPage, {
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-seventies";
    } else if (currentPage === "page-seventies" && animationComplete) {
      // Fade out page-seventies and fade in page-sixties"
      animationComplete = false;
      tl.to(seventiesPage, { opacity: 0, display: "none", duration: 1 });
      tl.set(sixtiesPage, { opacity: 0, display: "flex" });
      tl.to(sixtiesPage, {
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-sixties";
    } else if (currentPage === "page-sixties" && animationComplete) {
      // Fade out page-sixties and fade in page-fifties"
      animationComplete = false;
      tl.to(sixtiesPage, { opacity: 0, display: "none", duration: 1 });
      tl.set(fiftiesPage, { opacity: 0, display: "flex" });
      tl.to(fiftiesPage, {
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-fifties";
    } else if (currentPage === "page-fifties" && animationComplete) {
      // Fade out page-fifties and fade in page-forties"
      animationComplete = false;
      tl.to(fiftiesPage, { opacity: 0, display: "none", duration: 1 });
      tl.set(fortiesPage, { opacity: 0, display: "flex" });
      tl.to(fortiesPage, {
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-forties";
    } else if (currentPage === "page-forties" && animationComplete) {
      // Fade out page-forties and fade in page-thirties"
      animationComplete = false;
      tl.to(fortiesPage, { opacity: 0, display: "none", duration: 1 });
      tl.set(thirtiesPage, { opacity: 0, display: "flex" });
      tl.to(thirtiesPage, {
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-thirties";
    } else if (currentPage === "page-thirties" && animationComplete) {
      // Fade out page-thirties and fade in page-twenties"
      animationComplete = false;
      tl.to(thirtiesPage, { opacity: 0, display: "none", duration: 1 });
      tl.set(historyStartPage, { opacity: 0, display: "flex" });
      tl.to(historyStartPage, {
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-twenties";
    } else if (currentPage === "page-twenties" && animationComplete) {
      // Fade out page-twenties and fade in page-landing"
      animationComplete = false;
      tl.to(historyStartPage, { opacity: 0, display: "none", duration: 1 });
      tl.set(landingPage, { opacity: 0, display: "block" });
      tl.to(landingPage, {
        opacity: 1,
        duration: 1,
        onComplete: function () {
          animationComplete = true;
        },
      });
      currentPage = "page-landing";
    }
  }
});

//////////////////////////////// NAVIGATION BAR CLICK TRANSITIONS ////////////////////////////////

// Create arrays from the nav links, primary-pages and secondary-pages
const navLinks = Array.from(document.querySelectorAll("#nav a"));
const pages = Array.from(document.querySelectorAll(".page"));
const secondaryPages = document.querySelectorAll(".secondary-page"); // targeting secondaryPages separately to not disrupt the index numbers of the pages Array

// For each nav link add an event listener for when the user clicks, and then perform function when they do
navLinks.forEach((link, index) => {
  link.addEventListener("click", function (e) {
    
    // Reset the animation state to ensure the scroll animations above can still function
    animationComplete = true;

    // Get the target page
    const targetId = pages[index].id; // set the targetID as the clicked on ID from the pages array.

    // If the currentPage = targetID then do nothing
    if (currentPage === targetId) {
      return;
    }

    // Get the actual element with the ID of from targetId
    const targetPage = document.getElementById(targetId);

    // Animate the transition with GSAP
    const tl = gsap.timeline();
    tl.to(pages, { opacity: 0, duration: 1 }); // fading out all the pages to opacity 0
    tl.to(secondaryPages, { opacity: 0, duration: 1, delay: -1 }); // happens at the same time as the primary pages fade
    tl.set(secondaryPages, { display: "none" });
    tl.set(pages, { display: "none" }); // set all the pages to display none
    tl.set(targetPage, { display: "flex" });
    tl.to(targetPage, { opacity: 1, duration: 1 }); // only set the target page as visible

    // Update the current page ID
    currentPage = targetId;
  });
});

//////////////////////////////// HISTORY PAGE CLICK TO REVEAL MORE INFORMATION ////////////////////////////////

// Create Arrays from the primary history pages, and the secondary history pages
const primaryHistory = Array.from(
  document.querySelectorAll(".primary-history")
);
const secondaryHistory = Array.from(
  document.querySelectorAll(".secondary-history")
);

// For each of the primaryHistory pages, listen for a click anywhere on the div and then perform the function
primaryHistory.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    // Get the target page
    const targetId = secondaryHistory[index].id; // set the targetID as the clicked on ID from the secondaryHistory array.
    const targetPage = document.getElementById(targetId); // get the actual element with that ID

    // Animate the transition with GSAP
    const tl = gsap.timeline();
    tl.to(primaryHistory, { opacity: 0, duration: 1 }); // fading out all the primaryHistory pages to opacity 0
    tl.set(primaryHistory, { display: "none" }); // set all the primaryHistory pages to display none
    tl.set(targetPage, { display: "flex", opacity: 0 });
    tl.to(targetPage, { opacity: 1, duration: 1 }); // only set the target page as visible

    // Update current page ID
    currentPage = targetId;
  });
});

// (to go back) For each of the secondaryHistory pages, listen for a click anywhere on the div and then perform the function
secondaryHistory.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    // Get the target page
    const targetId = primaryHistory[index].id; // set the targetID as the clicked on ID from the primaryHistory array.
    const targetPage = document.getElementById(targetId); // get the actual element with that ID

    // Animate the transition with GSAP
    const tl = gsap.timeline();
    tl.to(secondaryHistory, { opacity: 0, duration: 1 }); // fading out all the secondaryHistory pages to opacity 0
    tl.set(secondaryHistory, { display: "none" }); // set all the secondaryHistory pages to display none
    tl.set(targetPage, { display: "flex" });
    tl.to(targetPage, { opacity: 1, duration: 1 }); // only set the target page as visible

    // Update current page ID
    currentPage = targetId;
  });
});

//////////////////////////////// LEGACY PAGE ANIMATION ////////////////////////////////

// Set the constant for the box which users can hover over
const hotspotHitbox = document.querySelectorAll(".hotspot-hitbox");

// For each of these hitboxes (4 on the page), perform the blur function
hotspotHitbox.forEach((hotspot) => {
  // Perform the remove blur function on a mouse over event
  hotspot.addEventListener("mouseover", function () {
    const boldHeading = this.querySelector(".bold-heading");
    gsap.to(boldHeading, { filter: "blur(0px)", duration: 0.8 }); // Smoothly transition to no blur
  });

  // Perform the add blur function on a mouse out event
  hotspot.addEventListener("mouseout", function () {
    const boldHeading = this.querySelector(".bold-heading");
    gsap.to(boldHeading, { filter: "blur(1.5px)", duration: 0.8 }); // Smoothly transition to blur
  });
});

// Set variable for if the legacyMore page is set to display:flex or not (false by default)
let LegacyMoreVisible = false;

// For each hotspot, on a click (this code is unfinished)
hotspotHitbox.forEach((hotspot) => {
  // Initiate transition with click to go to more info, and create a GSAP timeline to animate this transition
  hotspot.addEventListener("click", function () {
    const tl = new TimelineMax({});
    // strict equality operater to ensure that the timeline only starts if legacyMore is currently not displayed
    if (LegacyMoreVisible === false) {
      tl.to(legacyMore, { opacity: 0 }); // Fade out legacyMore if it's visible
      tl.set(legacyMore, { display: "flex" });
      tl.to(legacyMore, { opacity: 1, duration: 1 });
      LegacyMoreVisible = true; // set legacyMoreVisible to true
    } else {
      tl.to(legacyMore, { opacity: 0, duration: 1 }); // Fade out legacyMore on a click if legacyMoreVisible is true
      tl.set(legacyMore, { display: "none" });
      LegacyMoreVisible = false; // set legacyMoreVisible to true
    }
  });
});

//////////////////////////////// ICONIC MOMENTS FUNCTIONS ////////////////////////////////

// Create array from all the images in the Shoelace UI carousel, and the intended hover text
const iconicImages = Array.from(document.querySelectorAll(".iconic-moment"));
const iconicImagesHover = Array.from(document.querySelectorAll(".iconic-moment h2")
);

// For each of the hover divs, hide them as the default
iconicImagesHover.forEach((info) => {
  info.style.display = "none";
});

// For each of the images in the carousel, listen for a mouseover event, and then perfoem the hover function
iconicImages.forEach((img, index) => {
  img.addEventListener("mouseover", function (e) {
    // Set the hover image as the corresponding indexed element in the hover array
    const hoverImage = iconicImagesHover[index];

    // Animate the transition with GSAP
    const tl = gsap.timeline();
    tl.to(iconicImages, { duration: 1 });
    tl.set(hoverImage, { display: "flex" });
    tl.to(hoverImage, { opacity: 1 });

    // Create mouseout event & animate with GSAP
    img.addEventListener("mouseout", function (e) {
      const tl = gsap.timeline();
      tl.to(iconicImagesHover, { opacity: 0, duration: 1 });
      tl.set(iconicImagesHover, { display: "none" });
      tl.to(iconicImages, { opacity: 1 });
    });
  });
});

//////////////////////////////// FOOTER FUNCTIONS ////////////////////////////////

// Function to transition back to the landing page when the user clicks the Shoelace UI button
function buttonFadeTransition() {
  const tl = gsap.timeline();
  tl.to(footerPage, { opacity: 0, display: "none", duration: 1 });
  tl.set(landingPage, { opacity: 0, display: "block" });
  tl.to(landingPage, { opacity: 1, duration: 1 });
}

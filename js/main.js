// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Add an event listener for the 'click' event on the icon element
icon.addEventListener('click', responsive_control);

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}

// Get the video element
var video = document.getElementById("myVideo");

// Get the button element
var btn = document.getElementById("myBtn");

// Add event listener for button click
btn.addEventListener("click", function() {
  // Check if the video is paused
  if (video.paused) {
    // If paused, play the video and change the button text to "Pause"
    video.play();
    btn.innerHTML = "Pause";
  } else {
    // If playing, pause the video and change the button text to "Play"
    video.pause();
    btn.innerHTML = "Play";
  }
});

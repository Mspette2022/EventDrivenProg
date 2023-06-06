// Get button element
const button = document.getElementById('btn');

// Get text input element
const textInput = document.getElementById('textInput');

// Get list element
const list = document.getElementById('list');

// Get color box element
const colorBox = document.getElementById('colorBox');

// Array of event-driven details
const eventDetails = [];

let timerInterval; // Variable to store the timer interval

// Function to handle button click event
function handleClickEvent() {
  // Check if the timer is already running
  if (timerInterval) {
    // Stop the timer
    clearInterval(timerInterval);
    timerInterval = null;
    
    // Add a new item to the event details array
    eventDetails.push('Timer stopped!');
    updateEventDetails();
  } else {
    // Start the timer
    let seconds = 0;
    timerInterval = setInterval(() => {
      seconds++;
      updateTimer(seconds);
    }, 1000);
    
    // Add a new item to the event details array
    eventDetails.push('Timer started!');
    updateEventDetails();
  }
}

// Function to handle key press event
function handleKeyPressEvent(event) {
  // Check if Enter key was pressed
  if (event.key === 'Enter') {
    // Add a new item to the event details array
    eventDetails.push('Enter key pressed!');
    updateEventDetails();
    
    // Clear the text input
    textInput.value = '';
  }
}

// Function to update the event details in the list
function updateEventDetails() {
  // Clear the list
  list.innerHTML = '';
  
  // Loop through the event details array and add items to the list
  for (let i = 0; i < eventDetails.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = eventDetails[i];
    list.appendChild(listItem);
  }
}

// Function to update the timer display
function updateTimer(seconds) {
  // Update the button text with the current timer value
  button.textContent = `Timer: ${seconds} sec`;
}

// Function to handle mouse over event
function handleMouseOverEvent() {
  // Change the background color of the button
  button.style.backgroundColor = 'red';
}

// Function to handle mouse out event
function handleMouseOutEvent() {
  // Change the background color of the button back to the default
  button.style.backgroundColor = '';
}

// Function to handle mouse move event
function handleMouseMoveEvent(event) {
  // Get the x and y coordinates of the mouse pointer
  const x = event.clientX;
  const y = event.clientY;
  
  // Update the background color of the color box based on mouse position
  const r = Math.floor((x / window.innerWidth) * 255);
  const g = Math.floor((y / window.innerHeight) * 255);
  const b = 100;
  colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Attach event listeners
button.addEventListener('click', handleClickEvent);
textInput.addEventListener('keypress', handleKeyPressEvent);
button.addEventListener('mouseover', handleMouseOverEvent);
button.addEventListener('mouseout', handleMouseOutEvent);
window.addEventListener('mousemove', handleMouseMoveEvent);


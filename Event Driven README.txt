So far, i have implemented the following event-driven features in the code:

Button Click Event: When the button is clicked, the handleClickEvent function is triggered.

Enter Key Press Event: When the Enter key is pressed in the text input field, the handleKeyPressEvent function is triggered.

Mouse Over Event: When the mouse is moved over the button, the handleMouseOverEvent function is triggered.

Mouse Out Event: When the mouse moves out of the button, the handleMouseOutEvent function is triggered.

Mouse Move Event:(The Color Changing moon) When the mouse is moved anywhere on the window, the handleMouseMoveEvent function is triggered.

In addition to these events, I have also implemented an event-driven feature for the timer functionality when the button is clicked. The timer starts when the button is clicked,
and it stops when the button is clicked again.

This makes a total of SIX event-driven features in the code.

The code also includes comments to explain each section and the purpose of specific lines of code.

There is a timer functionality to the button. When the button is clicked, the code checks if the timer is already running. 
If the timer is running, it stops the timer and adds a corresponding event detail to the array.
If the timer is not running, it starts the timer by incrementing a seconds variable and updating

I've introduced an array called eventDetails to store the event-driven details. Whenever the button is clicked or the Enter key is pressed, a new event detail is added to the array. 
The updateEventDetails function is responsible for updating the list by looping through the eventDetails array and creating list items for each event detail.

Now, each time an event occurs, the corresponding event detail is added to the array and the list is updated using the loop. 
This demonstrates an event-driven scenario where events trigger actions that are stored and displayed in an array as per the objectives in the assignment.
I wanted to demonstrate the usage of loops & arrays as the assignment stated "Make sure to include some of the other concepts that we have covered in this class, such as for loops and arrays"

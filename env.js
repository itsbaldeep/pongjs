// Set Canvas and Context
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// Set the height and width constants
const width = canvas.width;
const height = canvas.height;

// Set key booleans
let rightKey = 0;
let leftKey = 0;

// Set event listeners fo key events
document.addEventListener(
    'keydown', 
    // If keys are pressed
    e => (e.keyCode == 39 ? rightKey = 1 : (e.keyCode == 37 ? leftKey = 1 : 0)),
    false);
document.addEventListener(
    'keyup', 
    // If keys are released
    e => (e.keyCode == 39 ? rightKey = 0 : (e.keyCode == 37 ? leftKey = 0 : 0)), 
    false);

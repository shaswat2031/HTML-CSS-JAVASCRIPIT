// Add this JavaScript code to apply the animation to an element

// Function to apply the custom animation to an element
function applyCustomAnimation() {
    const elementToAnimate = document.querySelector('.custom-animation-element'); // Replace with your specific element selector
    elementToAnimate.style.animation = 'customAnimation 2s ease infinite'; // Replace 'customAnimation' with the name of your animation
}

// Call the function to apply the animation when the page loads
document.addEventListener('DOMContentLoaded', applyCustomAnimation);

// Function to apply Animation 1
function applyAnimation1() {
    const elementToAnimate = document.querySelector('.element-for-animation1'); // Replace with your specific element selector
    elementToAnimate.style.animation = 'animation1 2s ease infinite'; // Replace 'animation1' with the name of your animation
}

// Function to apply Animation 2
function applyAnimation2() {
    const elementToAnimate = document.querySelector('.element-for-animation2'); // Replace with your specific element selector
    elementToAnimate.style.animation = 'animation2 3s linear infinite'; // Replace 'animation2' with the name of your animation
}

// Function to apply Animation 3
function applyAnimation3() {
    const elementToAnimate = document.querySelector('.element-for-animation3'); // Replace with your specific element selector
    elementToAnimate.style.animation = 'animation3 2s ease-in-out infinite'; // Replace 'animation3' with the name of your animation
}

// Function to apply Animation 4
function applyAnimation4() {
    const elementToAnimate = document.querySelector('.element-for-animation4'); // Replace with your specific element selector
    elementToAnimate.style.animation = 'animation4 4s steps(10) infinite'; // Replace 'animation4' with the name of your animation
}

// Function to apply Animation 5
function applyAnimation5() {
    const elementToAnimate = document.querySelector('.element-for-animation5'); // Replace with your specific element selector
    elementToAnimate.style.animation = 'animation5 2s cubic-bezier(0.4, 0.3, 0.2, 1) infinite'; // Replace 'animation5' with the name of your animation
}

// Call the functions to apply the animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    applyAnimation1();
    applyAnimation2();
    applyAnimation3();
    applyAnimation4();
    applyAnimation5();
});

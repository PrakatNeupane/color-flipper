'use strict'

// user story
// user clicks the button
// color should change (randomly) of - bg, button, 
// color name should change


const button = document.getElementById('button');
const container = document.getElementById('container');
const colorName = document.getElementById('colorName');



const changeColor = () => {
    // should generate a random number
    // that number should make a class visible

    // create random number from 1 to 3
    const random = Math.floor(Math.random() * 3 + 1);
    console.log(random);

    switch (random) {
        case (1):
            container.classList.remove('container'); container.classList.add('class-red');
            break;
        case (2): container.classList.remove('container');
            container.classList.add('class-green');
            break;
        case (3): container.classList.remove('container');
            container.classList.add('class-blue');
            break;
    }

}
button.addEventListener('click', changeColor);
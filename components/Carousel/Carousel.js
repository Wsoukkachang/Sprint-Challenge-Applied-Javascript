/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

class Carousel {
    constructor(carElement){
        this.carElement = carElement;

        console.log(this.carElement);

        this.images = carElement.querySelectorAll('img'); //grab a reference to all of the images
        console.log(this.images);

        this.leftButton = carElement.querySelector('.left-button');
        console.log(this.leftButton);

        this.rightButton = carElement.querySelector('.right-button');
        console.log(this.rightButton);

        this.leftButton.addEventListener('click', leftButtonClicked);
        this.rightButton.addEventListener('click', rightButtonClicked);

    }

    leftButtonClicked(){
      console.log('left button clicked');
      this.carElement.classList.toggle('left-button');

    }

    rightButtonClicked(){
      console.log('right button clicked');
      this.carElement.classList.toggle('right-button');

    }
}

let carousel = document.querySelector('.carousel');

console.log(carousel);

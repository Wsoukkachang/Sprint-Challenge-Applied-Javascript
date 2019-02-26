/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

class Carousel {
  constructor(carElement){
      this.carElement = carElement;

      this.images = carElement.querySelectorAll('.carousel img'); // grab a reference to all of the images
      // console.log(this.images);

      this.currentIndex = 0; // set index to 0

      this.leftButton = carElement.querySelector('.left-button'); 

      this.rightButton = carElement.querySelector('.right-button');

      this.leftButton.addEventListener('click', () => {
        this.leftButtonClicked();
        console.log(this.currentIndex);
      });

      this.rightButton.addEventListener('click', () => {
        this.rightButtonClicked();
        console.log(this.currentIndex);
      });

  }

  leftButtonClicked(){
    console.log('left button clicked');
    this.images[this.currentIndex].style.display = 'none';

    // checks current index if it is greater than 0. If it is, then subtracts 1, sets display to block
    if(this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.images[this.currentIndex].style.display = 'block';
    }
    // change current index to 3
    else {
      this.currentIndex = 3;
      this.images[this.currentIndex].style.display = 'block';
    }
  }

  rightButtonClicked(){
    console.log('right button clicked');
    this.images[this.currentIndex].style.display = 'none';

    // checks current index if it is less than 3. If it is, then add 1, sets display to block
    if(this.currentIndex < 3) {
      this.currentIndex += 1;
      this.images[this.currentIndex].style.display = 'block';
    }
    // change current index to 0
    else {
      this.currentIndex = 0;
      this.images[this.currentIndex].style.display = 'block';
    }
  }

}

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);

// console.log(carousel);

carousel.images[0].style.display = 'block'; //sets picture on load
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
        console.log(this.carElement);

        this.images = carElement.querySelectorAll('img'); // grab a reference to all of the images
        console.log(this.images);

        this.currentIndex = 2; // set index to 2


        this.display = this.images[this.currentIndex];// display current img
        console.log(this.display);
        
        this.display.style.display = 'flex'; //display item

        this.leftButton = carElement.querySelector('.left-button');

        this.rightButton = carElement.querySelector('.right-button');

        this.leftButton.addEventListener('click', () => {
          this.leftButtonClicked();
          this.currentIndex--;
          return this.currentIndex;
        });

        this.rightButton.addEventListener('click', () => {
          this.rightButtonClicked();
          this.currentIndex++;
          return this.currentIndex;
        });

    }

    leftButtonClicked(){
      console.log('left button clicked');
      this.carElement.classList.toggle('left-button');
      console.log(this.currentIndex);
      
    }

    rightButtonClicked(){
      console.log('right button clicked');
      this.carElement.classList.toggle('right-button');
      console.log(this.currentIndex);
    }

    
}

let carousels = document.querySelectorAll('.carousel');

carousels.forEach( car => new Carousel(car));
const navSlide = () => {
    const burger = document.querySelector('.navbar-toggler');
    const navigation = document.querySelector('.menuBar');

    burger.addEventListener ('click', () => {
        navigation.classList.toggle('menuBar-active');
    });

}

navSlide();


// function myFunction() {
//     var x = document.querySelector(".menuBar");
//     if (x.className === ".menuBar") {
//       x.className += ".active";
//     } else {
//       x.className = ".menuBar";
//     }
//   } 

//   myFunction();
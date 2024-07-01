let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclik = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
 window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');

 }

//  typing text code


const typed = new Typed('.multiple-text', {
    strings: ['physical Fitness', 'Weigth Gain', 'Strength Training', 'Fat Lose', 'Weigth Lifting','Running' ],
    typeSpeed: 60,
    backSpeed:60,
    backDelay:1000,
    loop: true,
  });
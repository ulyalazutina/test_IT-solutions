import "../css/style.css";
import "../css/header.css";
import "../css/main.css";
import "../css/adaptivity.css";

const containerList = document.querySelector('.header__list');
const titleList = document.querySelector('.header__inner');
const burgerBtn = document.querySelector('.header__burger');
const navBox = document.querySelector('.header__nav-box');


titleList.addEventListener('click', () => {
    containerList.classList.toggle('hide');
})


burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('header__close');
    navBox.classList.toggle('header__nav-mobile');
})



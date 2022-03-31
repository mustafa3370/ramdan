//typing animation
const The_text = document.querySelector(".t-text");

const text_typing = ["إبداع", "تعاون", "مثابره", "إخاء"];
const typing_duration = 200;
const erasing_duration = 100;
const duration_between = 2000;
let typing_index = 0;
let char_index = 0;

function type() {
    if(char_index < text_typing[typing_index].length){
        The_text.textContent += text_typing[typing_index].charAt(char_index);
        char_index++;
        setTimeout(type, typing_duration);
    } else {
        setTimeout(erase, duration_between);
    }
}
function erase() {
    if(char_index > 0) {
        The_text.textContent = text_typing[typing_index].substring(0,char_index-1);
        char_index--;
        setTimeout(erase, erasing_duration);
    } else {
        typing_index++
        if(typing_index>=text_typing.length) {
             typing_index = 0;
        }
        setTimeout(type, typing_duration + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, duration_between + 250);
});

//the navbar
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("active", window.scrollY > 0)
})

//mobile menu
const burger_buttom = document.querySelector("#menu-buttom");
const menu = document.querySelector("#nav_list");

burger_buttom.addEventListener("click", () => {
    menu.classList.toggle("activate");
})















const target = document.querySelectorAll('[data-anime');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + 500;
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass);
        }
        
    })
}

window.addEventListener('scroll', function(){
    animeScroll();
})

const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closeButton = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    popup.style.display = "block";
})

closeButton.addEventListener('click', () => {
    popup.style.display = "none";
})

// Animation de mouvement

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//éléments
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const info = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Evenement d'Animation

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animation externe
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    // effet de sortie
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotate(45deg)';
    info.style.transform = 'translateZ(120px)';
    purchase.style.transform = 'translateZ(75px)';
    sizes.style.transform = 'translateZ(100px)';
})

//Animation interne
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // effet de retour
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotate(0deg)';
    info.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
});

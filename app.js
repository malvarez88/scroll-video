const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//SCENE
let scene = new ScrollMagic.Scene({
    duration: 25000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);


//VIDEO ANIMATION

let accelamount = 0.5;
let scrollops = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    
    video.currentTime = scrollpos;
    // video.currentTime = delay;
}, 33.3) 
//video rate - check it


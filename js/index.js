const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const containerJedi = document.querySelector("#containerJedi");


const tl2 = gsap.timeline({paused: true});

tl2.to([img1, img2, img3], { 
    duration: 0.5,
    delay: 0.5,
    onStart: function() {
        this.targets().forEach(function(target) {
        target.classList.add("reveal");
        });
    },
    onReverseComplete: function() {
        this.targets().forEach(function(target) {
        target.classList.remove("reveal");
        });
    }
    });

containerJedi.addEventListener("mouseenter", () => {
    tl2.play();
});

containerJedi.addEventListener("mouseleave", () => {
    tl2.reverse();
});


const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");
const containerSith = document.querySelector("#containerSith");

const tl3 = gsap.timeline({paused: true});

tl3.to([img4, img5, img6], { 
    duration: 0.5,
    delay: 0.5,
    onStart: function() {
        this.targets().forEach(function(target) {
        target.classList.add("reveal");
        });
    },
    onReverseComplete: function() {
        this.targets().forEach(function(target) {
        target.classList.remove("reveal");
        });
    }
    });

containerSith.addEventListener("mouseenter", () => {
    tl3.play();
});

containerSith.addEventListener("mouseleave", () => {
    tl3.reverse();
});
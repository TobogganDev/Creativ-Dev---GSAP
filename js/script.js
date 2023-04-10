gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to('.wrapper',5,{x:-window.innerWidth})
.to('.wrapper',5,{x:-window.innerWidth*2})
.to('.wrapper',5,{x:-window.innerWidth*3})

ScrollTrigger.create({
  animation: tl,
  trigger: '.wrapper',
  start: 'center center',
  end: '+=4000',
  scrub: true,
  pin: true,
});

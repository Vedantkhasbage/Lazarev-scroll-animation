

gsap.to(".move", {
    x: -500,
    duration: 30,
    repeat: -1,
    ease: "none"
});

function loadinganimation(){
    let tl = gsap.timeline();

tl.from(".page1", { 
    opacity: 0,
    delay:0.2, 
    duration: 1 
})

  tl.from(".page1", { 
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)", 
    duration: 1 ,
    borderRadius:"50px"
});

tl.from(".page1 div p h1",{
    opacity:0,
    stagger:1
})

}

loadinganimation();
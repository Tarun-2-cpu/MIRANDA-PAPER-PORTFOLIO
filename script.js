const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var tl = gsap.timeline();

tl.to("#page1",{
    y:"100vh",
    scale:0.4,
    duration:0
})



tl.to("#page1",{
    y:"25vh",
    duration:1,
    delay:1,
})

tl.to("#page1",{
    y:0,
    rotate:360,
    scale:1,
    duration:0.7
})
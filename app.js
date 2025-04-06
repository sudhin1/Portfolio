let t=gsap.timeline()
let t_duration=0.5;
t.from(".logo",{
    y:-50,
    opacity:0,
    duration:"0.3",
})
t.from(".nav_Part2 ul li",{
    y:-20,
    opacity:0,
    duration: t_duration,
    stagger: 0.4,
})

t.from("#heading",{
    x:-500,
    opacity:0,
    duration: t_duration,
    ease: "expo.out",
    stagger: 0.3,
})
t.from(".btn",{
    y:20,
    opacity:0,
    duration: t_duration,
    stagger: 0.2,
})
t.from(".social a",{
    y:20,
    opacity:0,
    duration: t_duration,
    stagger: 0.2,
})

gsap.to(".content_data",{
    scale:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".content_data",
        scroll:"body",
        start:"top 15%",
        end:"top -100%",
        scrub:"2",
    }
})

t.from(".content_image",{
    x:40,
    opacity:0,
    duration: t_duration,
})

gsap.from(".content_image", {
    scrollTrigger: {
        trigger: ".content_image",
        scroller: "body",
        start: "top 15%",
        end: "top -85%",
        scrub: "2",
        pin: true
    }
});

gsap.from("#page2_cnt",{
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#page2_cnt",
        scroller:"body",
        start: "top 100%",
        end: "top 50%",
        duration: 1,
        ease: "power2.out",
        scrub:true,
    }
})

gsap.from("#page3 .dis",{
    opacity:0,
    x:50,
    scale:0,
    scrollTrigger:{
        trigger:"#page3 .dis",
        scroll:"body",
        duration: 1,
        ease: "power2.out",
        start:"top 70%",
        end:"top 30%",
        scrub:true,
    }
})
gsap.from("#page3 .logo img",{
    opacity: 0,
    scale: 0.5,
    y:50,
    rotation: 180,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#page3 .logo img",
        scroller: "body",
        start: "top 75%",
        end: "top 50%",
        scrub: true,
    }
})


gsap.from("#page4 .prj",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page4 .prj1",
        scroller: "body",
        start: "top 60%",
        end: "top 35%",
        scrub: true,
    }
})

gsap.from("#page5 .contact_container",{
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#page5 .contact_container",
        scroller: "body",
        start: "top 75%",
        end: "top 45%",
        scrub: true,
    }
})



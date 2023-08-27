function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });





  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco();

// https://youtu.be/ddaY0rHqMxM


var crsr = document.querySelector("#cursor")
var main = document.querySelector("#main")
var logo = document.querySelector(".logo img")

main.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"

  logo.style.left = dets.x+"px"
  logo.style.top = dets.y+"px"
})



gsap.to("#page2 video", {
  y:40,
  opacity: 1,

  duration: 2,
  scrollTrigger: {
    trigger: "#page2 video",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "top 0%",




  }
})

gsap.from("#page3,h2 ,h3 ,h4, h5,h1",{
  y:70,
  duration:2,
  
  stagger:0.2,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    // markers:true,
    start:"top 60%",
    end:"top -10%",
    scrub:2
    
  }
})

gsap.to("#page8 h1",{
  transform:"translateX(-130%)",
  duration:2,
  scrollTrigger:{
      trigger:"#page8 h1",
      scroller:"#main",
      // markers:true,
      start:"top 0%",
      end:"top -100%",
      scrub:1,
      pin:true
  }
})



gsap.to(".page10 h4",{
  opacity:1,
  y:-60,
  duration:2,
 
  scrollTrigger:{
    trigger:".page10 h4",
    scroller:"#main",
    markers:true,
    start:"top 70%",
    end:"top 10%",
    scrub:1


  }
})
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

var textWidth;
function updateMystyleWidth() {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    const textSpan = box.querySelector(".hello");
    const mystyle = box.querySelector(".mystyle");

    textWidth = textSpan.offsetWidth;
    mystyle.style.width = `${textWidth}px`;
  });
}

// Call the function when the page loads
window.addEventListener("load", updateMystyleWidth);

const menu = document.querySelector("#menu");
const icon1 = document.querySelector("#nav>i");
const icon2 = document.querySelector("#menu>#navwo>i");
var im = document.querySelector("#menu>#navwo>img");
var head = document.querySelector("#head1");

icon1.addEventListener("click", function () {
  menu.style.marginLeft = "0px";
  gsap.to("#menu>#btm>.box>a", {
    marginTop: "0px",
    duration: 1.7,
  });
  gsap.to("#menu>#btm>.box>a", {
    opacity: 1,
    duration: 1,
  });
  gsap.to("#menu>.btm-fo>.bx5>.bx6", {
    marginTop: "0px",
    duration: 3.4,
  });
  gsap.to("#menu>.btm-fo>.bx5>.bx6", {
    opacity: 1,
    duration: 1,
  });
  gsap.to("#btm>#bx1>.mystyle", {
    opacity: 1,
    duration: 3,
  });
  gsap.to(".mystyle", {
    width: `${textWidth}px`,
    duration: 0.5,
    delay: 2,
  });
});

icon2.addEventListener("click", function () {
  menu.style.marginLeft = "-100vw";
  gsap.to("#menu>#btm>.box>a", {
    marginTop: "500px",
    duration: 0.3,
  });
  gsap.to("#menu>#btm>.box>a", {
    opacity: 0,
    duration: 0.5,
  });
  gsap.to("#menu>.btm-fo>.bx5>.bx6", {
    marginTop: "200px",
    duration: 0.7,
  });
  gsap.to("#menu>.btm-fo>.bx5>.bx6", {
    opacity: 0,
    duration: 0.5,
  });
  gsap.to(".mystyle", {
    width: "0px",
    duration: 0.1,
  });
});
im.addEventListener("click", function () {
  menu.style.marginLeft = "-100vw";
  gsap.to("#menu>#btm>.box>a", {
    marginTop: "500px",
    duration: 0.3,
  });
  gsap.to("#menu>#btm>.box>a", {
    opacity: 0,
    duration: 0.5,
  });
  gsap.to("#menu>.btm-fo>.bx5>.bx6", {
    marginTop: "200px",
    duration: 0.7,
  });
  gsap.to("#menu>.btm-fo>.bx5>.bx6", {
    opacity: 0,
    duration: 0.5,
  });
  gsap.to(".mystyle", {
    width: `${textWidth}px`,
    duration: 0.5,
    delay: 2,
  });
});

var hee = document.querySelector("#btm>#bx>a");
var heee = document.querySelector("#btm>#bx1>a");
var heeee = document.querySelector("#btm>#bx2>a");
var styl = document.querySelector("#btm>#bx>.mystyle");
var styll = document.querySelector("#btm>#bx1>.mystyle");
var stylll = document.querySelector("#btm>#bx2>.mystyle");
hee.addEventListener("click", function () {
  styll.style.opacity = 0;
  stylll.style.opacity = 0;
  styl.style.opacity = 1;
});
heee.addEventListener("click", function () {
  styl.style.opacity = 0;
  stylll.style.opacity = 0;
  styll.style.opacity = 1;
});
heeee.addEventListener("click", function () {
  styl.style.opacity = 0;
  styll.style.opacity = 0;
  stylll.style.opacity = 1;
});

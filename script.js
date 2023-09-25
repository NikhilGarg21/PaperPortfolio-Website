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

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
const scrollContainer = document.querySelector("#page1");
scrollContainer.scrollLeft =
  (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;

const cardContainers = document.querySelectorAll(".card-container");
const cardContainers1 = document.querySelectorAll(".card-container1");
const cardContainers2 = document.querySelectorAll(".card-container2");
const cardContainers3 = document.querySelectorAll(".card-container3");

cardContainers.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    gsap.to(container.querySelector(".cards"), {
      duration: 0.3,
      cursor: "pointer",
    });
    gsap.to(page8.querySelector(".card-container"), {
      backgroundColor: "#B7AEA3",
    });
    gsap.to(page8.querySelector(".card-container1"), { marginLeft: "600px" });
    gsap.to(page8.querySelector(".card-container2"), { marginLeft: "900px" });
    gsap.to(page8.querySelector(".card-container3"), { marginLeft: "1200px" });
    cardContainers.forEach((otherContainer) => {
      if (otherContainer !== container) {
        gsap.to(otherContainer.querySelector(".cards"), {
          duration: 0.3,
          width: "10%",
        });
      }
    });
  });
  container.addEventListener("mouseleave", () => {
    cardContainers.forEach((otherContainer) => {
      gsap.to(otherContainer.querySelector(".cards"), { duration: 0.3 });
      gsap.to(page8.querySelector(".card-container"), {
        backgroundColor: "#CDC6BE",
      });
      gsap.to(page8.querySelector(".card-container1"), { marginLeft: "290px" });
      gsap.to(page8.querySelector(".card-container2"), { marginLeft: "580px" });
      gsap.to(page8.querySelector(".card-container3"), { marginLeft: "820px" });
    });
  });
});
cardContainers1.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    gsap.to(container.querySelector(".cards-2"), {
      duration: 0.3,
      cursor: "pointer",
    });
    gsap.to(page8.querySelector(".card-container1"), {
      backgroundColor: "#B7AEA3",
    });
    gsap.to(page8.querySelector(".card-container2"), { marginLeft: "850px" });
    gsap.to(page8.querySelector(".card-container3"), { marginLeft: "1200px" });
  });
  container.addEventListener("mouseleave", () => {
    cardContainers.forEach((otherContainer) => {
      gsap.to(otherContainer.querySelector(".cards-2"), { duration: 0.3 });
      gsap.to(page8.querySelector(".card-container1"), {
        backgroundColor: "#CDC6BE",
      });
      gsap.to(page8.querySelector(".card-container1"), { marginLeft: "290px" });
      gsap.to(page8.querySelector(".card-container2"), { marginLeft: "580px" });
      gsap.to(page8.querySelector(".card-container3"), { marginLeft: "820px" });
    });
  });
});
cardContainers2.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    gsap.to(container.querySelector(".cards-3"), {
      duration: 0.3,
      cursor: "pointer",
    });
    gsap.to(page8.querySelector(".card-container2"), {
      backgroundColor: "#B7AEA3",
    });
    gsap.to(page8.querySelector(".card-container3"), { marginLeft: "1200px" });
  });
  container.addEventListener("mouseleave", () => {
    cardContainers.forEach((otherContainer) => {
      gsap.to(otherContainer.querySelector(".cards"), { duration: 0.3 });
      gsap.to(page8.querySelector(".card-container2"), {
        backgroundColor: "#CDC6BE",
      });
      gsap.to(page8.querySelector(".card-container1"), { marginLeft: "290px" });
      gsap.to(page8.querySelector(".card-container2"), { marginLeft: "580px" });
      gsap.to(page8.querySelector(".card-container3"), { marginLeft: "820px" });
    });
  });
});

cardContainers3.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    gsap.to(container.querySelector(".cards-4"), {
      duration: 0.3,
      cursor: "pointer",
    });
    gsap.to(page8.querySelector(".card-container3"), {
      backgroundColor: "#B7AEA3",
    });
  });
  container.addEventListener("mouseleave", () => {
    cardContainers.forEach((otherContainer) => {
      gsap.to(otherContainer.querySelector(".cards-4"), { duration: 0.3 });
      gsap.to(page8.querySelector(".card-container3"), {
        backgroundColor: "#CDC6BE",
      });
    });
  });
});
var t1 = gsap.timeline();
t1.to("#main", {
  backgroundColor: "#1d1d1b",
});
t1.to(".page0", {
  y: "100vh",
  scale: 0.4,
  duration: 0.1,
});
t1.to(".page0", {
  y: "-80vh",
  duration: 2,
  delay: 1,
});
t1.to(".page0", {
  y: "0vh",
  rotate: -360,
  scale: 1,
  duration: 1,
});

const menu = document.querySelector("#menu");
const icon1 = document.querySelector(".page0>#nav>i");
const icon2 = document.querySelector("#menu>#nav>i");
var im = document.querySelector("#menu>#nav>img");
var head = document.querySelector("#head1");

icon1.addEventListener("click", function () {
  menu.style.marginTop = "0px";
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
  gsap.to("#btm>#bx>.mystyle", {
    opacity: 1,
    duration: 3,
  });
  gsap.to(".mystyle", {
    width: "400px",
    duration: 0.5,
    delay: 2,
  });
});

icon2.addEventListener("click", function () {
  menu.style.marginTop = "-100vh";
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
    width:"0px",
    duration: 0.1,
  });
});
im.addEventListener("click", function () {
  menu.style.marginTop = "-100vh";
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
    opacity: 0,
    duration: 0.1,
  });
  gsap.to(".mystyle", {
    width: "400px",
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
  menu.style.marginTop = "-100vh";
  styll.style.opacity = 0;
  stylll.style.opacity = 0;
  styl.style.opacity = 1;
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
    width:"0px",
    duration: 0.1,
  });
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

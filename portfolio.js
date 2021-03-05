const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});

navClose.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

// Scroll To 
const links = [...document.querySelectorAll('.scroll-link')];
links.map(link=>{
    link.addEventListener('click', e=>{
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);
        const el = document.getElementById(id);
        let position = el.offsetTop - navHeight ;

        window.scrollTo({
            top: position,
            left: 0,
        });

        navBar.classList.remove("show");
        menu.classList.remove("show");
        document.body.classList.remove("show");
    });
}); 
new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
}).type("Designer.", { delay: 500 }).pause(400).delete(10)
    .type("Freelancer.", { delay: 500 }).pause(400).delete(11)
    .type("Sketch Artist.", { delay: 500 }).pause(400).delete(10)
    .go();

new TypeIt("#type2", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
}).type("Designer.", { delay: 500 }).pause(400).delete(10)
    .type("Freelancer.", { delay: 500 }).pause(400).delete(11)
    .type("Sketch Artist.", { delay: 500 }).pause(400).delete(10)
    .go();

// Fix Navbar 
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
});

//      GSAP
gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 1.5, x: -45 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2, x: -50 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 2.5, x: -45 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3, y: -15 });
gsap.from(".nav-item", { opacity: 0, duration: 1, delay: 0.8, y: 30, stagger: 0.4 });
gsap.from(".icons span", { opacity: 0, duration: 1, delay: 3, x: 30, stagger: 0.3 });

// GlideJs (carousel Section)
const glide = document.querySelector(".glide");
        const config = {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            gap: 25,
            hoverpause: true,
            autoplay: 1900,
            animationDuration: 900,
            animationTimingFunc: "ease-in-out",
            breakpoints: {
                1085: {
                    perView : 2
                },
                967: {
                    perView : 2
                },

                768: {
                    perView : 1
                },
                528: {
                    perView : 1
                },
                380: {
                    perView : 1
                },

            }
        };
        new Glide(".glide", config).mount();

AOS.init();
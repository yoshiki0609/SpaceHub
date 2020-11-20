const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  speed: 1500,
  loop: true,
  spaceBetween: 40,
  autoplay: {
      delay: 2500,
  },
  slidesPerView: 1,
  breakpoints: {
  480: {
      slidesPerView: 2,
  },
  769: {
      slidesPerView: 3,
  }
}
  
})

const titles = document.querySelectorAll(".titles");
const items = document.querySelectorAll(".items");

const options = {
      rootMargin: "0px 0px -100px 0px",
    };

const up_in = function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("up-in");
      observer.unobserve(entry.target);
    } else {
    }
      });
    }
    const up = new IntersectionObserver(up_in, options);
    items.forEach(item => up.observe(item));



const right_in = function(entries, observer){
    entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("right-in");
      observer.unobserve(entry.target);
    } else {
    }
      });
    }
    const right = new IntersectionObserver(right_in,  options);
    titles.forEach(title => right.observe(title));
let slideshow = {
    delay: 2000,
    container: null,
    slides: [],
    current: 0,
    timer: null,
  
    start: function () {
      slideshow.container = document.querySelector(".slides");
  
      let all = slideshow.container.getElementsByTagName("img");
      if (all.length > 0) {
        for (let slide of all) {
          slideshow.slides.push({
            src: slide.src
          });
        }
        document.querySelector(".slide-left").addEventListener("click", slideshow.prev);
        document.querySelector(".slide-right").addEventListener("click", slideshow.next);
  
        slideshow.draw();
      }
    },
  
    draw: function () {
      let next = document.createElement("img");
      next.src = slideshow.slides[slideshow.current].src;
      slideshow.container.innerHTML = "";
      slideshow.container.appendChild(next);
  
      slideshow.timer = setTimeout(slideshow.next, slideshow.delay);
    },
  
    next: function () {
  
      if (slideshow.timer != null) {
        clearTimeout(slideshow.timer);
        slideshow.timer = null;
      }
  
      slideshow.current++;
  
      if (slideshow.current == slideshow.slides.length) {
        slideshow.current = 0;
      }
      slideshow.draw();
    },
  
    prev: function () {
  
      if (slideshow.timer != null) {
        clearTimeout(slideshow.timer);
        slideshow.timer = null;
      }
  
      slideshow.current--;
  
      if (slideshow.current < 0) {
        slideshow.current = slideshow.slides.length - 1;
      }
      slideshow.draw();
    }
  };
  
  window.addEventListener("load", slideshow.start);
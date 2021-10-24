const sliders = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const handleScroll = () => {
  sliders.forEach((slider) => {
    const slideHeight = window.innerHeight + window.scrollY - slider.height / 2;
    const imgBottom = slider.offsetTop + slider.height;
    const isShownBottomImg = slideHeight > slider.offsetTop;
    const isNotShownPastImg = window.scrollY < imgBottom;
    if (isShownBottomImg && isNotShownPastImg) {
      slider.classList.add('active');
    } else {
      slider.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', handleScroll);

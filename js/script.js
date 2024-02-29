window.addEventListener('scroll', function() {
    var banner = document.getElementById('banner');
    if (window.scrollY > 0) {
      banner.classList.add('smaller');
    } else {
      banner.classList.remove('smaller');
    }
  });
  
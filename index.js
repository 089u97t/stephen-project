const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

$(document).ready(function() {
    $('.hero-content').fadeIn(1500); // Fade in animation for the hero content
    $('.work-experience').slideDown(1500); // Slide down animation for the work experience section
});


window.addEventListener('resize', function() {
    var marqueeContainer = document.querySelector('.marquee-container');
    var marquee = document.querySelector('.marquee');
    marquee.style.width = marqueeContainer.offsetWidth + 'px';
  });

  const privacyPolicy = document.getElementById('privacy-policy');

// Pause animation when end of text is reached
privacyPolicy.addEventListener('animationiteration', () => {
  const computedStyle = window.getComputedStyle(privacyPolicy, '::after');
  if (computedStyle.width === '100%') {
    privacyPolicy.style.animationPlayState = 'paused';
  }
});

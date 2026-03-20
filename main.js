// Countdown Timer to March 21, 2026
let previousValues = {
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
};

const intervalId = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const targetDate = new Date('March 21, 2026 12:00:00').getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    ['days', 'hours', 'minutes', 'seconds'].forEach((t) => {
      document.querySelector(`[data-timer="${t}"]`).textContent = '0';
    });
    clearInterval(intervalId);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  updateWithAnimation('days', days);
  updateWithAnimation('hours', hours);
  updateWithAnimation('minutes', minutes);
  updateWithAnimation('seconds', seconds);
}

function updateWithAnimation(timer, newValue) {
  const element = document.querySelector(`[data-timer="${timer}"]`);

  if (previousValues[timer] !== newValue) {
    element.classList.add('flip');

    setTimeout(() => {
      element.textContent = newValue;
    }, 300);

    setTimeout(() => {
      element.classList.remove('flip');
    }, 600);

    previousValues[timer] = newValue;
  }
}
updateCountdown();

// sticky and mountains
const navbar = document.querySelector('.navbar');
const mountains = document.querySelector('.mountains');
const navOffset = navbar.offsetTop;
window.addEventListener('scroll', function () {
  const scroll = window.scrollY;

  // sticky nav
  if (window.scrollY >= navOffset) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  // mountain parallax
  mountains.style.transform = `translateY(${scroll * 0.3}px)`;
});

// only one faq open at a time
document.querySelectorAll('.faq-item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq-item').forEach((other) => {
        if (other !== item) {
          other.open = false;
        }
      });
    }
  });
});

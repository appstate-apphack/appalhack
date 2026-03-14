// Countdown Timer to March 12, 2026
let previousValues = {
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
};

function updateCountdown() {
  const targetDate = new Date('March 21, 2026 00:00:00').getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.querySelector('[data-timer="days"]').textContent = '0';
    document.querySelector('[data-timer="hours"]').textContent = '0';
    document.querySelector('[data-timer="minutes"]').textContent = '0';
    document.querySelector('[data-timer="seconds"]').textContent = '0';
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
setInterval(updateCountdown, 1000);
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

// hide other input field unless selected
const noAllergiesRadio = document.getElementById('noAllergies');
const otherAllergiesRadio = document.getElementById('otherAllergiesRadio');
const otherInput = document.getElementById('otherAllergiesText');
function toggleOtherInput() {
  if (otherAllergiesRadio.checked) {
    otherInput.style.display = 'inline-block';
    otherInput.required = true;
  } else {
    otherInput.style.display = 'none';
    otherInput.value = '';
    otherInput.required = false;
  }
}
noAllergiesRadio.addEventListener('change', toggleOtherInput);
otherAllergiesRadio.addEventListener('change', toggleOtherInput);
toggleOtherInput();

// form submission handling
const userForm = document.getElementById('userForm');
const feedback = document.getElementById('formFeedback');
const PIPEDREAM_URL = '';
userForm.addEventListener('submit', function (e) {
  e.preventDefault();

  userForm.classList.add('is-submitting');
  feedback.textContent = 'Submitting…';
  feedback.className = 'loading';

  const fullNameInput = document.getElementById('fullName').value.trim();
  const emailInput = document.getElementById('email').value.trim();
  const discordInput = document.getElementById('discord').value.trim();
  const shirtSizeInput = document.getElementById('shirtSize').value;
  const honeypotInput = document.getElementById('company')?.value.trim();

  const yearSelected = document.querySelector('input[name="year"]:checked');
  const yearInput = yearSelected ? yearSelected.value : 'unspecified';

  let allergiesInput = 'none';
  let otherAllergiesInput = 'none';
  if (document.getElementById('otherAllergiesRadio').checked) {
    allergiesInput = 'yes';
    otherAllergiesInput = document.getElementById('otherAllergiesText').value.trim();
  }

  const payload = {
    fullName: fullNameInput,
    email: emailInput,
    discord: discordInput,
    shirtSize: shirtSizeInput,
    allergies: allergiesInput,
    otherAllergies: otherAllergiesInput,
    year: yearInput,
    honeypot: honeypotInput,
  };

  fetch(PIPEDREAM_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Request failed');
      feedback.textContent = 'Application submitted successfully!';
      feedback.className = 'success';
      userForm.reset();
      toggleOtherInput();
    })
    .catch((error) => {
      feedback.textContent = 'Submission failed. Please try again.';
      feedback.className = 'error';
      console.error(error);
    })
    .finally(() => {
      userForm.classList.remove('is-submitting');
    });
});

import './index.css';

const evaluatePopup = document.querySelector('.rate-me');
const submitBtn = evaluatePopup.querySelector('.rate-me__btn');
const thankYouCard = document.querySelector('.thank-you');
const thankYouResult = document.querySelector('.thank-you__result');

let selectedRating = null;

function unselectAllCircles () {
  const circles = evaluatePopup.querySelectorAll('.rate-me__circle_mark, .rate-me__circle_highest-mark');
  circles.forEach(circle => {
    circle.classList.remove('rate-me__circle_clr_gray');
    circle.classList.remove('rate-me__circle_clr_orange');
  });
}

const disableBtn = (buttonElement) => {
  buttonElement.disabled = true;
  buttonElement.classList.add('rate-me__btn_disabled');
}

disableBtn(submitBtn);

const enableBtn = (buttonElement) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove('rate-me__btn_disabled');
}
evaluatePopup.addEventListener('click', e => {

  unselectAllCircles();

  if (e.target.classList.contains('rate-me__circle_mark')) {
    selectedRating = parseInt(e.target.textContent, 10);
    e.target.classList.add('rate-me__circle_clr_gray');

    enableBtn(submitBtn);

  } else if (e.target.classList.contains('rate-me__circle_highest-mark')) {
    selectedRating = parseInt(e.target.textContent, 10);
    e.target.classList.add('rate-me__circle_clr_orange');

    enableBtn(submitBtn);

  } else if (e.target !== submitBtn) {
    disableBtn(submitBtn);
  }
})

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  if (selectedRating === null) {
    console.log('No rating selected');
    return;
  }
  if (selectedRating > 0) {
    sendRating(selectedRating)
      .then(() => {
        thankYouResult.textContent = `You selected ${selectedRating} out of 5`;
        thankYouCard.style.display = 'flex';
        evaluatePopup.style.display = 'none';
      }).catch((err) => console.log(`Error: ${err}`));
  }
});

const config = {
  baseUrl: "http://localhost:3000/ratings",
  headers: {
    "Content-Type": "application/json",
  },
};
const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

function sendRating(mark) {
  return fetch(`${config.baseUrl}`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({mark}),
  })
    .then(onResponse)
}

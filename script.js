// const h1El = document.querySelector('h1')
// const questionSym = document.querySelector('.number')

// console.log(h1El)
// console.log(questionSym)

// h1El.textContent = 'Raqamni top!'
// h1El.style.color = 'green'

// questionSym.textContent = 15
// questionSym.style.backgroundColor = 'yellow'

const againBtnEl = document.querySelector(".again");
const checkBtnEl = document.querySelector(".check");
const numInputEl = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const questionMarkEl = document.querySelector(".number");

let score = 20;
let highscore = 0;
let playing = true;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber)

const raqamniTekshir = function () {
  const kiritilganRaqam = +numInputEl.value;
  // raqam kiritilmaganda
  if (!kiritilganRaqam) {
    messageEl.textContent = "Raqam kritilmagan...";
  }

  if (playing && kiritilganRaqam) {
    // to'g'ri raqam kiritilganda
    if (secretNumber === kiritilganRaqam) {
      messageEl.textContent = "Victory";
      document.body.style.backgroundColor = "#60b347";
      questionMarkEl.style.width = "25rem";
      score++;
      scoreEl.textContent = score;
      playing = false;
      if (score > highscore) {
        highscore = score;
        highScoreEl.textContent = highscore;
      }
    }
    // kichik raqam kiritilganda
    if (kiritilganRaqam < secretNumber && kiritilganRaqam > 0) {
      messageEl.textContent = "kichik son";
      score--;
      scoreEl.textContent = score;
    }
    // katta raqam kitilganda
    else if (kiritilganRaqam > secretNumber && kiritilganRaqam > 0) {
      messageEl.textContent = "katta son";
      score--;
      scoreEl.textContent = score;
    }
  }

  if (score < 1) {
    score = 0;
    playing = false;
    scoreEl.textContent = score;
    messageEl.textContent = "Siz yutqazdingiz!";
  }

  questionMarkEl.textContent = kiritilganRaqam;
  numInputEl.value = "";
};

function enterBtn(event) {
  if (event.key === "Enter") {
    raqamniTekshir();
  }
}

function escBtn(event) {
  if (event.keyCode === 27) {
    numInputEl.value = "";
  }
}

const resetHandler = function () {
  document.body.style.backgroundColor = "#222";
  questionMarkEl.textContent = "?";
  questionMarkEl.style.width = "15rem";
  messageEl.textContent = "Start guessing...";
  score = 20;
  highscore = 0;
  scoreEl.textContent = score;
  highScoreEl.textContent = highscore;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  playing = true;
  numInputEl.value = "";
  console.log(secretNumber);
};

checkBtnEl.addEventListener("click", raqamniTekshir);

againBtnEl.addEventListener("click", resetHandler);

document.addEventListener("keydown", enterBtn);

document.addEventListener("keydown", escBtn);
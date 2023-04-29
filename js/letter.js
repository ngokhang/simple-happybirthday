const usernameInp = localStorage.getItem("usernameInp");
const dobInp = localStorage.getItem("dobInp");
const username = localStorage.getItem("usernameInp");
const giftBox = document.querySelector(".gift");
const audio = document.querySelector("audio");
const btnClose = document.querySelector(".btn-close");
const congulation = document.querySelector(".congulation");
const text = document.createElement("p");
const yearOfBirth = dobInp.split("/").at(2);

giftBox.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  audio.play();
});

btnClose.addEventListener("click", function (e) {
  if (!audio.paused) {
    audio.currentTime = 0;
    audio.pause();
  }
});

const calcAge = (yearOfBirth) => {
  // return Number.parseInt(yearOfBirth);
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
};

text.innerText = `Chúc mừng sinh nhật của ${username}.
  Tròn ${calcAge(yearOfBirth)} tuổi roài, chúc mừng nhaaaaaa!!!`;
congulation.appendChild(text);

console.log(calcAge(yearOfBirth));

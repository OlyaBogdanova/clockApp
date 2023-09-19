const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggleEl.addEventListener("click", () => {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    toggleEl.innerText = "Light mode";
  } else {
    toggleEl.innerText = "Dark mode";
  }
});
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const dayNumber = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hours,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;
  const minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  timeEl.innerText = `${hours}:${minutesFormat}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${dayNumber}</span>`;
}

setTime();
setInterval(setTime, 1000);

const hourEle = document.getElementById('hour');
const minuteEle = document.getElementById('minute');
const secondEle = document.getElementById('second');

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hourEle.innerText = h;
  minuteEle.innerText = m;
  secondEle.innerText = s;

  setTimeout(() => {
    updateClock();
  });
}
updateClock();

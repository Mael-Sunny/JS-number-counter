









let count = 0;
let zero = 0;
let countEl = document.getElementsByClassName("counter")[0];
let saveEl = document.getElementById("history");

function increase() {
  count = count + 1;
  countEl.textContent = count;
}

function decrease() {
  if (count >= 1) {
  count = count - 1;
  countEl.textContent = count;
  }
}

function save() {
  saveEl.textContent += count + " - " ;
}

function clearCount() {
  count = count - count;
  countEl.textContent = count;
}

// CMPM 121 Smelly Code Activity (refactored, behavior preserved)

// ---- State ----
let count = 0;

// ---- Constants (replace magic strings) ----
const IDS = {
  inc: "increment",
  dec: "dec",
  reset: "reset",
  counter: "counter",
};
const HEADING_TEXT = "CMPM 121 Project";
const TITLE_PREFIX = "Clicked ";
const BG = { odd: "pink", even: "lightblue" };

// ---- Setup ----
function setup() {
  // Create UI
  document.body.innerHTML = `
    <h1>${HEADING_TEXT}</h1>
    <p>Counter: <span id="${IDS.counter}">0</span></p>
    <button id="${IDS.inc}">Click Me!</button>
    <button id="${IDS.dec}">Decrement</button>
    <button id="${IDS.reset}">Reset</button>
  `;

  // Grab elements
  const incBtn = document.getElementById(IDS.inc) as HTMLButtonElement;
  const decBtn = document.getElementById(IDS.dec) as HTMLButtonElement;
  const resetBtn = document.getElementById(IDS.reset) as HTMLButtonElement;
  const counterSpan = document.getElementById(IDS.counter) as HTMLSpanElement;

  // If anything is missing, stop early
  if (!incBtn || !decBtn || !resetBtn || !counterSpan) return;

  // Single render function (DRY the repeated UI updates)
  function render() {
    counterSpan.textContent = String(count);
    document.title = `${TITLE_PREFIX}${count}`;
    document.body.style.backgroundColor = count % 2 ? BG.odd : BG.even;
  }

  // Encapsulate updates to the counter
  function setCount(next: number) {
    count = next;
    render();
  }

  // Event handlers (now tiny)
  incBtn.addEventListener("click", () => setCount(count + 1));
  decBtn.addEventListener("click", () => setCount(count - 1));
  resetBtn.addEventListener("click", () => setCount(0));

  // Initial paint
  render();
}

function start() {
  setup();
}

start();

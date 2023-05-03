const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
let breathsLeft = 3;

// Watching for selected breaths from user
numberOfBreaths.addEventListener("change", () => {
  breathsLeft = numberOfBreaths.value;
  breathsText.innerText = breathsLeft;
});

// Grow / shrink circle
const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

// Breathing instructions
const breatheTextUpdate = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instructions.innerText = "Breathe in";
  setTimeout(() => {
    instructions.innerText = "Hold breath";
    setTimeout(() => {
      instructions.innerText = "Exhale breath slowly";
    }, 4000);
  }, 4000);
};

// Breathing app function
const breathingApp = () => {
  const breathingAnimation = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimation);
      instructions.innerText =
        "Breathing session is complete. Click 'Begin' to start another breathing session.";
      start.classList.remove("button-inactive");
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    growCircle();
    breatheTextUpdate();
  }, 12000);
};

// Start Breathing
start.addEventListener("click", () => {
  start.classList.add("button-inactive");
  instructions.innerText =
    "Relax yourself and get ready to start breathing session";
  setTimeout(() => {
    instructions.innerText = "Breathing is about to begin, get ready..";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breatheTextUpdate();
    }, 2000);
  }, 2000);
});

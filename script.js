//your JS co
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentStep = 1;

nextBtn.addEventListener('click', () => {
  if (currentStep < circles.length) {
    currentStep++;
    updateProgress();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    updateProgress();
  }
});

function updateProgress() {
  circles.forEach((circle, idx) => {
    if (idx < currentStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const progressPercent = ((currentStep - 1) / (circles.length - 1)) * 100;
  progress.style.width = progressPercent + '%';

  prevBtn.disabled = currentStep === 1;
  nextBtn.disabled = currentStep === circles.length;
}
de here. If required.

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(100);
  textSize(32);
  textAlign(CENTER, CENTER);
  text('test', width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// DOM 요소 준비된 후 Spline 씬 로딩 이벤트를 감지
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  const viewer = document.querySelector('spline-viewer');

  // 씬 로딩 완료시 이벤트 감지
  viewer.addEventListener('sceneLoad', () => {
    loadingScreen.style.display = 'none'; // 로딩화면 숨기기
  });
});
let loadingText = 'loading';

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  textAlign(CENTER, CENTER);
}

function draw() {
  clear();

  // Spline 씬이 아직 로드되지 않은 경우 로딩 화면 출력
  if (!window.splineLoaded) {
    background(0, 0, 255);
    const targetWidth = width * 0.95;
    const baseSize = 200;

    // 기본 크기로 텍스트를 측정한 후 너비 비율에 맞게 조정
    textSize(baseSize);
    const currentText = getLoadingText();
    const currentWidth = textWidth(currentText);
    const adjustedSize = currentWidth > 0 ? baseSize * (targetWidth / currentWidth) : baseSize;

    textSize(adjustedSize);
    text(currentText, width / 2, height / 2);
  }
}

function getLoadingText() {
  // frameCount를 기준으로 점(dot) 애니메이션 추가
  const dots = ' -  '.repeat(Math.floor(frameCount / 5) % 100);
  return dots + loadingText + dots;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
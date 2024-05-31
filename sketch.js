let imgDrwPrps = {aspect: 0, width: 0, height: 0, xOffset: 0, yOffset: 0};
let canvasAspectRatio = 0;
let numRandomRects; // 黄色线条上的矩形的数量
//audio
let song;
let fft;

let numBins = 128;
let smoothing = 0.8;

let button;
let shapes = [];

function preload() {
  //audio file from freesound https://freesound.org/people/multitonbits/sounds/383935/?
  song = loadSound('assets/GottaKeepOnMovin.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

//Audio
  fft = new p5.FFT(smoothing, numBins);
  song.connect(fft);

  button = createButton("Play/Pause");
  button.position((width - button.width) / 2, height - button.height - 2);
  button.mousePressed(play_pause);
  colorMode(HSB, 255);


  calculateCanvasProps();
  noLoop();
}


function draw(){

  background(240, 240, 240); // 背景颜色

   noStroke(); // 禁用边框边线

    //problems
  let spectrum = fft.analyze();
  let size = width / spectrum.length;
  
  // 计算相对位置和大小
 
  fill(173, 58, 47);
  //移动的红色小矩形
  for (let i = 0; i < 2; i++) {
    let randX = rect1X + random(imgDrwPrps.width * 0.045, imgDrwPrps.width * 0.822);
    let randY = rect1Y + random(0, rect1H - (imgDrwPrps.height * 0.02));
    let randW = imgDrwPrps.width * 0.02;
    let randH = imgDrwPrps.height * 0.02;
    rect(randX, randY, randW, randH);
  }

  for (let i = 0; i < 2; i++) {
    let randX = rect2X + random(imgDrwPrps.width * 0.135, imgDrwPrps.width * 0.517);
    let randY = rect2Y + random(0, rect2H - (imgDrwPrps.height * 0.02));
    let randW = imgDrwPrps.width * 0.02;
    let randH = imgDrwPrps.height * 0.02;
    rect(randX, randY, randW, randH);
  }

  for (let i = 0; i < 2; i++) {
    let randX = rect3X + random(imgDrwPrps.width * 0.597, imgDrwPrps.width * 0.822);
    let randY = rect3Y + random(0, rect3H - (imgDrwPrps.height * 0.02));
    let randW = imgDrwPrps.width * 0.02;
    let randH = imgDrwPrps.height * 0.02;
    rect(randX, randY, randW, randH);
  }

  for (let i = 0; i < 2; i++) {
    let randX = rect4X + random(imgDrwPrps.width * 0.245, imgDrwPrps.width * 0.387);
    let randY = rect4Y + random(0, rect4H - (imgDrwPrps.height * 0.02));
    let randW = imgDrwPrps.width * 0.02;
    let randH = imgDrwPrps.height * 0.02;
    rect(randX, randY, randW, randH);
  }

  for (let i = 0; i < 2; i++) {
    let randX = rect5X + random(imgDrwPrps.width * 0.245, imgDrwPrps.width * 0.517);
    let randY = rect5Y + random(0, rect5H - (imgDrwPrps.height * 0.02));
    let randW = imgDrwPrps.width * 0.02;
    let randH = imgDrwPrps.height * 0.02;
    rect(randX, randY, randW, randH);
  }

  for (let i = 0; i < 2; i++) {
    let randX = rect6X + random(imgDrwPrps.width * 0.597, imgDrwPrps.width * 0.822);
    let randY = rect6Y + random(0, rect6H - (imgDrwPrps.height * 0.02));
    let randW = imgDrwPrps.width * 0.02;
    let randH = imgDrwPrps.height * 0.02;
    rect(randX, randY, randW, randH);
  }

  for (let i = 0; i < 2; i++) {
    let randX = rect12X + random(imgDrwPrps.width * 0.165, imgDrwPrps.width * 0.437);
    let randY = rect12Y + random(0, rect12H - (imgDrwPrps.height * 0.02));
    let randW = imgDrwPrps.width * 0.02;
    let randH = imgDrwPrps.height * 0.02;
    rect(randX, randY, randW, randH);
  }

  for (let i = 0; i < 2; i++) {
    let randX = rect11X + random(imgDrwPrps.width * 0.597, imgDrwPrps.width * 0.822);
    let randY = rect11Y + random(0, rect11H - (imgDrwPrps.height * 0.02));
    let randW = imgDrwPrps.width * 0.02;
    let randH = imgDrwPrps.height * 0.02;
    rect(randX, randY, randW, randH);
  }

  for (let i = 0; i < 2; i++) {
    let randX = rect17X +random(0, rect17W - (imgDrwPrps.width * 0.02));
    let randY = rect17Y + random(imgDrwPrps.width * 0.18, imgDrwPrps.width * 0.33);
    let randW = imgDrwPrps.width * 0.02;
    let randH = imgDrwPrps.height * 0.02;
    rect(randX, randY, randW, randH);
  }

  fill(75, 107, 186); // 蓝色
 

  //移动的蓝色矩形
  rect(rect111X, rect111Y, rect111W, rect111);

  for (let i = 0; i < spectrum.length; i++) {
    // 设置矩形的颜色基于频率
    fill(map(i, 0, spectrum.length, 0, 255), 255, 255); 
    
    // 设置矩形的位置
    let x = map(i, 0, spectrum.length, 0, width);
    let y = map(spectrum[i], 0, 255, height, 0);
    
    // 设置矩形的宽度和高度
    //let size = 10; // 可以根据需要调整矩形的大小
    let rectHeight = height - y; // 矩形的高度根据频谱值动态变化
    
    // 画矩形
    rect(x, y, size, rectHeight);



    for (let i = 0; i < 2; i++) {
      let randX = rect4X + random(imgDrwPrps.width * 0.597, imgDrwPrps.width * 0.822);
      let randY = rect4Y + random(0, rect4H - (imgDrwPrps.height * 0.02));
      let randW = imgDrwPrps.width * 0.02;
      let randH = imgDrwPrps.height * 0.02;
      rect(randX, randY, randW, randH);
    }
  
    for (let i = 0; i < 2; i++) {
      let randX = rect6X + random(imgDrwPrps.width * 0.245, imgDrwPrps.width * 0.517);
      let randY = rect6Y + random(0, rect6H - (imgDrwPrps.height * 0.02));
      let randW = imgDrwPrps.width * 0.02;
      let randH = imgDrwPrps.height * 0.02;
      rect(randX, randY, randW, randH);
    }
  
    for (let i = 0; i < 2; i++) {
      let randX = rect9X + random(imgDrwPrps.width * 0.597, imgDrwPrps.width * 0.822);
      let randY = rect9Y + random(0, rect9H - (imgDrwPrps.height * 0.02));
      let randW = imgDrwPrps.width * 0.02;
      let randH = imgDrwPrps.height * 0.02;
      rect(randX, randY, randW, randH);
    }
  
    for (let i = 0; i < 2; i++) {
      let randX = rect19X +random(0, rect17W - (imgDrwPrps.width * 0.02));
      let randY = rect19Y + random(imgDrwPrps.width * 0.645, imgDrwPrps.width * 0.83);
      let randW = imgDrwPrps.width * 0.02;
      let randH = imgDrwPrps.height * 0.02;
      rect(randX, randY, randW, randH);
    }
  
    fill(219, 217, 213); // 灰色

    //移动的灰色小正方形
    for (let i = 0; i < 3; i++) {
      let randX = rect1X + random(imgDrwPrps.width * 0.045, imgDrwPrps.width * 0.822);
      let randY = rect1Y + random(0, rect1H - (imgDrwPrps.height * 0.02));
      let randW = imgDrwPrps.width * 0.02;
      let randH = imgDrwPrps.height * 0.02;
      rect(randX, randY, randW, randH);
    }
  
    for (let i = 0; i < 3; i++) {
      let randX = rect2X + random(imgDrwPrps.width * 0.135, imgDrwPrps.width * 0.517);
      let randY = rect2Y + random(0, rect2H - (imgDrwPrps.height * 0.02));
      let randW = imgDrwPrps.width * 0.02;
      let randH = imgDrwPrps.height * 0.02;
      rect(randX, randY, randW, randH);
    }
  
    for (let i = 0; i < 2; i++) {
      let randX = rect2X + random(imgDrwPrps.width * 0.597, imgDrwPrps.width * 0.822);
      let randY = rect2Y + random(0, rect2H - (imgDrwPrps.height * 0.02));
      let randW = imgDrwPrps.width * 0.02;
      let randH = imgDrwPrps.height * 0.02;
      rect(randX, randY, randW, randH);
    }
  
    for (let i = 0; i < 2; i++) {
      let randX = rect3X + random(imgDrwPrps.width * 0.245, imgDrwPrps.width * 0.517);
      let randY = rect3Y + random(0, rect3H - (imgDrwPrps.height * 0.02));
      let randW = imgDrwPrps.width * 0.02;
      let randH = imgDrwPrps.height * 0.02;
      rect(randX, randY, randW, randH);
    }
  
    for (let i = 0; i < 2; i++) {
      let randX = rect9X + random(imgDrwPrps.width * 0.245, imgDrwPrps.width * 0.517);
      let randY = rect9Y + random(0, rect9H - (imgDrwPrps.height * 0.02));
      let randW = imgDrwPrps.width * 0.02;
      let randH = imgDrwPrps.height * 0.02;
      rect(randX, randY, randW, randH);
    }
  
    for (let i = 0; i < 2; i++) {
      let randX = rect15X +random(0, rect15W - (imgDrwPrps.width * 0.02));
      let randY = rect15Y + random(imgDrwPrps.width * 0.044, imgDrwPrps.width * 0.33);
      let randW = imgDrwPrps.width * 0.02;
      let randH = imgDrwPrps.height * 0.02;
      rect(randX, randY, randW, randH);
    }
  
    for (let i = 0; i < 2; i++) {
      let randX = rect18X +random(0, rect18W - (imgDrwPrps.width * 0.02));
      let randY = rect18Y + random(imgDrwPrps.width * 0.18, imgDrwPrps.width * 0.33);
      let randW = imgDrwPrps.width * 0.02;
      let randH = imgDrwPrps.height * 0.02;
      rect(randX, randY, randW, randH);
    }
  
    for (let i = 0; i < 1; i++) {
      let randX = rect19X +random(0, rect17W - (imgDrwPrps.width * 0.02));
      let randY = rect19Y + random(imgDrwPrps.width * 0.18, imgDrwPrps.width * 0.33);
      let randW = imgDrwPrps.width * 0.02;
      let randH = imgDrwPrps.height * 0.02;
      rect(randX, randY, randW, randH);
    }
  
    fill(230, 207, 48); // 黄色,图层转换
    //固定的黄色矩形
    rect(rect104X, rect104Y, rect104W, rect104H);
    rect(rect105X, rect105Y, rect105W, rect105H);
  
    //移动的黄色矩形
    rect(rect110X, rect110Y, rect110W, rect110H);
  
    fill(75, 107, 186); // 蓝色，图层转换
    rect(rect114X, rect114Y, rect114W, rect114H);
  
    
    /*// 设置描边 这个是给图画描边的方法
    stroke(0); // 黑色描边
    strokeWeight(2); // 描边宽度
    noFill();
    rect(imgDrwPrps.xOffset, imgDrwPrps.yOffset, imgDrwPrps.width, imgDrwPrps.height);*/
  
    //两侧填充黑色的方法
    fill(0, 0, 0);
    rect(0, 0, imgDrwPrps.xOffset, height); // 左侧黑色填充
    rect(imgDrwPrps.xOffset + imgDrwPrps.width, 0, width - (imgDrwPrps.xOffset + imgDrwPrps.width), height); // 右侧黑色填充
  }
  }

function play_pause() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    //we can use song.play() here if we want the song to play once
    //In this case, we want the song to loop, so we call song.loop()
    song.loop();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 // calculateCanvasProps();
  redraw(); // 重新绘制画布
  loop();
  button.position((width - button.width) / 2, height - button.height - 2);
}

function calculateCanvasProps() {
  // Calculate the aspect ratio of the canvas
  canvasAspectRatio = windowWidth / windowHeight;
  
  // Set imgDrwPrps to match the window aspect ratio
  if (canvasAspectRatio >= 1) {
    // Landscape or square
    imgDrwPrps.width = windowHeight;
    imgDrwPrps.height = windowHeight;
    imgDrwPrps.xOffset = (windowWidth - windowHeight) / 2;
    imgDrwPrps.yOffset = 0;
  } else {
    // Portrait
    imgDrwPrps.width = windowWidth;
    imgDrwPrps.height = windowWidth;
    imgDrwPrps.xOffset = 0;
    imgDrwPrps.yOffset = (windowHeight - windowWidth) / 2;
  }
}

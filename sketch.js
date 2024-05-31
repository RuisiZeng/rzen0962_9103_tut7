let imgDrwPrps = {aspect: 0, width: 0, height: 0, xOffset: 0, yOffset: 0};
let canvasAspectRatio = 0;
let numRandomRects; // 黄色线条上的矩形的数量

let song; // audio file
let fft; // FFT object
let button;

function preload() {
  // Preloading audio files
  song = loadSound('assets/GottaKeepOnMovin.mp3'); // Replace with the path to your audio file
}

function setup() {
  // Creating a canvas that adapts to the window
  createCanvas(windowWidth, windowHeight);
  calculateCanvasProps(); // Calculating Canvas Properties
  noLoop(); // No drawing loop

  //Initialise the FFT object
  fft = new p5.FFT();

  // Create Button
  button = createButton("Play/Pause");
  positionButton(); // Setting the button position
    button.mousePressed(play_pause);
  
}

function draw() {
  background(240, 240, 240); // 背景颜色


  noStroke(); // 禁用边框边线

  // 计算相对位置和大小
  // Y轴开始从上到下的黄色线条矩形
  let rect1X = imgDrwPrps.xOffset;
  let rect1Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.024;
  let rect1W = imgDrwPrps.width;
  let rect1H = imgDrwPrps.height * 0.02;

  let rect2X = imgDrwPrps.xOffset;
  let rect2Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.16;
  let rect2W = imgDrwPrps.width;
  let rect2H = imgDrwPrps.height * 0.02;

  let rect3X = imgDrwPrps.xOffset;
  let rect3Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.35;
  let rect3W = imgDrwPrps.width;
  let rect3H = imgDrwPrps.height * 0.02;

  let rect4X = imgDrwPrps.xOffset;
  let rect4Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.43;
  let rect4W = imgDrwPrps.width;
  let rect4H = imgDrwPrps.height * 0.02;

  let rect5X = imgDrwPrps.xOffset;
  let rect5Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.56;
  let rect5W = imgDrwPrps.width;
  let rect5H = imgDrwPrps.height * 0.02;

  let rect6X = imgDrwPrps.xOffset;
  let rect6Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect6W = imgDrwPrps.width;
  let rect6H = imgDrwPrps.height * 0.02;

  let rect7X = imgDrwPrps.xOffset;
  let rect7Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.685;
  let rect7W = imgDrwPrps.width * 0.06;
  let rect7H = imgDrwPrps.height * 0.02;

  let rect8X = imgDrwPrps.xOffset;
  let rect8Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.775;
  let rect8W = imgDrwPrps.width * 0.06;
  let rect8H = imgDrwPrps.height * 0.02;

  let rect9X = imgDrwPrps.xOffset;
  let rect9Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.85;
  let rect9W = imgDrwPrps.width;
  let rect9H = imgDrwPrps.height * 0.02;

  let rect10X = imgDrwPrps.xOffset;
  let rect10Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.885;
  let rect10W = imgDrwPrps.width * 0.06;
  let rect10H = imgDrwPrps.height * 0.02;

  let rect11X = imgDrwPrps.xOffset;
  let rect11Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect11W = imgDrwPrps.width;
  let rect11H = imgDrwPrps.height * 0.02;

  let rect12X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.08;
  let rect12Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.725;
  let rect12W = imgDrwPrps.width * 0.457;
  let rect12H = imgDrwPrps.height * 0.02;

  let rect13X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.862;
  let rect13Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.805;
  let rect13W = imgDrwPrps.width * 0.1;
  let rect13H = imgDrwPrps.height * 0.02;

  

  // X轴上从左到右的黄色线条矩形
  let rect14X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.025;
  let rect14Y = imgDrwPrps.yOffset;
  let rect14W = imgDrwPrps.width * 0.02;
  let rect14H = imgDrwPrps.height * 0.35;

  let rect15X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect15Y = imgDrwPrps.yOffset;
  let rect15W = imgDrwPrps.width * 0.02;
  let rect15H = imgDrwPrps.height;

  let rect16X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect16Y = imgDrwPrps.yOffset;
  let rect16W = imgDrwPrps.width * 0.02;
  let rect16H = imgDrwPrps.height * 0.96;

  let rect17X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect17Y = imgDrwPrps.yOffset;
  let rect17W = imgDrwPrps.width * 0.02;
  let rect17H = imgDrwPrps.height;

  let rect18X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect18Y = imgDrwPrps.yOffset;
  let rect18W = imgDrwPrps.width * 0.02;
  let rect18H = imgDrwPrps.height;

  let rect19X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect19Y = imgDrwPrps.yOffset;
  let rect19W = imgDrwPrps.width * 0.02;
  let rect19H = imgDrwPrps.height;

  let rect20X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect20Y = imgDrwPrps.yOffset;
  let rect20W = imgDrwPrps.width * 0.02;
  let rect20H = imgDrwPrps.height;

  let rect21X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.877;
  let rect21Y = imgDrwPrps.yOffset;
  let rect21W = imgDrwPrps.width * 0.02;
  let rect21H = imgDrwPrps.height * 0.35;

  let rect22X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.922;
  let rect22Y = imgDrwPrps.yOffset;
  let rect22W = imgDrwPrps.width * 0.02;
  let rect22H = imgDrwPrps.height * 0.430;

  let rect23X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect23Y = imgDrwPrps.yOffset;
  let rect23W = imgDrwPrps.width * 0.02;
  let rect23H = imgDrwPrps.height;

  let rect24X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.647;
  let rect24Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.450;
  let rect24W = imgDrwPrps.width * 0.02;
  let rect24H = imgDrwPrps.height * 0.175;

  let rect25X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.922;
  let rect25Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.645;
  let rect25W = imgDrwPrps.width * 0.02;
  let rect25H = imgDrwPrps.height * 0.160;

  //固定的交叉处的正方形蓝色方块
  //第一行三个
  let rect26X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.025;
  let rect26Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.024;
  let rect26W = imgDrwPrps.width * 0.02;
  let rect26H = imgDrwPrps.height * 0.02;

  let rect27X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect27Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.024;
  let rect27W = imgDrwPrps.width * 0.02;
  let rect27H = imgDrwPrps.height * 0.02;

  let rect28X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.922;
  let rect28Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.024;
  let rect28W = imgDrwPrps.width * 0.02;
  let rect28H = imgDrwPrps.height * 0.02;

  //第二行四个
  let rect29X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect29Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.160;
  let rect29W = imgDrwPrps.width * 0.02;
  let rect29H = imgDrwPrps.height * 0.02;

  let rect30X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect30Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.160;
  let rect30W = imgDrwPrps.width * 0.02;
  let rect30H = imgDrwPrps.height * 0.02;

  let rect31X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect31Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.160;
  let rect31W = imgDrwPrps.width * 0.02;
  let rect31H = imgDrwPrps.height * 0.02;

  let rect32X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect32Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.160;
  let rect32W = imgDrwPrps.width * 0.02;
  let rect32H = imgDrwPrps.height * 0.02;

  //第三行四个
  let rect33X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect33Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect33W = imgDrwPrps.width * 0.02;
  let rect33H = imgDrwPrps.height * 0.02;

  let rect34X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect34Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect34W = imgDrwPrps.width * 0.02;
  let rect34H = imgDrwPrps.height * 0.02;

  let rect35X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect35Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect35W = imgDrwPrps.width * 0.02;
  let rect35H = imgDrwPrps.height * 0.02;

  let rect36X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect36Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect36W = imgDrwPrps.width * 0.02;
  let rect36H = imgDrwPrps.height * 0.02;

  //第四行两个
  let rect37X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect37Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect37W = imgDrwPrps.width * 0.02;
  let rect37H = imgDrwPrps.height * 0.02;

  let rect38X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect38Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect38W = imgDrwPrps.width * 0.02;
  let rect38H = imgDrwPrps.height * 0.02;

  //第五行三个
  let rect39X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect39Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect39W = imgDrwPrps.width * 0.02;
  let rect39H = imgDrwPrps.height * 0.02;

  let rect40X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect40Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect40W = imgDrwPrps.width * 0.02;
  let rect40H = imgDrwPrps.height * 0.02;

  let rect41X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect41Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect41W = imgDrwPrps.width * 0.02;
  let rect41H = imgDrwPrps.height * 0.02;

  //第六行两个
  let rect42X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect42Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect42W = imgDrwPrps.width * 0.02;
  let rect42H = imgDrwPrps.height * 0.02;

  let rect43X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect43Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect43W = imgDrwPrps.width * 0.02;
  let rect43H = imgDrwPrps.height * 0.02;

  //第八行一个
  let rect44X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect44Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.725;
  let rect44W = imgDrwPrps.width * 0.02;
  let rect44H = imgDrwPrps.height * 0.02;
  
  //第十行一个
  let rect45X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect45Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.805;
  let rect45W = imgDrwPrps.width * 0.02;
  let rect45H = imgDrwPrps.height * 0.02;

  //第十一行四个
  let rect46X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect46Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect46W = imgDrwPrps.width * 0.02;
  let rect46H = imgDrwPrps.height * 0.02;
  
  let rect47X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect47Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect47W = imgDrwPrps.width * 0.02;
  let rect47H = imgDrwPrps.height * 0.02;
  
  let rect48X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect48Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect48W = imgDrwPrps.width * 0.02;
  let rect48H = imgDrwPrps.height * 0.02;

  let rect49X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect49Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect49W = imgDrwPrps.width * 0.02;
  let rect49H = imgDrwPrps.height * 0.02;

  //第十三行三个
  let rect50X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect50Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect50W = imgDrwPrps.width * 0.02;
  let rect50H = imgDrwPrps.height * 0.02;
  
  let rect51X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect51Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect51W = imgDrwPrps.width * 0.02;
  let rect51H = imgDrwPrps.height * 0.02;

  let rect52X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect52Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect52W = imgDrwPrps.width * 0.02;
  let rect52H = imgDrwPrps.height * 0.02;


  //固定的交叉处的正方形红色方块
  //第二行两个个
  let rect53X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.025;
  let rect53Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.160;
  let rect53W = imgDrwPrps.width * 0.02;
  let rect53H = imgDrwPrps.height * 0.02;
  
  let rect54X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect54Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.160;
  let rect54W = imgDrwPrps.width * 0.02;
  let rect54H = imgDrwPrps.height * 0.02;

  //第三行三个
  let rect55X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.025;
  let rect55Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect55W = imgDrwPrps.width * 0.02;
  let rect55H = imgDrwPrps.height * 0.02;

  let rect56X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect56Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect56W = imgDrwPrps.width * 0.02;
  let rect56H = imgDrwPrps.height * 0.02;

  let rect57X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.877;
  let rect57Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect57W = imgDrwPrps.width * 0.02;
  let rect57H = imgDrwPrps.height * 0.02;

  //第四行四个
  let rect58X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect58Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect58W = imgDrwPrps.width * 0.02;
  let rect58H = imgDrwPrps.height * 0.02;

  let rect59X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect59Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect59W = imgDrwPrps.width * 0.02;
  let rect59H = imgDrwPrps.height * 0.02;

  let rect60X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.922;
  let rect60Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect60W = imgDrwPrps.width * 0.02;
  let rect60H = imgDrwPrps.height * 0.02;

  let rect61X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect61Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect61W = imgDrwPrps.width * 0.02;
  let rect61H = imgDrwPrps.height * 0.02;

  //第五行三个
  let rect62X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.647;
  let rect62Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect62W = imgDrwPrps.width * 0.02;
  let rect62H = imgDrwPrps.height * 0.02;
  
  let rect63X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect63Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect63W = imgDrwPrps.width * 0.02;
  let rect63H = imgDrwPrps.height * 0.02;
  
  let rect64X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect64Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect64W = imgDrwPrps.width * 0.02;
  let rect64H = imgDrwPrps.height * 0.02;

  //第六行三个
  let rect65X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect65Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect65W = imgDrwPrps.width * 0.02;
  let rect65H = imgDrwPrps.height * 0.02;
  
  let rect66X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect66Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect66W = imgDrwPrps.width * 0.02;
  let rect66H = imgDrwPrps.height * 0.02;
  
  let rect67X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect67Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect67W = imgDrwPrps.width * 0.02;
  let rect67H = imgDrwPrps.height * 0.02;

  //第七行一个
  let rect68X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect68Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.685;
  let rect68W = imgDrwPrps.width * 0.02;
  let rect68H = imgDrwPrps.height * 0.02;

  //第八行两个
  let rect69X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect69Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.725;
  let rect69W = imgDrwPrps.width * 0.02;
  let rect69H = imgDrwPrps.height * 0.02;

  let rect70X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect70Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.725;
  let rect70W = imgDrwPrps.width * 0.02;
  let rect70H = imgDrwPrps.height * 0.02;

  //第九行一个
  let rect71X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect71Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.775;
  let rect71W = imgDrwPrps.width * 0.02;
  let rect71H = imgDrwPrps.height * 0.02;

  //第十行三个
  let rect72X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect72Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect72W = imgDrwPrps.width * 0.02;
  let rect72H = imgDrwPrps.height * 0.02;
  
  let rect73X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect73Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect73W = imgDrwPrps.width * 0.02;
  let rect73H = imgDrwPrps.height * 0.02;

  let rect74X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect74Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect74W = imgDrwPrps.width * 0.02;
  let rect74H = imgDrwPrps.height * 0.02;

  //第十三行两个
  let rect75X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect75Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect75W = imgDrwPrps.width * 0.02;
  let rect75H = imgDrwPrps.height * 0.02;

  let rect76X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect76Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect76W = imgDrwPrps.width * 0.02;
  let rect76H = imgDrwPrps.height * 0.02;

  //固定的交叉处的正方形灰色方块
  //第一行一个
  let rect77X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.877;
  let rect77Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.024;
  let rect77W = imgDrwPrps.width * 0.02;
  let rect77H = imgDrwPrps.height * 0.02;

  //第三行三个
  let rect78X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect78Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect78W = imgDrwPrps.width * 0.02;
  let rect78H = imgDrwPrps.height * 0.02;

  let rect79X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.922;
  let rect79Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect79W = imgDrwPrps.width * 0.02;
  let rect79H = imgDrwPrps.height * 0.02;

  let rect80X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect80Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect80W = imgDrwPrps.width * 0.02;
  let rect80H = imgDrwPrps.height * 0.02;
  
  //第四行两个
  let rect81X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect81Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect81W = imgDrwPrps.width * 0.02;
  let rect81H = imgDrwPrps.height * 0.02;

  let rect82X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect82Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect82W = imgDrwPrps.width * 0.02;
  let rect82H = imgDrwPrps.height * 0.02;

  //第五行两个
  let rect83X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect83Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect83W = imgDrwPrps.width * 0.02;
  let rect83H = imgDrwPrps.height * 0.02;

  let rect84X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect84Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect84W = imgDrwPrps.width * 0.02;
  let rect84H = imgDrwPrps.height * 0.02;

  //第六行两个
  let rect85X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect85Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect85W = imgDrwPrps.width * 0.02;
  let rect85H = imgDrwPrps.height * 0.02;

  let rect86X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect86Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect86W = imgDrwPrps.width * 0.02;
  let rect86H = imgDrwPrps.height * 0.02;

  //第七行一个
  let rect87X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect87Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.725;
  let rect87W = imgDrwPrps.width * 0.02;
  let rect87H = imgDrwPrps.height * 0.02;

  //第十三行两个
  let rect88X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect88Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect88W = imgDrwPrps.width * 0.02;
  let rect88H = imgDrwPrps.height * 0.02;

  let rect89X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect89Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect89W = imgDrwPrps.width * 0.02;
  let rect89H = imgDrwPrps.height * 0.02;

  //固定的灰色矩形
  let rect106X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.165;
  let rect106Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.285;
  let rect106W = imgDrwPrps.width * 0.03;
  let rect106H = imgDrwPrps.height * 0.03;

  let rect107X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.17;
  let rect107Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.39;
  let rect107W = imgDrwPrps.width * 0.025;
  let rect107H = imgDrwPrps.height * 0.025;

  let rect108X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.170;
  let rect108Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.795;
  let rect108W = imgDrwPrps.width * 0.03;
  let rect108H = imgDrwPrps.height * 0.025;



  //移动的灰色矩形
  let rect115X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.407;
  let randomRect5 = random(0.37, 0.505);
  let rect115Y = imgDrwPrps.yOffset + imgDrwPrps.height * randomRect5;
  let rect115W = imgDrwPrps.width * 0.07;
  let rect115H = imgDrwPrps.height * 0.055;

  let randomRect6 = random(0.71, 0.73);
  let rect116X = imgDrwPrps.xOffset + imgDrwPrps.width * randomRect6;
  let randomRect7 = random(0.48, 0.51);
  let rect116Y = imgDrwPrps.yOffset + imgDrwPrps.height * randomRect7;
  let randomRect8 = random(0.025, 0.04);
  let rect116W = imgDrwPrps.width * randomRect8;
  let randomRect9 = random(0.025, 0.05);
  let rect116H = imgDrwPrps.height * randomRect9;

  //固定的红色矩形
  let rect90X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.155;
  let rect90Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.044;
  let rect90W = imgDrwPrps.width * 0.045;
  let rect90H = imgDrwPrps.height * 0.116;

  let rect91X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.135;
  let rect91Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.495;
  let rect91W = imgDrwPrps.width * 0.09;
  let rect91H = imgDrwPrps.height * 0.065;

  let rect92X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.862;
  let rect92Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.765;
  let rect92W = imgDrwPrps.width * 0.06;
  let rect92H = imgDrwPrps.height * 0.04;

  let rect93X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.697;
  let rect93Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.450;
  let rect93W = imgDrwPrps.width * 0.085;
  let rect93H = imgDrwPrps.height * 0.11;

  let rect95X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.652;
  let rect95Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.23;
  let rect95W = imgDrwPrps.width * 0.09;
  let rect95H = imgDrwPrps.height * 0.08;

  let rect109X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.135;
  let rect109Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.780;
  let rect109W = imgDrwPrps.width * 0.09;
  let rect109H = imgDrwPrps.height * 0.07;

  //移动的红色矩形
  let rect120X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.877;
  let randomRect11 = random(0.18, 0.29);
  let rect120Y = imgDrwPrps.yOffset + imgDrwPrps.height * randomRect11;
  let rect120W = imgDrwPrps.width * 0.065;
  let rect120H = imgDrwPrps.height * 0.06;

  let randomRect12 = random(0.245, 0.472);
  let rect121X = imgDrwPrps.xOffset + imgDrwPrps.width * randomRect12;
  let rect121Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.94;
  let rect121W = imgDrwPrps.width * 0.065;
  let rect121H = imgDrwPrps.height * 0.06;

  //固定的蓝色矩形
  let rect94X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.652;
  let rect94Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.180;
  let rect94W = imgDrwPrps.width * 0.09;
  let rect94H = imgDrwPrps.height * 0.170;

  let rect96X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.285;
  let rect96Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.475;
  let rect96W = imgDrwPrps.width * 0.065;
  let rect96H = imgDrwPrps.height * 0.085;

  let rect97X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.862;
  let rect97Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.665;
  let rect97W = imgDrwPrps.width * 0.06;
  let rect97H = imgDrwPrps.height * 0.065;

  //移动的蓝色矩形
  let rect111X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.08;
  let randomRect2 = random(0.18, 0.295);
  let rect111Y = imgDrwPrps.yOffset + imgDrwPrps.height * randomRect2;
  let rect111W = imgDrwPrps.width * 0.055;
  let rect111H = imgDrwPrps.height * 0.055;

  let rect113X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.897;
  let randomRect3 = random(0.044, 0.125);
  let rect113Y = imgDrwPrps.yOffset + imgDrwPrps.height * randomRect3;
  let rect113W = imgDrwPrps.width * 0.065;
  let rect113H = imgDrwPrps.height * 0.035;

  let randomRect4 = random(0.08, 0.482);
  let rect114X = imgDrwPrps.xOffset + imgDrwPrps.width * randomRect4;
  let rect114Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.67;
  let rect114W = imgDrwPrps.width * 0.055;
  let rect114H = imgDrwPrps.height * 0.055;

  //固定的黄色矩形
  let rect98X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.135;
  let rect98Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.265;
  let rect98W = imgDrwPrps.width * 0.09;
  let rect98H = imgDrwPrps.height * 0.06;
  
  let rect99X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.155;
  let rect99Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.370;
  let rect99W = imgDrwPrps.width * 0.046;
  let rect99H = imgDrwPrps.height * 0.06;

  let rect100X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.285;
  let rect100Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.45;
  let rect100W = imgDrwPrps.width * 0.065;
  let rect100H = imgDrwPrps.height * 0.025;

  let rect101X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.407;
  let rect101Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.370;
  let rect101W = imgDrwPrps.width * 0.07;
  let rect101H = imgDrwPrps.height * 0.19;

  let rect102X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.862;
  let rect102Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.48;
  let rect102W = imgDrwPrps.width * 0.1;
  let rect102H = imgDrwPrps.height * 0.05;

  let rect103X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.862;
  let rect103Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.72;
  let rect103W = imgDrwPrps.width * 0.06;
  let rect103H = imgDrwPrps.height * 0.045;

  let rect104X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.682;
  let rect104Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.260;
  let rect104W = imgDrwPrps.width * 0.045;
  let rect104H = imgDrwPrps.height * 0.035;

  let rect105X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.295;
  let rect105Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.5;
  let rect105W = imgDrwPrps.width * 0.045;
  let rect105H = imgDrwPrps.height * 0.035;
  
  //移动的黄色矩形
  let rect110X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.135;
  let randomRect1 = random(0.044, 0.13);
  let rect110Y = imgDrwPrps.yOffset + imgDrwPrps.height * randomRect1;
  let rect110W = imgDrwPrps.width * 0.09;
  let rect110H = imgDrwPrps.height * 0.03;

  //组合矩形移动
  let randomRect10 = random(0.245, 0.467);
  let rect117X = imgDrwPrps.xOffset + imgDrwPrps.width * randomRect10;
  let rect117Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.044;
  let rect117W = imgDrwPrps.width * 0.07;
  let rect117H = imgDrwPrps.height * 0.085;

  let rect118X = imgDrwPrps.xOffset + imgDrwPrps.width * randomRect10;
  let rect118Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.129;
  let rect118W = imgDrwPrps.width * 0.07;
  let rect118H = imgDrwPrps.height * 0.031;

  let rect119X = imgDrwPrps.xOffset + imgDrwPrps.width * (randomRect10 + 0.015);
  let rect119Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.069;
  let rect119W = imgDrwPrps.width * 0.04;
  let rect119H = imgDrwPrps.height * 0.035;




  //PART ONE

  // 绘制色块
  fill(75, 107, 186); // 蓝色，图层
  rect(rect113X, rect113Y, rect113W, rect113H);

  fill(230, 207, 48); // 黄色
  //横着的固定黄色矩形线条
  rect(rect1X, rect1Y, rect1W, rect1H);
  rect(rect2X, rect2Y, rect2W, rect2H);
  rect(rect3X, rect3Y, rect3W, rect3H);
  rect(rect4X, rect4Y, rect4W, rect4H);
  rect(rect5X, rect5Y, rect5W, rect5H);
  rect(rect6X, rect6Y, rect6W, rect6H);
  rect(rect7X, rect7Y, rect7W, rect7H);
  rect(rect8X, rect8Y, rect8W, rect8H);
  rect(rect9X, rect9Y, rect9W, rect9H);
  rect(rect10X, rect10Y, rect10W, rect10H);
  rect(rect11X, rect11Y, rect11W, rect11H);
  rect(rect12X, rect12Y, rect12W, rect12H);
  rect(rect13X, rect13Y, rect13W, rect13H);
  //竖着的固定黄色矩形线条
  rect(rect14X, rect14Y, rect14W, rect14H);
  rect(rect15X, rect15Y, rect15W, rect15H);
  rect(rect16X, rect16Y, rect16W, rect16H);
  rect(rect17X, rect17Y, rect17W, rect17H);
  rect(rect18X, rect18Y, rect18W, rect18H);
  rect(rect19X, rect19Y, rect19W, rect19H);
  rect(rect20X, rect20Y, rect20W, rect20H);
  rect(rect21X, rect21Y, rect21W, rect21H);
  rect(rect22X, rect22Y, rect22W, rect22H);
  rect(rect23X, rect23Y, rect23W, rect23H);
  rect(rect24X, rect24Y, rect24W, rect24H);
  rect(rect25X, rect25Y, rect25W, rect25H);

  //固定的黄色矩形
  rect(rect98X, rect98Y, rect98W, rect98H);
  rect(rect99X, rect99Y, rect99W, rect99H);
  rect(rect100X, rect100Y, rect100W, rect100H);
  rect(rect101X, rect101Y, rect101W, rect101H);
  rect(rect102X, rect102Y, rect102W, rect102H);
  rect(rect103X, rect103Y, rect103W, rect103H);







//PART 2

  fill(173, 58, 47); // 红色
  //第二行两个个
  rect(rect53X, rect53Y, rect53W, rect53H);
  rect(rect54X, rect54Y, rect54W, rect54H);

  //第三行三个
  rect(rect55X, rect55Y, rect55W, rect55H);
  rect(rect56X, rect56Y, rect56W, rect56H);
  rect(rect57X, rect57Y, rect57W, rect57H);

  //第四行四个
  rect(rect58X, rect58Y, rect58W, rect58H);
  rect(rect59X, rect59Y, rect59W, rect59H);
  rect(rect60X, rect60Y, rect60W, rect60H);
  rect(rect61X, rect61Y, rect61W, rect61H);

  //第五行三个
  rect(rect62X, rect62Y, rect62W, rect62H);
  rect(rect63X, rect63Y, rect63W, rect63H);
  rect(rect64X, rect64Y, rect64W, rect64H);

  //第六行三个
  rect(rect65X, rect65Y, rect65W, rect65H);
  rect(rect66X, rect66Y, rect66W, rect66H);
  rect(rect67X, rect67Y, rect67W, rect67H);

  //第六行三个
  rect(rect68X, rect68Y, rect68W, rect68H);

  //第七行两个
  rect(rect69X, rect69Y, rect69W, rect69H);
  rect(rect70X, rect70Y, rect70W, rect70H);

  //第七行一个
  rect(rect71X, rect71Y, rect71W, rect71H);

  //第十行三个
  rect(rect72X, rect72Y, rect72W, rect72H);
  rect(rect73X, rect73Y, rect73W, rect73H);
  rect(rect74X, rect74Y, rect74W, rect74H);

  //第十三行两个
  rect(rect75X, rect75Y, rect75W, rect75H);
  rect(rect76X, rect76Y, rect76W, rect76H);




  //PART 3




  //固定的红色矩形
  rect(rect90X, rect90Y, rect90W, rect90H);
  rect(rect91X, rect91Y, rect91W, rect91H);
  rect(rect92X, rect92Y, rect92W, rect92H);
  rect(rect93X, rect93Y, rect93W, rect93H);
  rect(rect109X, rect109Y, rect109W, rect109H);

  //移动的红色矩形
  rect(rect117X, rect117Y, rect117W, rect117H);
  rect(rect120X, rect120Y, rect120W, rect120H);
  rect(rect121X, rect121Y, rect121W, rect121H);

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


  //PART 4 

  fill(75, 107, 186); // 蓝色
  //第一行三个
  rect(rect26X, rect26Y, rect26W, rect26H);
  rect(rect27X, rect27Y, rect27W, rect27H);
  rect(rect28X, rect28Y, rect28W, rect28H);
  //第二行四个
  rect(rect29X, rect29Y, rect29W, rect29H);
  rect(rect30X, rect30Y, rect30W, rect30H);
  rect(rect31X, rect31Y, rect31W, rect31H);
  rect(rect32X, rect32Y, rect32W, rect32H);
  //第三行四个
  rect(rect33X, rect33Y, rect33W, rect33H);
  rect(rect34X, rect34Y, rect34W, rect34H);
  rect(rect35X, rect35Y, rect35W, rect35H);
  rect(rect36X, rect36Y, rect36W, rect36H);

  //第四行两个
  rect(rect37X, rect37Y, rect37W, rect37H);
  rect(rect38X, rect38Y, rect38W, rect38H);

  //第五行三个
  rect(rect39X, rect39Y, rect39W, rect39H);
  rect(rect40X, rect40Y, rect40W, rect40H);
  rect(rect41X, rect41Y, rect41W, rect41H);

  //第六行两个
  rect(rect42X, rect42Y, rect42W, rect42H);
  rect(rect43X, rect43Y, rect43W, rect43H);

  //第八行一个
  rect(rect44X, rect44Y, rect44W, rect44H);

  //第十行一个
  rect(rect45X, rect45Y, rect45W, rect45H);

  //第十一行四个
  rect(rect46X, rect46Y, rect46W, rect46H);
  rect(rect47X, rect47Y, rect47W, rect47H);
  rect(rect48X, rect48Y, rect48W, rect48H);
  rect(rect49X, rect49Y, rect49W, rect49H);

  //第十三行三个
  rect(rect50X, rect50Y, rect50W, rect50H);
  rect(rect51X, rect51Y, rect51W, rect51H);
  rect(rect52X, rect52Y, rect52W, rect52H);

  //固定的蓝色矩形
  rect(rect94X, rect94Y, rect94W, rect94H);
  rect(rect96X, rect96Y, rect96W, rect96H);
  rect(rect97X, rect97Y, rect97W, rect97H);

  //移动的蓝色矩形
  rect(rect111X, rect111Y, rect111W, rect111H);
  
  //移动的蓝色小矩形
  for (let i = 0; i < 3; i++) {
    let randX = rect1X + random(imgDrwPrps.width * 0.045, imgDrwPrps.width * 0.822);
    let randY = rect1Y + random(0, rect1H - (imgDrwPrps.height * 0.02));
    let randW = imgDrwPrps.width * 0.02;
    let randH = imgDrwPrps.height * 0.02;
    rect(randX, randY, randW, randH);
  }

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


  

  //PART 5

  fill(173, 58, 47); // 红色，图层转换
  rect(rect95X, rect95Y, rect95W, rect95H);

  fill(219, 217, 213); // 灰色
  //第一行一个
  rect(rect77X, rect77Y, rect77W, rect77H);

  //第三行三个
  rect(rect78X, rect78Y, rect78W, rect78H);
  rect(rect79X, rect79Y, rect79W, rect79H);
  rect(rect80X, rect80Y, rect80W, rect80H);

  //第四行两个
  rect(rect81X, rect81Y, rect81W, rect81H);
  rect(rect82X, rect82Y, rect82W, rect82H);

  //第五行两个
  rect(rect83X, rect83Y, rect83W, rect83H);
  rect(rect84X, rect84Y, rect84W, rect84H);

  //第六行两个
  rect(rect85X, rect85Y, rect85W, rect85H);
  rect(rect86X, rect86Y, rect86W, rect86H);

  //第八行一个
  rect(rect87X, rect87Y, rect87W, rect87H);

  //第十三行两个
  rect(rect88X, rect88Y, rect88W, rect88H);
  rect(rect89X, rect89Y, rect89W, rect89H);
  
  //固定的灰色矩形
  rect(rect106X, rect106Y, rect106W, rect106H);
  rect(rect107X, rect107Y, rect107W, rect107H);
  rect(rect108X, rect108Y, rect108W, rect108H);

  //移动的灰色矩形
  rect(rect115X, rect115Y, rect115W, rect115H);
  rect(rect116X, rect116Y, rect116W, rect116H);
  rect(rect118X, rect118Y, rect118W, rect118H);
  rect(rect119X, rect119Y, rect119W, rect119H);
  
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

function play_pause() {
  if (song.isPlaying()) {
    song.pause(); // Pause music playback
    noLoop(); // Pause the drawing loop
  } else {
    song.play(); // play music
    loop(); //  Starting the drawing cycle
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateCanvasProps();
  redraw(); // 重新绘制画布
}

function positionButton() {
  // Setting the button position
  button.position((windowWidth - button.size().width) / 2, windowHeight - button.size().height - 2);
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
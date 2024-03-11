function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }let cor;
  let posicaoHorizontal; // x
  let posicaoVertical; // y
  
  function setup() {
    createCanvas(1080, 920);
     background("yellow");
    cor = color(random(0,255), random(0,255), random(0,255));
    posicaoHorizontal = 200;
    posicaoVertical = 200;
  }
  
  
  function draw() {
   
    fill("purple");
    circle(posicaoHorizontal,posicaoVertical,30);
   
   
   
    if (mouseX < posicaoHorizontal){
      posicaoHorizontal =  posicaoHorizontal - 1;
    }
   
    if (mouseX > posicaoHorizontal){
      posicaoHorizontal =  posicaoHorizontal + 1;
    }
   
    if (mouseY < posicaoVertical){
      posicaoVertical--;
    }
     
    if (mouseY > posicaoVertical){
      posicaoVertical++;
    }
   
    if (mouseIsPressed){
      cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
    }
     
  }
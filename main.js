function preload() {

}

function setup() {
  //crear canvas con tamaño 640, 480
  canvas = createCanvas(640,480)
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 230, 150, 220, 200);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(50, 50, 80);
  //dibujar el resto de los circulos 
  circle(50, 4300, 80);
  circle(590, 50, 80);
  circle(590, 50, 80);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(90, 40, 460, 20);
  //dibujar el resto de los rectangulos
  rect(90, 420, 460, 20);
  rect(40, 40, 460, 300);
  rect(580, 90, 20, 300);
  
}

function take_snapshot(){  
  //crear la funcion save para guardar la imagen  
  save ('student_name.png');
}

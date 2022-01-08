function campDeFutebol() {
  noFill();
  stroke ("white");
  strokeWeight(2);
  
  //área retangular
  rect (30,25,540,350);
  rect(30, 100, 100, 200);
  rect(470, 100, 100, 200);
  rect(30, 140, 30, 130);
  rect(540, 140, 30, 130);
  rect(570, 155, 10, 105);
  rect(20, 155, 10, 105);
  
  //áreas circular
  circle (300, 200, 100);
  circle (300, 200, 3);
  circle (100, 200, 3);
  circle (500, 200, 3);
  
   // meio de campo
  line(width/2, height - 25, width/2, 28, height , 20); 

  // áreas do canto
  arc(30, 375, 40, 40, 3*PI/2, PI*2);
  arc(570, 25, 40, 40, HALF_PI, PI);
  arc(30, 25, 40, 40, 0, HALF_PI); 
  arc(570, 375, 40, 40, PI, PI + HALF_PI);
  arc(80, 200, 140, 160, 150, QUARTER_PI); 
  arc(520, 200, 140, 160, 40, PI + QUARTER_PI);
}
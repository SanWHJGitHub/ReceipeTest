

var angle = 0;

function setup()
{
	createCanvas(1200,800);

	background("black");
	
}

function draw()
{
 background("black");
  
  angle = angle+0.01;

  push();
  translate(100,100);
  rotate(angle);
  fill("red");
  rect(100,100,50,50);
  pop();
}

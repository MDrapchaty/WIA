/*
     Name: Drapchaty, Matthew	
     Date: 04/7/16
     Class & Section:  WIA-1604
     Comments: "HTML5 Canvas Drawing"
 */
window.onload = function(){

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
if(Modernizr.canvas){


	var can = document.getElementById("canvas1");
	var ctx = can.getContext("2d");


	ctx.strokeStyle = "black";
	ctx.lineWidth = 5;
	ctx.strokeRect(0,0,50,100);
	ctx.fillStyle = "blue";
	ctx.fillRect(0,0,50,100);

}else{
	ctx.fillText("Canvas is not supported!", 20, 60);
}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

if(Modernizr.canvas){

	var can = document.getElementById("canvas2");
	var ctx = can.getContext("2d");	


	ctx.fillStyle = "rgba(255,0,0,.5)";
	ctx.beginPath();
	ctx.arc(50,50,20,0 * Math.PI,2 * Math.PI);
	ctx.fill();


	ctx.strokeStyle = "black";
	ctx.beginPath();
	ctx.arc(50,50,30,0 * Math.PI,2 * Math.PI);
	ctx.stroke();

}else{
	ctx.fillText("Canvas is not supported!", 20, 60);
}



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
if(Modernizr.canvas){

	var can = document.getElementById("canvas3");
	var ctx = can.getContext("2d");	

	ctx.strokeStyle = "orange"
	ctx.lineWidth = 5;

	ctx.beginPath();
	ctx.moveTo(100,100);
	ctx.lineTo(125, 150);
	ctx.lineTo(175, 150);
	ctx.lineTo(140, 200);
	ctx.lineTo(160, 240);
	ctx.lineTo(100, 210);
	ctx.lineTo(75, 240);
	ctx.lineTo(75, 210);
	ctx.lineTo(50, 150);
	ctx.lineTo(75, 150);
	ctx.lineTo(100, 100);



	ctx.stroke();	

}else{
	ctx.fillText("Canvas is not supported!", 20, 60);
}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
if(Modernizr.canvas){

	var can = document.getElementById("canvas4");
	var ctx = can.getContext("2d");	

	
	ctx.strokeStyle = "purple";
	ctx.lineWidth = 5;

	ctx.beginPath();
	ctx.arc(200,200,100,0 * Math.PI, 1 * Math.PI, true);

	ctx.bezierCurveTo(125,175,125,175,170,200);
	ctx.bezierCurveTo(200,175,200,175,230,200);
	ctx.bezierCurveTo(275,175,275,175,300,200);



	ctx.stroke();	

}else{
	ctx.fillText("Canvas is not supported!", 20, 60);
}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
if(Modernizr.canvas){

	var can = document.getElementById("canvas5");
	var ctx = can.getContext("2d");	

	var string = "Hello World!";
	

	ctx.font = "25pt Georgia";
	ctx.fillStyle = "green";
	ctx.fillText(string, 40,40);

}else{
	ctx.fillText("Canvas is not supported!", 20, 60);
}
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

if(Modernizr.canvas){

	var can = document.getElementById("canvas6");
	var ctx = can.getContext("2d");	

	var srcImg = document.getElementById("img1");
	ctx.drawImage(srcImg, 0,0,srcImg.width,srcImg.height); // was unable to get this to work correctly without the last two paramaters the image kept defaulting back to original size 3000px x "xxxxx" even though I specified img size equal to canvas in html. Not sure why
	ctx.drawImage(srcImg, 0,0,srcImg.width/2,srcImg.height/2);
	ctx.drawImage(srcImg,srcImg.width/2,srcImg.height/2, 400, 300,0,0, 200, 200);



	
}else{
	ctx.fillText("Canvas is not supported!", 20, 60);
}

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
if(Modernizr.canvas){

	var can = document.getElementById("canvas7");
	var ctx = can.getContext("2d");	

	var string = "Umbrella";
	

	ctx.font = "25pt Georgia";
	ctx.fillStyle = "green";
	ctx.fillText(string, 40,40);
	
	ctx.strokeStyle = "purple";
	ctx.lineWidth = 5;

	ctx.beginPath();
	ctx.arc(200,200,100,0 * Math.PI, 1 * Math.PI, true);

	ctx.bezierCurveTo(125,175,125,175,170,200);
	ctx.bezierCurveTo(200,175,200,175,230,200);
	ctx.bezierCurveTo(275,175,275,175,300,200);

	ctx.fillStyle ="brown";
	ctx.fill();


	ctx.stroke();	

}else{
	ctx.fillText("Canvas is not supported!", 20, 60);
}

}
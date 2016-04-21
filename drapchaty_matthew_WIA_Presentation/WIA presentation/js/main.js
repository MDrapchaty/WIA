window.onload = function(){

	var canvas = document.getElementById("canvas1");

	var stage = new createjs.Stage(canvas);

	var ball = new createjs.Shape();

	ball.graphics.setStrokeStyle(5, "round", "round");
	ball.graphics.beginStroke("yellow");
	ball.graphics.beginFill("red");
	ball.graphics.drawCircle(0,0, 50);
	ball.graphics.endStroke();
	ball.graphics.endFill();


	
	ball.x = 100;
	ball.y = 100;


	createjs.Tween.get(ball, {loop:true}).to({x:ball.x, y:canvas.height -55}, 1500, createjs.Ease.bounceOut).wait(1000).call(blue).wait(1000).to({x:100, y:100}, 1500, createjs.Ease.bounceOut)
	.wait(1000).call(red).wait(1000);


	function blue(){
		ball.graphics.setStrokeStyle(5, "round", "round");
		ball.graphics.beginStroke("green");
		ball.graphics.beginFill("blue");
		ball.graphics.drawCircle(0,0, 50);
		ball.graphics.endStroke();
		ball.graphics.endFill();
	}

	function red(){
		ball.graphics.setStrokeStyle(5, "round", "round");
		ball.graphics.beginStroke("yellow");
		ball.graphics.beginFill("red");
		ball.graphics.drawCircle(0,0, 50);
		ball.graphics.endStroke();
		ball.graphics.endFill();
	}

	stage.addChild(ball);
	createjs.Ticker.addEventListener("tick", stage);
}
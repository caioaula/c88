
var canvas = new fabric.Canvas('mycanvas');

ball_y=0;
ball_x=0;
hole_y=400
hole_x=800


block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.FromURL("golf-h.png", function(img){
		ball_obj = img;
		ball.obj.scaleToWidth(50);
		ball.obj.scaleToHeight(50);
		ball.obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	})
	newImage();
}

function newImage()
{
	fabric.Image.FromURL("ball.png", function(img){
		ball_obj = img;
		ball.obj.scaleToWidth(50);
		ball.obj.scaleToHeight(50);
		ball.obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)

	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="você atingiu o obejetivo!!!";
		document.getElementById("mycanvas").style.bordercolor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	
		if(ball_y <=450)
		{
				ball_y = ball_y + block_image_height;
				console.log("altura da imagem do bloco t =  " + block_image_height);
				console.log("quando a tecla direcional cima é pressionada, X = " + ball_x + ", Y = "+ball_y);
				canvas.remove(ball.obj);
				new_image();
	}

	function down()
	{
		if(ball_y <=450)
		{
				ball_y = ball_y + block_image_height;
				console.log("altura da imagem do bloco t =  " + block_image_height);
				console.log("quando a tecla direcional baixo é pressionada, X = " + ball_x + ", Y = "+ball_y);
				canvas.remove(ball.obj);
				new_image();
		}
	}

	function left()
	
		if(ball_X >5)
		{
			if(ball_y <=450)
			{
					ball_y = ball_y + block_image_height;
					console.log("altura da imagem do bloco t =  " + block_image_height);
					console.log("quando a tecla direcional esquerda é pressionada, X = " + ball_x + ", Y = "+ball_y);
					canvas.remove(ball.obj);
					new_image();
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			if(ball_y <=450)
		{
				ball_y = ball_y + block_image_height;
				console.log("altura da imagem do bloco t =  " + block_image_height);
				console.log("quando a tecla direcional direita é pressionada, X = " + ball_x + ", Y = "+ball_y);
				canvas.remove(ball.obj);
				new_image();
		}
	}
	
}


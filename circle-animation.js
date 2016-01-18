var canvas;
var ctx;
var time;
var circle1 = new Object();
var circle1t = new Object();
var circle2 = new Object();
var circle2t = new Object();
var circle3 = new Object();
var circle3t = new Object();
var bigr = 115;
var littler = bigr*1.618;
var textr = bigr * 1.8;
var slowness = 100;
var interval = 0;
var spinTimer;
var spinning = false;
var entered = false;


function enter() {
	if (!entered) {
		$("#circle-animation").animate({zoom:.2}, 2000, 
			function() {
				entered = true;
				$("#circle-animation").css("cursor", "default");
				$("#bio").css("display", "block");
				$("#bio-heading").css("text-decoration", "underline");
				$(".name").animate({opacity:1}, 2000, 
					function(){$(".heading").animate({opacity:1}, 2000);
				});
			});
	}
}

function init() {
	time = 0;
	canvas = document.getElementById('circle-animation');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		ctx.translate(canvas.width/2, canvas.height*3/5);
	}
	spinTimer = setInterval(loop, 30);
}

function run() {
	spinning = true;
}

function stop() {
	spinning = false;
}

function loop() {
	if (spinning) {
		spin();
	}
	update();
	canvas.width = canvas.width;
	ctx.translate(canvas.width/2, canvas.height/2);
	render();
}

function spin() {
	time++;
}

function update() {
	var t = time/slowness + Math.PI/6;
	// update circle centers

	circle1.x = bigr * Math.cos(t);
	circle1.y = bigr * Math.sin(t);

	circle1t.x = textr * Math.cos(t);
	circle1t.y = textr * Math.sin(t);

	circle2.x = bigr * Math.cos(t + 2*Math.PI/3);
	circle2.y = bigr * Math.sin(t + 2*Math.PI/3);

	circle2t.x = textr * Math.cos(t + 2*Math.PI/3);
	circle2t.y = textr * Math.sin(t + 2*Math.PI/3);

	circle3.x = bigr * Math.cos(t + 4*Math.PI/3);
	circle3.y = bigr * Math.sin(t + 4*Math.PI/3);

	circle3t.x = textr * Math.cos(t + 4*Math.PI/3);
	circle3t.y = textr * Math.sin(t + 4*Math.PI/3);
}
function render() {
	// draw new circles
	//clearstuff();

	ctx.globalAlpha = .66;
	ctx.beginPath();
	ctx.moveTo(circle1.x+littler,circle1.y);
	ctx.arc(circle1.x, circle1.y, littler, 0, Math.PI*2);
	ctx.stroke();
	ctx.fillStyle = '#225378';
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(circle2.x+littler,circle2.y);
	ctx.arc(circle2.x, circle2.y, littler, 0, Math.PI*2);
	ctx.stroke();
	ctx.fillStyle = '#1695A3';
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(circle3.x+littler,circle3.y);
	ctx.arc(circle3.x, circle3.y, littler, 0, Math.PI*2);
	ctx.stroke();
	ctx.fillStyle = '#43A7C2';
	ctx.fill();
	ctx.beginPath();

	ctx.globalAlpha = 1;
	if (!entered) {
		ctx.textAlign = "center";
		ctx.fillStyle = '#F3FFE2';
		ctx.fillStyle = 'white';
		//ctx.strokeStyle = 'black';
		ctx.font = "30px Dosis";
		var enterbutton = ctx.fillText("Ben Pall", 0, 0);
		ctx.font = "20px Dosis";
		ctx.fillText("Web Development", circle1t.x, circle1t.y);
		ctx.fillText("User Experience Design", circle2t.x, circle2t.y);
		ctx.fillText("Game & Puzzle Design", circle3t.x, circle3t.y);
	}

}

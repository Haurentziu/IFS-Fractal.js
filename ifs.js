var c; 
var ctx; 

var width;
var height;

var rot= [deg2rad(0), -deg2rad(60), deg2rad(60), deg2rad(0)];

function rad2deg(angle){
	return angle * 180 / 3.1415;
}

function deg2rad(angle){
	return angle * 3.1415 / 180;
}


var rules = [{
               a: Math.cos(rot[0]),
               b: Math.sin(rot[0]),
               c: -Math.sin(rot[0]),
               d: Math.cos(rot[0]),
               tx: 0,
               ty: 0,
               scaleX: 0.33,
               scaleY: 0.33,
               weight: 0.25,
             },

             {
               a: Math.cos(rot[1]),
               b: Math.sin(rot[1]),
               c: -Math.sin(rot[1]),
               d: Math.cos(rot[1]),
               tx: 0.33,
               ty: 0,
               scaleX: 0.33,
               scaleY: 0.33,
               weight: 0.25,
             },

             {
              a: Math.cos(rot[2]),
               b: Math.sin(rot[2]),
               c: -Math.sin(rot[2]),
               d: Math.cos(rot[2]),
               tx: 0.5,
               ty: 0.288,
               scaleX: 0.33,
               scaleY: 0.33,
               weight: 0.25,
             },

             {
              a: Math.cos(rot[3]),
               b: Math.sin(rot[3]),
               c: -Math.sin(rot[3]),
               d: Math.cos(rot[3]),
               tx: 0.66,
               ty: 0,
               scaleX: 0.33,
               scaleY: 0.33,
               weight: 0.25,
             }];


var x = Math.random();
var	y = Math.random();


window.onload = function(){
	c = document.getElementById("canvas");
	width = c.width;
	height = c.height;
	setRules();
	ctx = c.getContext("2d");
	ctx.translate(width / 2, height);
	draw();
}

function draw(){
	ctx.fillStyle = "#fff";
	iterate();
}

function iterate(){
	for(var  i = 0; i < 50000; i++){
		rule = getRule();
		x1 = rule.scaleX * (x * rule.a + y * rule.b) + rule.tx;
		y1 = rule.scaleY * (x * rule.c + y * rule.d) + rule.ty;

		x = x1;
		y = y1;

		plot(x, y);
	}
	requestAnimationFrame(iterate);
}

function plot(x, y){
	ctx.fillRect(-200 + x * 600, -300 -y * 600, 0.5, 0.5);
}


function getRule(){
	r = Math.random();
	for(var i = 0; i < rules.length; i++){
		var rule = rules[i];
		if(r < rule.weight){
			return rule;
		}

		r -= rule.weight;
	}
}

function setRules(){
	elements = document.getElementsByClassName("ruleForm");
	for(var i = 0; i < rules.length; i++){
		sliders = elements[i].getElementsByClassName("slider");
		sliders[0].value = rad2deg(rot[i]);
		sliders[1].value = rules[i].tx;
		sliders[2].value = rules[i].ty;
		sliders[3].value = rules[i].scaleX;
		sliders[4].value = rules[i].scaleY;
	}
}

function update(){
	elements = document.getElementsByClassName("ruleForm");
	for(var i = 0; i < elements.length; i++){
		sliders = elements[i].getElementsByClassName("slider");
		angle = parseFloat(sliders[0].value) * 3.1415 / 180;
		console.log(sliders.length);
		rules[i].a = Math.cos(angle);
		rules[i].b = Math.sin(angle);
		rules[i].c = - Math.sin(angle);
		rules[i].d = Math.cos(angle);
		rules[i].ty = parseFloat(sliders[1].value);
		rules[i].tx = parseFloat(sliders[2].value);
		rules[i].scaleX = parseFloat(sliders[3].value);
		rules[i].scaleY = parseFloat(sliders[4].value);

	}
	ctx.save();
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.restore();
}





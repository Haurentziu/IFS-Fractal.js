var c; 
var ctx; 

var width;
var height;

var offset = {
	x: 0,
	y: 0,
}

var zoom = 300;

var mouseLoc = {
	x: 0,
	y: 0,
}

var rules = presets[1];

var isDragged = false;


var x = Math.random();
var	y = Math.random();


window.onload = function(){
	c = document.getElementById("canvas");
	c.addEventListener("mousedown", mouseDownListener, false);
	c.addEventListener("mousemove", mouseMoveListener, false);
	c.addEventListener("mouseup", mouseUpListener, false);
	c.addEventListener("wheel", scrollListener, false);
	c.addEventListener("mouseenter", mouseEnterListener, false);
	c.addEventListener("mouseleave", mouseLeaveListener, false);
	ctx = c.getContext("2d");
	width = c.width;
	height = c.height;
	offset.x = width /2;
	offset.y = height;

	writeSlidersRules();


	draw();
}

function draw(){
	ctx.fillStyle = "#fff";
	iterate();
}

function iterate(){
	for(var  i = 0; i < 5000; i++){
		rule = getRule();
		x1 = x * rule.a + y * rule.b + rule.tx;
		y1 = x * rule.c + y * rule.d + rule.ty;

		x = x1;
		y = y1;

		plot(x, y);
	}
	requestAnimationFrame(iterate);
}

function plot(x, y){
	ctx.fillRect(offset.x + x * zoom, offset.y -y * zoom, 0.5, 0.5);
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

function writeSlidersRules(){
	elements = document.getElementsByClassName("ruleForm");
	for(var i = 0; i < elements.length; i++){
		sliders = elements[i].getElementsByClassName("slider");
		sliders[0].value = rules[i].a;
		sliders[1].value = rules[i].b;
		sliders[2].value = rules[i].c;
		sliders[3].value = rules[i].d;
		sliders[4].value = rules[i].tx;
		sliders[5].value = rules[i].ty;
	}
}

function mouseMoveListener(event){
	if(isDragged){
		rect = canvas.getBoundingClientRect();
		x = event.clientX - rect.left;
		y = event.clientY - rect.top;
		offset.x += x - mouseLoc.x;
		offset.y += y - mouseLoc.y;
		mouseLoc.x = x;
		mouseLoc.y = y;
		clearScreen();
	}
}

function mouseDownListener(event){
	isDragged = true;
	rect = canvas.getBoundingClientRect();
	mouseLoc.x = event.clientX - rect.left;
	mouseLoc.y = event.clientY - rect.top;
}

function mouseUpListener(event){
	isDragged = false;
}

function scrollListener(event){
	if(event.wheelDelta > 0){
		zoom *= 1.1;
	}
	else zoom /= 1.1;
	clearScreen();
}

function mouseEnterListener(){
	document.body.classList.add("noScroll");
}

function mouseLeaveListener(){
	document.body.classList.remove("noScroll");
}


function setRule(select){
	rules = presets[parseInt(select.value)];
	ctx.clearRect(0, 0, c.width, c.height);
	writeSlidersRules();
}

function getRandomRules(){
	for(var  i = 0; i < rules.length; i++){
		rules[i].a = Math.random();
		rules[i].b = Math.random();
		rules[i].c = Math.random();
		rules[i].d = Math.random();

		rules[i].tx = Math.random();
		rules[i].ty = Math.random();
	}
	writeSlidersRules();

	clearScreen();

}

function clearScreen(){
	ctx.save();
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.restore();
}

function update(){
	elements = document.getElementsByClassName("ruleForm");
	console.log(elements.length)
	for(var i = 0; i < elements.length; i++){
		sliders = elements[i].getElementsByClassName("slider");
		rules[i].a = parseFloat(sliders[0].value);
		rules[i].b = parseFloat(sliders[1].value);
		rules[i].c = parseFloat(sliders[2].value);
		rules[i].d = parseFloat(sliders[3].value);

		rules[i].tx = parseFloat(sliders[4].value);
		rules[i].ty = parseFloat(sliders[5].value);
		console.log(rules[i]);
	}
	clearScreen();
}





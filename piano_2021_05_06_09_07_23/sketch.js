var soundA
var soundD
var soundG
var soundJ
var soundc
var soundc1
var soundd
var soundd1
var sounde
var soundf
var soundf1
var soundg
var soundg1
var sounda
var sounda1
var soundb

function preload() {
soundA=loadSound('soundA.mp3')
soundD=loadSound('soundD.mp3')
soundG=loadSound('soundG.mp3')
soundJ=loadSound('soundJ.mp3')
soundc=loadSound('c-.mp3')
soundc1=loadSound('c-#.mp3')
soundd=loadSound('d-.mp3')
soundd1=loadSound('d-#.mp3')
sounde=loadSound('e-.mp3')
soundf=loadSound('f-.mp3')
soundf1=loadSound('f-#.mp3')
soundg=loadSound('g-.mp3')
soundg1=loadSound('g-#.mp3')
sounda=loadSound('a-1.mp3')
sounda1=loadSound('a-#1.mp3')
soundb=loadSound('b-1.mp3')
}

function setup() {
createCanvas(444, 600);
background("#A2D9CE")
strokeWeight(0)
rect(3,300,60,300)
rect(66,300,60,300)
rect(129,300,60,300)  
rect(192,300,60,300) 
rect(255,300,60,300)
rect(318,300,60,300)
rect(381,300,60,300) 
  
fill("#17202A")
rect(45,300,40,180)
rect(108,300,40,180)

rect(234,300,40,180)
rect(297,300,40,180)
rect(360,300,40,180)
}

function keyPressed(){
if(key=="A"){
soundA.play()
fill("#D7BDE2")
rect(3,300,60,300)
fill("#17202A")
rect(45,300,40,180)
}
else{
soundA.stop();
fill("#FDFEFE")
rect(3,300,60,300)
fill("#17202A")
rect(45,300,40,180)
}
  
if(key=="D"){
soundD.play()
fill("#F9E79F")
rect(129,300,60,300)
fill("#17202A")
rect(108,300,40,180)
}
else{
soundD.stop();
fill("#FDFEFE")
rect(129,300,60,300)
fill("#17202A")
rect(108,300,40,180)
}
  
if(key=="G"){
soundG.play()
fill("#AED6F1")
rect(255,300,60,300)
fill("#17202A")
rect(234,300,40,180)
fill("#17202A")
rect(297,300,40,180)
}
else{
soundG.stop();
fill("#FDFEFE")
rect(255,300,60,300)
fill("#17202A")
rect(234,300,40,180)
fill("#17202A")
rect(297,300,40,180)
}
  
if(key=="J"){
soundJ.play()
fill("#F5B7B1")
rect(381,300,60,300)
fill("#17202A")
rect(360,300,40,180)
}
else{
soundJ.stop();
fill("#FDFEFE")
rect(381,300,60,300)
fill("#17202A")
rect(360,300,40,180)
}
}

function mousePressed(){ 
if(mouseX>0&&mouseX<45){
soundc.play();
fill("#E6B0AA")
rect(3,300,60,300)
fill("#17202A")
rect(45,300,40,180)

}else{
soundc.stop();
fill("#FDFEFE");
rect(3,300,60,300)
fill("#17202A")
rect(45,300,40,180)

}

if(mouseX>45&&mouseX<75){
soundc1.play();
fill("#FDFEFE")
rect(66,300,60,300)
fill("#17202A")
rect(45,300,40,180)
fill("#17202A")
rect(108,300,40,180)
}else{
soundc1.stop();
fill("#FDFEFE")
rect(66,300,60,300)
fill("#17202A")
rect(45,300,40,180)
fill("#17202A")
rect(108,300,40,180)
}
  
if(mouseX>75&&mouseX<120){
soundd.play();
fill("#D7BDE2")
rect(66,300,60,300)
fill("#17202A")
rect(108,300,40,180)
fill("#17202A")
rect(45,300,40,180)
}else{
soundd.stop();
fill("#FDFEFE")
rect(66,300,60,300)
fill("#17202A")
rect(108,300,40,180)
fill("#17202A")
rect(45,300,40,180)
}
  
if(mouseX>120&&mouseX<150){
soundd1.play();
fill("#FDFEFE")
rect(129,300,60,300)
fill("#17202A")
rect(108,300,40,180)
}else{
soundd1.stop();
fill("#FDFEFE")
rect(129,300,60,300)
fill("#17202A")
rect(108,300,40,180)
}
  
if(mouseX>150&&mouseX<190){
sounde.play();
fill("#AED6F1")
rect(129,300,60,300)
fill("#17202A")
rect(108,300,40,180)
fill("#17202A")
rect(45,300,40,180)
}else{
sounde.stop();
fill("#FDFEFE")
rect(129,300,60,300)
fill("#17202A")
rect(108,300,40,180)
fill("#17202A")
rect(45,300,40,180)
}
  
if(mouseX>190&&mouseX<230){
soundf.play();
fill("#A9DFBF")
rect(192,300,60,300)
fill("#17202A")
rect(234,300,40,180)
}else{
soundf.stop();
fill("#FDFEFE");
rect(192,300,60,300)
fill("#17202A")
rect(234,300,40,180)
}

}

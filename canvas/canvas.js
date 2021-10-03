var canvas= document.querySelector("canvas");

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;


var c=canvas.getContext("2d");
 // rectangle        x , y , width , height
//  c.fillStyle='rgba(255,0,0,0.5)'
//  c.fillRect(100 , 100 ,100 ,100);
//  c.fillStyle='rgba(0,0,155,0.5)'
//  c.fillRect(300 , 100 ,100 ,100);
//  c.fillStyle='rgba(0,255,0,0.5)'
// c.fillRect(200 , 300 ,100 ,100);


//line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle="blue"
// c.stroke();


//arc / circle
// c.beginPath();
// c.arc(300,300,30,0,Math.PI*2,false);
// c.strokeStyle='red';
// c.stroke();

// for(var i=0;i<100;i++){
//     var x=Math.random()*window.innerWidth;
//     var y=Math.random()*window.innerWidth;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI*2,false);
//     c.strokeStyle='red';
//     c.stroke();
// }

var mouse={
    x:undefined,
    y:undefined
};
var maxRadius=40;
// var minRadius=2;

var colorArray=[
    '#E74C3C',
    '#ECF0F1',
    '#2C3E50',
    '#3498DB',
    '#2980B9'
];

window.addEventListener('mousemove',function(event) {
    mouse.x =event.x;//x cordinate of mouse
    mouse.y = event.y;//y cordinate of mouse
})

window.addEventListener('resize',function() {
    canvas.width= window.innerWidth;
    canvas.height= window.innerHeight;

    init();
})


function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.minRadius=radius;
    this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
    this.draw=function(){
        c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    c.fillStyle=this.color;
    c.fill();
    
    }
    this.update=function(){
        if(this.x+this.radius>innerWidth || this.x-this.radius<0){
            this.dx=-this.dx;
        }
        if(this.y+this.radius>innerHeight || this.y-this.radius<0){
           this.dy=-this.dy; dy=-dy;
        }
        
        this.x+=this.dx;
        this.y+=this.dy;

        // interactivity
       if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50){
        if(this.radius<maxRadius){
            this.radius+=1
        }
        }else if(this.radius>this.minRadius){
            this.radius-=1;
        }


        this.draw();
    }
}

var circleArray=[];
function init() {
    circleArray=[];
    for(var i=0; i<1200;i++) {
        var x=Math.random()*(innerWidth-radius*2)+radius;
        var y=Math.random()*(innerHeight-radius*2)+radius;
        var dx=(Math.random()-0.5)*2;
        var dy=(Math.random()-0.5)*2;
        var radius=Math.random()*3 + 1;

        circleArray.push(new Circle(x,y,dx,dy,radius));
    }
}

init();

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0; i<circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
















// var x=Math.random()*window.innerWidth;
// var y=Math.random()*window.innerHeight;
// var dx=(Math.random()-0.5)*8;
// var dy=(Math.random()-0.5)*8;
// var radius=30;
// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth,innerHeight);
//     circle.draw();
//     c.beginPath();
//     c.arc(x,y,radius,0,Math.PI*2,false);
//     c.strokeStyle='red';
//     c.stroke();

//     if(x+radius>innerWidth || x-radius<0){
//         dx=-dx;
//     }
//     if(y+radius>innerHeight || y-radius<0){
//         dy=-dy;
//     }
    
//     x+=dx;
//     y+=dy;
// }

// animate();

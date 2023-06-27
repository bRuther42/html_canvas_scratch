const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgba(219,184,251,0.8)';      // setting the style of the drawing object to a colour
    // fill style can be a CSS colour, gradient, or pattern: default is black
ctx.fillRect(0,0,300,150);      // fillRect(x,y,width,height) method draws a rectangle, filled with the style on the canvas

// HTML canvas is a 2-D grid. Upper left corner is (0,0). fillRect(0,0,150,75) says to start at upper-left corner and draw a 150x75 px rectangle

// to draw a straight line, use:
// 1: moveTo(x,y) - defines the starting point of the line
// 2: lineTo(x,y) - defines the ending point of the line
// to actually draw the line, need to use "ink" method like stroke()

// define a starting point in position(0,0) and ending point (200,100) then use stroke() to actually move the line
ctx.moveTo(0,0);
ctx.lineTo(50,100);
ctx.stroke();

// to draw a circle: 
// beginPath() - begins a path
// arc(x,y,r,startangle,endangle) - creates an arc/curve. 
// arc() - set start angle to 0 and end angle to 2*Math.PI. the x,y params define x and y of circle center. r defines radius of cricle
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

// Canvas Gradients: 2 types
// 1: createLinearGradient(x,y,x1,y1) - creates linear gradient
// 2: createRadialGradient(x,y,r,x1,y1,r1) - creates a radial/circular gradient
// once you have a gradient object, add 2 or more color stops with addColorStop() and position along gradient between 0 to 1


const canvas2 = document.querySelector('#secondCanvas');
const ctx2 = canvas2.getContext('2d');

const grd = ctx2.createLinearGradient(0,0,250,0);
grd.addColorStop(0,"#7726C3");
grd.addColorStop(1,"#D822D5");

ctx2.fillStyle = grd;
ctx2.fillRect(0,0,300,150);



const canvas3 = document.querySelector('#thirdCanvas');
const ctx3 = canvas3.getContext('2d');

const grd2 = ctx3.createRadialGradient(150,70,5,150,80,130);
grd2.addColorStop(0,"#3DE8EF");
grd2.addColorStop(1,"#131EDE");

ctx3.fillStyle = grd2;
ctx3.fillRect(0,0,300,150);




// canvas images: to draw use drawImage(image,x,y)
window.onload = function() {
    const canvas4 = document.querySelector('#fourthCanvas');
    const ctx4 = canvas4.getContext('2d');

    const img = document.querySelector('#scream');
    ctx4.drawImage(img, 50, -50);
    // text on canvas: font, fillText(text,x,y) - draws "filled" text on the canvas, strokeText(text,x,y) - draws text on the canvas (no fill)
    ctx4.font = "30px Arial";
    // ctx4.fillText("Hello World", 10, 50);
    // ctx4.strokeText("Hello World", 10, 50);
    ctx4.fillStyle = "red";
    ctx4.textAlign = "center";
    ctx4.fillText("Hello World", canvas.width/2, canvas.height/2);
}



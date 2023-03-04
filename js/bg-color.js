// create random color 
function randomBgColor(){
    const colorCode = Math.floor(Math.random()*16777215).toString(16);
    const bgColor = "#" + colorCode;
    return bgColor
    // event.target.style.backgroundColor = "#" + colorCode;
}


// apply the random color 
document.getElementById('triangle-random-color').addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = randomBgColor();
})
document.getElementById('rectangle-random-color').addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = randomBgColor();
})
document.getElementById('parallelogram-random-color').addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = randomBgColor();
})
document.getElementById('rhombus-random-color').addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = randomBgColor();
})
document.getElementById('pentagon-random-color').addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = randomBgColor();
})
document.getElementById('ellipse-random-color').addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = randomBgColor();
})


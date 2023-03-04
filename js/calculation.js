// triangle calculation

document.getElementById('triangle-calculation').addEventListener('click', function(){
    const baseValue = getElementValueById('triangle-base-input');
    const heightValue = getElementValueById('triangle-height-input');
    const triangleCalculate = (.5* baseValue * heightValue).toFixed(2);
    
    if(isNaN(baseValue) || isNaN(heightValue) || baseValue === ''|| heightValue ==='') {
        validNumber();
    }
    else{
        resultShowFunction('triangle-result-show');
    } 
    setElementValue('triangle-result-field', triangleCalculate);
    setElementValue('triangle-base', baseValue);
    setElementValue('triangle-height', heightValue);
    
})

// Rectangle calculation
document.getElementById('rectangle-calculate').addEventListener('click', function(){
    const wideVale = getElementValueById('rectangle-wide-input');
    const lengthValue = getElementValueById('rectangle-length-input');
    const rectangleCalculate = (wideVale * lengthValue).toFixed(2);

    if(isNaN(wideVale) || isNaN(lengthValue) || wideVale === ''|| lengthValue ==='') {
        validNumber();
    }
    else{
        resultShowFunction('rectangle-result-show');
        
    } 
    setElementValue('rectangle-result-field', rectangleCalculate);
    setElementValue('rectangle-wide', wideVale);
    setElementValue('rectangle-length', lengthValue);
})

// parallelogram calculate 
document.getElementById('parallelogram-calculate').addEventListener('click', function(){
    const baseValue = getElementValueById('parallelogram-base-input');
    const lengthValue = getElementValueById('parallelogram-height-input');
    const parallelogramCalculate = (baseValue * lengthValue).toFixed(2);
    if(isNaN(baseValue) || isNaN(lengthValue) || baseValue === ''|| lengthValue ==='') {
        validNumber();
    }
    else{
        resultShowFunction('paralleloger-result-show');
        
    } 
    setElementValue('parallelogram-result-field', parallelogramCalculate);
    setElementValue('parallelogram-base', baseValue);
    setElementValue('parallelogram-height', lengthValue);
})

// rhombus calculate

document.getElementById('rhombus-calculate').addEventListener('click', function(){
    const diagonalOneValue = getElementValueById('diagonal-1-input');
    const diagonalTwoValue = getElementValueById('diagonal-2-input');
    const rhombusAria = (0.5 * diagonalOneValue * diagonalTwoValue).toFixed(2);

    if(isNaN(diagonalOneValue) || isNaN(diagonalTwoValue) || diagonalOneValue === ''|| diagonalTwoValue ==='') {
        validNumber();
    }
    else{
        resultShowFunction('rhombus-result-show');
    } 
    setElementValue('rhombus-result-field', rhombusAria);
    setElementValue('diagonal-1', diagonalOneValue);
    setElementValue('diagonal-2', diagonalTwoValue);
})

// pentagon Calculate

document.getElementById('pentagon-calculate').addEventListener('click', function(){
    const perimeterValue = getElementValueById('pentagon-perimeter-input');
    const lengthValue = getElementValueById('pentagon-height-input');
    const pentagonArea =( 0.5 * perimeterValue * lengthValue).toFixed(2);
    if(isNaN(perimeterValue) || isNaN(lengthValue) || perimeterValue === ''|| lengthValue ==='') {
        validNumber();
    }
    else{
        resultShowFunction('pentagon-result-show');
    } 
    setElementValue('pentagon-result-field', pentagonArea);
    setElementValue('pentagon-perimeter', perimeterValue);
    setElementValue('pentagon-height', lengthValue);
})

// ellipse calculation

document.getElementById('ellipse-calculate').addEventListener('click', function () {
    const axisAValue = getElementValueById('ellipse-axis-a-input');
    const axisBValue = getElementValueById('ellipse-axis-b-input');
    const ellipseArea =(Math.PI * axisAValue * axisBValue).toFixed(2);

    if(isNaN(axisAValue) || isNaN(axisBValue) || axisAValue === ''|| axisBValue ==='') {
        validNumber();
    }
    else{
        resultShowFunction('ellipse-result-show')
    } 
    setElementValue('ellipse-result-field', ellipseArea);
    setElementValue('ellipse-axis-a', axisAValue)
    setElementValue('ellipse-axis-b', axisBValue)
    area()
})

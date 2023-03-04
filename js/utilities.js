// function for get the input value
function getElementValueById(event){
    const elementField = document.getElementById(event);
    const stringValue = elementField.value;
    const inputElementValue = parseFloat(stringValue);
    elementField.value = '';
    return inputElementValue;
}
// function for set the all element value 
function setElementValue( elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}

// function for validation error message
function validNumber(){
    alert('Please inter the valid number');
}
// function for showing the result 
function resultShowFunction(result) {
    const showResult = document.getElementById(result);
    showResult.style.display  = 'block';
}

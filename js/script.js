const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const addButton = document.querySelectorAll('.buttons')[0];
const subButton = document.querySelectorAll('.buttons')[1];
const multButton = document.querySelectorAll('.buttons')[2];
const divButton = document.querySelectorAll('.buttons')[3];
const divResult = document.querySelector('.result');
const pResult = document.querySelector('#pResult');
const buttons = document.querySelectorAll('.buttons');



addButton.addEventListener('click', function(){
    const result = parseInt(input1.value) + parseInt(input2.value);
    if (input1.value !== 'number' || input1.value == '' || input2.value !== 'number' || input2.value == '') {
        divResult.classList.remove('red');  

    } if(input1.value == 'number' || input1.value == '' || input1.value == 'number' || input2.value == '') {
        pResult.innerText = ''; 
        divResult.classList.add('red');
};
    pResult.innerText = result;
})

subButton.addEventListener('click', function(){
    const result = parseInt(input1.value) - parseInt(input2.value);
    if (input1.value !== 'number' || input1.value == '' || input2.value !== 'number' || input2.value == '') {
        divResult.classList.remove('red');  

    } if(input1.value == 'number' || input1.value == '' || input1.value == 'number' || input2.value == '') {
        pResult.innerText = ''; 
        divResult.classList.add('red');
};
    pResult.innerText = result;
})

divButton.addEventListener('click', function(){
    const result = parseInt(input1.value) / parseInt(input2.value);    
    if (input1.value !== 'number' || input1.value == '' || input2.value !== 'number' || input2.value == '') {
        divResult.classList.remove('red');  

    } if(input1.value == 'number' || input1.value == '' || input1.value == 'number' || input2.value == '') {
        pResult.innerText = ''; 
        divResult.classList.add('red');
};
    pResult.innerText = result;
})

multButton.addEventListener('click', function(){
    const result = parseInt(input1.value) * parseInt(input2.value);
    if (input1.value !== 'number' || input1.value == '' || input2.value !== 'number' || input2.value == '') {
        divResult.classList.remove('red');  

    } if(input1.value == 'number' || input1.value == '' || input1.value == 'number' || input2.value == '') {
        pResult.innerText = ''; 
        divResult.classList.add('red');
};
    pResult.innerText = result;
})

  function changeColor(event) {
    if (event.target.className === 'color-red') {
        event.target.classList.remove('color-red');
    } else {
        event.target.className = 'color-red';
    }
}

input1.addEventListener('click', changeColor );
input2.addEventListener('click', changeColor );
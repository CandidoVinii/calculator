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
    pResult.innerText = ''; 
    pResult.innerText = result;
});

subButton.addEventListener('click', function(){
    const result = parseInt(input1.value) - parseInt(input2.value);
    pResult.innerText = '';
    pResult.innerText = result;
});

divButton.addEventListener('click', function(){
    const result = parseInt(input1.value) / parseInt(input2.value);
    pResult.innerText = '';
    pResult.innerText = result;
});

multButton.addEventListener('click', function(){
    const result = parseInt(input1.value) * parseInt(input2.value);
    pResult.innerText = '';
    pResult.innerText = result;
});


const changeColor = (event) => {
    if(event.target.className === 'color-red'){
        event.target.classList.remove('color-red')
    }else {
        event.targe.className = 'color-red';
    }
}

input1.addEventListener('click', changeColor);
input2.addEventListener('click', changeColor);
// Напиши скрипт который, при наборе текста в
// инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const makeInput = document.createElement('input');
makeInput.type = "text";
makeInput.placeholder = "Ваше имя?";
makeInput.id = "name-input";

const makeH1 = document.createElement("h1");
makeH1.textContent = 'Привет ';

makeH1.insertAdjacentHTML(
  'beforeend',
  '<span id="name-output">незнакомец</span>!',
);

document.body.append(makeInput,makeH1);


const refs = {
    input: document.querySelector('#name-input'),
    h1: document.querySelector('h1'),
    span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.span.textContent = event.target.value;
    console.log(event.target.value.trim());
};


//======== string.trim() пробіли 
// function onInputValid(event) {
//     const inputLength = Number.parseInt(input.dataset.length);
//     const inputValueLength = event.target.value.length;

//     if (inputLength === inputValueLength){        
//         input.classList.add('valid');
//     }
//     else {
//         input.classList.add('invalid');
//     }
// };
const makeCounterContainer = document.createElement('div');
makeCounterContainer.id = 'counter';

const makeButtonSubtract = document.createElement('button');
makeButtonSubtract.type = 'button';
makeButtonSubtract.textContent = '-1';
makeButtonSubtract.setAttribute("data-action", "decrement");


const makeCounterValue = document.createElement('span');
makeCounterValue.id = 'value';
makeCounterValue.textContent = '0';

const makeButtonAdd = document.createElement('button');
makeButtonAdd.type = 'button';
makeButtonAdd.textContent = '+1';
makeButtonAdd.setAttribute("data-action", "increment");

makeCounterContainer.append(makeButtonSubtract, makeCounterValue, makeButtonAdd);
document.body.append(makeCounterContainer);

let counter  = 0;


const refs = {
    counterConteiner: document.querySelector('#counter'),
    
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
};


refs.btnDecrement.addEventListener('click', onBtnDecrement);
refs.btnIncrement.addEventListener('click', onBtnIncrement);

function onBtnDecrement() {
    counter -= 1;
    refs.counterValue.textContent = counter;
};

function onBtnIncrement() {
    counter += 1;
    refs.counterValue.textContent = counter;
};

console.log(makeCounterContainer);

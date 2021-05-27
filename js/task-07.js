// Напиши скрипт, который реагирует на изменение значения 
// input#font - size - control(событие input) и изменяет инлайн -
    // стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

document.body.insertAdjacentHTML('afterbegin',
    `<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>`
);

const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputSlide);

function onInputSlide(event) {
    const size = event.target.value;
    refs.span.style.fontSize = size + "px";
};

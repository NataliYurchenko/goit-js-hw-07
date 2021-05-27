// Напиши скрипт, который бы при потере фокуса на инпуте, 
//проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, 
//указывается в его атрибуте data - length.
// Если введено подходящее количество, 
//то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

document.body.insertAdjacentHTML('afterbegin',
    `<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>`
);

const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputValid);

function onInputValid(event) {
    const inputLength = Number.parseInt(input.dataset.length);
    const inputValueLength = event.target.value.length;

    if (inputLength === inputValueLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
};

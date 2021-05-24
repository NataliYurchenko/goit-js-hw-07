const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

 const ListBoxEl = document.querySelector('#ingredients');

// const makeList = ingredients => {
//   return ingredients.map((ingredient) => {
//     const makeItemEl = document.createElement('li');
//     makeItemEl.textContent = ingredient;
//     return makeItemEl;
//   });
// };

// ListBoxEl.append(...makeList);
// console.log(ListBoxEl);


 //==================  map==============
const makeList = ingredients.map((ingredient) => {
  const makeItemEl = document.createElement('li');
  makeItemEl.textContent = ingredient;
  return makeItemEl;
});

ListBoxEl.append(...makeList);
console.log(ListBoxEl);

//===========const map============

// const createLi = (ingredient) => {
//     const makeItemEl = document.createElement('li');
//     makeItemEl.textContent = ingredient;
//     return makeItemEl;
//     //console.log(makeItemEl);
// }

// const makeList = ingredients.map(createLi);
// ListBoxEl.append(...makeList);
// console.log(ListBoxEl);

// ==========FOR==========
// for (let i = 0; i < ingredients.length; i += 1){
//      const makeItemEl = document.createElement('li');
//     makeItemEl.textContent = ingredients[i];

//     ListBoxEl.append(makeItemEl);
// };

// console.log(ListBoxEl);


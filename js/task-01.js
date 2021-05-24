

//const allCategories = document.querySelectorAll('#categories > li');
const allCategories = document.querySelectorAll('.item');
console.log(allCategories);
console.log(`В списке ${allCategories.length} категории.`);

allCategories.forEach(category => {
    const title = category.querySelector('h2');
    console.log(`Категория: ${title.textContent}`);

    const list = category.querySelectorAll('ul li');
    console.log(`Количество элементов: ${list.length}`);

});

// const title = (categories) => {
//     const newArray = [];
//      categories.forEach(category => {
//         newArray.push(`Категория: ${category.querySelector('h2').textContent}`);
//      });
//     return newArray;
// };

// const title = (categories) => {
//     console.log([...categories]);
//     return categories.map((category) => {        
//         return `Категория: ${category.querySelector('h2').textContent}`;
//      });
// };

// console.log(title(allCategories));

// for (const category of allCategories) {
//     const title = category.querySelector('h2');
//     console.log(`Категория: ${title.textContent}`);

// }
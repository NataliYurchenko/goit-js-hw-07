const allCategories = document.querySelectorAll('.item');
console.log(allCategories);
console.log(`В списке ${allCategories.length} категории.`);

allCategories.forEach(category => {
    const title = category.querySelector('h2');
    console.log(`Категория: ${title.textContent}`);

    const list = category.querySelectorAll('ul li');
    console.log(`Количество элементов: ${list.length}`);

});


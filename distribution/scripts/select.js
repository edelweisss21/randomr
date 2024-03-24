const dropDownButton = document.querySelector('.dropdown__button');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownItem = document.querySelectorAll('[data-value]');
const dropDownInput = document.querySelector('.dropdown__input-hidden');

dropDownButton.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list-visible');
});

dropDownItem.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownButton.innerText = this.innerText;
        dropDownButton.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list-visible');
    });
});

document.addEventListener('click', function (e) {
    if (e.target !== dropDownButton) {
        dropDownList.classList.remove('dropdown__list-visible');
    };
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownList.classList.remove('dropdown__list-visible');
    };
});

document.querySelector('button').addEventListener('click', function() {
    // Запуск формы оплаты при клике на кнопку
    const price = this.getAttribute('data-prodamusprice');
    const currency = this.getAttribute('data-currency');

    // Открытие формы оплаты с переданными данными
    window.location.href = `https://payform.ru/${price}?currency=${currency}`;
});





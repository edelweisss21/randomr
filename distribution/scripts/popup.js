const openPopup = $('#popup-button');
const closePopup = $('#close-popup');
const popupBackground = $('.popup-bg');
const popup = $('.popup');

openPopup.click((e) => {
    e.preventDefault();
    popupBackground.fadeIn(600);
    $('html').addClass('no-scroll');
});

closePopup.click(() => {
    popupBackground.fadeOut(600);
    $('html').removeClass('no-scroll');
});

popupBackground.click(() => {
    popupBackground.fadeOut(600);
});

popup.click((e) => {
    e.stopPropagation();
})
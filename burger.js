const BURGER_OPENED_CLASSNAME = 'burger-open';
const BURGER_CONTENT__OPENED_CLASSNAME = 'burger-content-open';
// const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME_2 = 'body-fixed';
const BURGER_BTN_TRANSFORM = 'burger-icon-active';

const bodyNode2 = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerTransformNode = document.querySelector('.js-burger-transform');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger-content');
const burgerBtnTransformNode =document.querySelector('.js-burger-icon');

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    burgerTransformNode.classList.toggle(BURGER_CONTENT__OPENED_CLASSNAME)
    bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME_2);
    // burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
    burgerBtnTransformNode.classList.toggle(BURGER_BTN_TRANSFORM);
}

const burger = document.querySelector('.burger');
const mobile = document.querySelector('.mobile_nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    if (burger.classList.contains('active')) {
        mobile.classList.add('active');
    }
    else {
        mobile.classList.remove('active');
    }
})
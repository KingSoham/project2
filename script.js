const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.Loginpopup');
const btnpopupremove = document.querySelector('.icon-close');


registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
    wrapper.style.cssText = 'animation: slide-in .5s ease; animation-fill-mode: forwards;'
};

btnpopupremove.onclick = () => {
    
    wrapper.style.cssText = 'animation: slide-out .5s ease; animation-fill-mode: forwards;'

    setTimeout(()=>{
        wrapper.classList.remove('active-popup');
    },500)
    setTimeout(()=>{
        wrapper.classList.remove('active');
    },500)
};


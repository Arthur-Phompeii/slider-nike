let tenisButtons = document.querySelectorAll('.tenisButton');
let slides = document.querySelectorAll('.slide');
let slider = document.querySelector('.slider');
let coresBg = ["vermelho", "cinza", "verde", "marrom"];

tenisButtons.forEach ((button, index) => {
    button.onclick = ()=> {
        let slideActive = document.querySelector('.slide.active');
        slideActive.classList.remove('active');
        slides[index].classList.add('active');

        let botaoTenisAtivo = document.querySelector('.tenisButton.active');
        botaoTenisAtivo.classList.remove('active');
        tenisButtons[index].classList.add('active');

        coresBg.forEach(cor => {
            slider.classList.remove(cor)
        });
        slider.classList.add(coresBg[index]);
    }
})
window.addEventListener('load', e => {
    const btn = document.querySelector('.btn-scroll');
    const html = document.querySelector('html');
    const step = html.getBoundingClientRect().height;
    btn.addEventListener('click', e => {
        let options = {};

        options = {
            top: (btn.classList.contains('onbottom')) ? -step : step,
            left: 0,
            behavior: 'smooth'
        }
        btn.classList.toggle('onbottom');
        html.scrollTo(options);
    });
});
const allAccordions = Array.from(document.querySelectorAll('.accordion'));

allAccordions.forEach( eachAccordion => {
    const Header = eachAccordion.querySelector('.accordion__header')

    Header.addEventListener('click', _ => {
        eachAccordion.classList.toggle('is-open')
    });
});
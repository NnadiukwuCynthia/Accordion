// const allAccordions = Array.from(document.querySelectorAll('.accordion'));
const accordionContainer = document.querySelector('.accordion-container')

// allAccordions.forEach( eachAccordion => {
//     const Header = eachAccordion.querySelector('.accordion__header')

//     Header.addEventListener('click', _ => {
//         eachAccordion.classList.toggle('is-open')
//     });
// });

accordionContainer.addEventListener('click', e => {
    const Header = e.target.closest('.accordion__header');
    if (Header) {
        const accordion = Header.parentElement
        accordion.classList.toggle('is-open')
    }
});
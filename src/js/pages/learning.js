const buttonsThemes = document.querySelectorAll('#themes > ul > li > button');

for (let buttonTheme of buttonsThemes) {
    buttonTheme.addEventListener('click', e => {
        const active = e.target.getAttribute('data-view-section');
        for (let button of buttonsThemes) {
            const section = button.getAttribute('data-view-section');
            const html = getById(section)
            if (html != null) html.classList.remove('visible')
        }
       getById(active).classList.add('visible')
    })
}

const buttonsLessons = document.querySelectorAll('button[data-view-lection]')
const sections = document.querySelectorAll("section")

for (let buttonsLesson of buttonsLessons) {
    buttonsLesson.addEventListener('click', e => {
        for (let section of sections) {
            section.classList.remove('visible')
        }
        getById(e.target.getAttribute('data-view-lection')).classList.add('visible')
    })
}

function getById(id) {
    return document.querySelector('#' + id)
}
const aside = document.querySelector('aside');
const VISIBLE_CLASS = 'visible';

function asideClose(e) {
    if (aside.contains(e.target)) return
    hideAside()
}

function hideAside() {
    aside.classList.remove(VISIBLE_CLASS)
    document.removeEventListener('click', asideClose)
}

document.querySelector('body > header > button').addEventListener('click', function () {
    if (aside.classList.contains(VISIBLE_CLASS)) {
        hideAside()
    } else {
        aside.classList.add(VISIBLE_CLASS)
        setTimeout(() => document.addEventListener('click', asideClose), 0)
    }
})




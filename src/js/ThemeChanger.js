const Theme = Object.freeze({
    DARK: 'dark',
    LIGHT: 'light',
    ATTRIBUTE: 'theme',

    get: function () {
        return  document.body.getAttribute(this.ATTRIBUTE)
    },

    set: function (theme) {
        document.body.setAttribute(this.ATTRIBUTE, theme)
        localStorage.setItem(this.ATTRIBUTE, theme);
    },

    switch: function () {
        let theme = this.get()
        theme = theme === this.LIGHT ? this.DARK : this.LIGHT;
        this.set(theme)
    }
})

window.addEventListener('load', function () {
    let theme = localStorage.getItem(Theme.ATTRIBUTE)
    if (theme === undefined) {
        Theme.set(Theme.DARK)
    } else {
        Theme.set(theme)
        document.querySelector('#theme-switcher').setAttribute(Theme.ATTRIBUTE, theme)
    }
})

document.querySelector('#theme-switcher').addEventListener('click', function () {
    Theme.switch()
    this.setAttribute(Theme.ATTRIBUTE, Theme.get())
})
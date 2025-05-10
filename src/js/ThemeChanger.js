const Theme = Object.freeze({
    DARK: 'dark',
    LIGHT: 'light',
    ATTRIBUTE: 'theme',

    set: function (theme) {
        document.body.setAttribute(this.ATTRIBUTE, theme)
        localStorage.setItem(this.ATTRIBUTE, theme);
    },

    switch: function () {
        let theme = document.body.getAttribute(this.ATTRIBUTE)
        theme = theme === this.LIGHT ? this.DARK : this.LIGHT;
        this.set(theme)
    }
})

window.addEventListener('load', function () {
    if (localStorage.getItem(Theme.ATTRIBUTE) === undefined) {
        Theme.set(Theme.DARK)
    } else {
        Theme.set(localStorage.getItem(Theme.ATTRIBUTE))
    }
})
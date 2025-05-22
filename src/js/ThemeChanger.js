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

const themeSwitcher = document.querySelector('#theme-switcher')

window.addEventListener('load', function () {
    let theme = localStorage.getItem(Theme.ATTRIBUTE)
    if (theme !== Theme.DARK && theme !== Theme.LIGHT) {
        Theme.set(Theme.DARK)
    } else {
        Theme.set(theme)
        if (themeSwitcher != null)
            themeSwitcher.setAttribute(Theme.ATTRIBUTE, theme);
    }
})


if (themeSwitcher != null) {
    themeSwitcher.addEventListener('click', function () {
        Theme.switch()
        this.setAttribute(Theme.ATTRIBUTE, Theme.get())
    })
}
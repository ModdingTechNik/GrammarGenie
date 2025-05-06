class ThemeChanger {
    constructor() {
        const loadTheme = localStorage.getItem('theme');
        this.theme = loadTheme === undefined ? 'dark' : loadTheme

        this.dark = new Map()
        this.light = new Map()

        this.init()
    }

    isDark() {
        return this.theme === 'dark'
    }

    isLight() {
        return this.theme === 'light'
    }

    init() {
        this.addPair('color-background-dark-main', 'color-background-light-main')
        this.addPair('color-background-dark-additional', 'color-background-light-additional')
        this.addPair('color-dark-border', 'color-light-border')
        this.addPair('color-dark-text', 'color-light-text')
    }

    addPair(darkClass, lightClass) {
        this.dark.set(darkClass, lightClass);
        this.light.set(lightClass, darkClass);
    }

    switchTheme() {
        if (this.isDark()) {
            this.switchToLight()
            this.theme = 'light'
        } else {
            this.switchToDark()
            this.theme = 'dark'
        }

        localStorage.setItem('theme', this.theme)
    }

    switchToDark() {
        for (const key of this.light.keys()) {
            for (const element of document.querySelectorAll('.' + key).values()) {
                element.classList.remove(key)
                element.classList.add(this.light.get(key))
            }
        }
    }

    switchToLight() {
        for (const key of this.dark.keys()) {
            for (const element of document.querySelectorAll('.' + key).values()) {
                element.classList.remove(key)
                element.classList.add(this.dark.get(key))
            }
        }
    }
}

const GlobalThemeChanger = new ThemeChanger();

window.onload = function () {
    if (GlobalThemeChanger.isLight())
        GlobalThemeChanger.switchToLight()
}
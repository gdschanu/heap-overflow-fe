const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

export default function themeSetup() {
    if (isDarkTheme())
        setDarkTheme()
    else if (isLightTheme())
        setLightTheme()
    else
        setLightTheme()
}

function isDarkTheme() {
    return localStorage.getItem('theme') === DARK_THEME
}

function isLightTheme() {
    return localStorage.getItem('theme') === LIGHT_THEME
}

function setDarkTheme() {
    localStorage.setItem('theme', DARK_THEME)
    document.getElementsByTagName("html")[0].classList.add('dark')
}

function setLightTheme() {
    localStorage.setItem('theme', LIGHT_THEME)
    document.getElementsByTagName("html")[0].classList.add('light')
}
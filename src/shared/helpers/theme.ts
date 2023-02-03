const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'
import store from "../store"

export default function themeSetup() {
    if (isDarkTheme())
        setDarkTheme()
    else if (isLightTheme())
        setLightTheme()
    else
        setDarkTheme()
}

export function isDarkTheme() {
    return localStorage.getItem('theme') === DARK_THEME
}

export function isLightTheme() {
    return localStorage.getItem('theme') === LIGHT_THEME
}

export function setDarkTheme() {
    localStorage.setItem('theme', DARK_THEME)
    document.getElementsByTagName("html")[0].classList.remove('light')
    document.getElementsByTagName("html")[0].classList.add('dark')
    store.commit("setTheme", DARK_THEME)
}

export function setLightTheme() {
    localStorage.setItem('theme', LIGHT_THEME)
    document.getElementsByTagName("html")[0].classList.remove('dark')
    document.getElementsByTagName("html")[0].classList.add('light')
    store.commit("setTheme", LIGHT_THEME)
}
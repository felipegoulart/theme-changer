const html = document.querySelector('html')
const switchTheme = document.querySelector('#switch')
const iconTheme = document.querySelector('.iconTheme')

const lightThemeColors = {
  '--background-color': '#e2e2ee',
  '--primary-color': '#d4d4e7',
  '--secundary-color': '#dddde9',
  
  '--primary-text-color': '#484855',
  '--secundary-text-color': '#24242c',
  'title': 'lightTheme'
}

const darkThemeColors = {
  '--background-color': '#202027',
  '--primary-color': '#17171d',
  '--secundary-color': '#292933',
  
  '--primary-text-color': '#dedeeb',
  '--secundary-text-color': '#b1b1c4',
  'title': 'darkTheme'
}

const lightThemeIcon = './img/sun.svg'
const darkThemeIcon = './img/moon.svg'

const changeStyle = (theme, icon) => {
  Object.keys(theme).map(key => html.style.setProperty(key, theme[key]))
  iconTheme.style.backgroundImage = `url(${icon})`

  setThemeInLocalStorage(theme, icon)
}

const setThemeInLocalStorage = (theme, icon) => {
  const themeColorsConverted = JSON.stringify(theme)

  localStorage.setItem('colorsTheme', themeColorsConverted)
  localStorage.setItem('iconTheme', icon)
}

const getThemeInLocalStorage = () => {
  const colorsThemeParsed = JSON.parse(localStorage.getItem('colorsTheme'))
  const icon = localStorage.getItem('iconTheme')

  return [colorsThemeParsed, icon]
}

const changeThemeIfChecked = ({ target }) => {
  target.checked ? changeStyle(darkThemeColors, darkThemeIcon) : changeStyle(lightThemeColors, lightThemeIcon)
}

const themeInLocalStorage = getThemeInLocalStorage()

const checkWhichThemeIsSavedInLocalStorage = (theme) => {
  if(theme?.title === 'darkTheme') switchTheme.checked = true
  else switchTheme.checked = false
}

checkWhichThemeIsSavedInLocalStorage(...themeInLocalStorage)

changeStyle(...themeInLocalStorage)
switchTheme.addEventListener('change', changeThemeIfChecked)
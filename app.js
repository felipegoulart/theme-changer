const html = document.querySelector('html')
const switchTheme = document.querySelector('#switch')
const iconTheme = document.querySelector('.iconTheme')

const lightThemeColors = {
  title: 'lightTheme',
  colors: {
    '--background-color': '#e2e2ee',
    '--primary-color': '#d4d4e7',
    '--secundary-color': '#dddde9',
    
    '--primary-text-color': '#484855',
    '--secundary-text-color': '#24242c',
  },
  icon: './img/sun.svg'
}

const darkThemeColors = {
  title: 'darkTheme',
  colors: {
    '--background-color': '#202027',
    '--primary-color': '#17171d',
    '--secundary-color': '#292933',
    
    '--primary-text-color': '#dedeeb',
    '--secundary-text-color': '#b1b1c4',
  },
  icon: './img/moon.svg'
}

const changeStyle = (theme) => {
  const { colors, icon } = theme

  Object.keys(colors).map(key => html.style.setProperty(key, colors[key]))
  iconTheme.style.backgroundImage = `url(${icon})`

  setThemeInLocalStorage(theme)
}

const setThemeInLocalStorage = (theme) => localStorage.setItem('theme', JSON.stringify(theme))
const getThemeInLocalStorage = () => JSON.parse(localStorage.getItem('theme'));

const changeThemeIfChecked = ({ target }) => target.checked ? changeStyle(darkThemeColors)
  : changeStyle(lightThemeColors)

const themeInLocalStorage = getThemeInLocalStorage()

const checkWhichThemeIsSavedInLocalStorage = ({ title }) => {
  if(title === 'darkTheme') switchTheme.checked = true
  else switchTheme.checked = false
}

checkWhichThemeIsSavedInLocalStorage(themeInLocalStorage)

const existThemeInLocalStorage = localStorage.key('theme')
if (existThemeInLocalStorage) changeStyle(themeInLocalStorage)

switchTheme.addEventListener('change', changeThemeIfChecked)
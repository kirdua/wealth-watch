// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const myCustomTheme = {
  dark: false,
  colors: {
    background: '#fdfdff',
    surface: '#fdfdff',
    black: '#393d3f',
    white: '#fdfdff',
    brown: '#c6c5b9',
    'light-blue': '#62929e',
    blue: '#546a7b',
    primary: '#bad7f2',
    error: '#f2bac9',
    info: '#baf2d8',
    success: '#baf2bb',
    warning: '#f2e2ba'
  }
}

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme
    }
  }
})
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

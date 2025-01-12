export default defineNuxtPlugin(() => {
  if (process.client) {
    const colorMode = useColorMode()
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    // Use saved theme or system preference
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light')
    colorMode.preference = theme
    document.documentElement.setAttribute('data-theme', theme)
  }
}) 
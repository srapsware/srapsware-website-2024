
import '/styles/style.css'
import '/styles/plugins.css'
import '/styles/fontawesome.css'
import '/styles/theme-change.css'
import '/styles/reset.css'


import {ThemeProvider as NextThemesProvider} from "next-themes";

function MyApp({ Component, pageProps }) {
  return (

      <NextThemesProvider>
        <Component {...pageProps} />
      </NextThemesProvider>

  )
}

export default MyApp;

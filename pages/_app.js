import "/styles/plugins.css";
import "/styles/style.css";
import "/styles/fontawesome.css";
import "/styles/theme-change.css";
import "/styles/reset.css";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { appWithTranslation } from 'next-i18next'
import nextI18nConfig from '../next-i18next.config'

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider>
      <Component {...pageProps} />
    </NextThemesProvider>
  );
}

//export default MyApp;
export default appWithTranslation(MyApp, nextI18nConfig);
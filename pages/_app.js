import '../styles/globals.css'
import { ThemeProvider } from "styled-components"
import theme from '../theme'
import Head from 'next/head'
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"

import commonEn from "../translations/en/common.json"

i18next.init({
    interpolation: { escapeValue: false },  
    lng: 'en',                              
    resources: {
        en: {
            common: commonEn               
        }
    },
})

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
          <Head>
            <title>Abuin Melisa</title>
            <meta property="og:title" content="Abuin Melisa" key="title" />
          </Head>
          <I18nextProvider i18n={i18next}>
            <Component {...pageProps} />
          </I18nextProvider>
        </ThemeProvider>
}

export default MyApp

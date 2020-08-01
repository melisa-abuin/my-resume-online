import '../styles/globals.css'
import { ThemeProvider } from "styled-components";
import theme from '../theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
          <Head>
            <title>Abuin Melisa</title>
            <meta property="og:title" content="Abuin Melisa" key="title" />
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
}

export default MyApp

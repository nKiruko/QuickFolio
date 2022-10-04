import '../styles/globals.css'

import Layout from '../components/Layout'
import Footerlines from '../components/Footerlines'

export default function MyApp({ Component, pageProps } : any) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footerlines/>
    </Layout>
  )
}



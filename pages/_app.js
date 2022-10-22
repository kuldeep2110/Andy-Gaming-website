// state
import { wrapper } from '../store/store'
// components
import Layout from './_layout'
// style
import '../styles/custom.css'
import '../styles/globals.sass'
import '../styles/integration.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
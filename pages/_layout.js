// components
import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='patterOverlay'>
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}
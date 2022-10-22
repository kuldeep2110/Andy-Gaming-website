import Head from 'next/head'
import { useEffect } from 'react'
// state
import { loginUser } from '../store/users/action'
import { wrapper } from '../store/store'
// components
import Interface from '../components/interface.js'
// style
import styles from '../styles/pages/index.module.sass'

const Index = (props) => {
  useEffect(() => {
    if (!document.body.classList.contains('entered')) {
      document.body.classList.add('entered');
    }
  }, []);
  return (
    <>
      <Head>
        <title>QATAR WORLD CUP 2022</title>
        <meta name="description" content="QATAR WORLD CUP 2022" />
      </Head>
      <Interface page="home" />
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(loginUser())
})

export default Index
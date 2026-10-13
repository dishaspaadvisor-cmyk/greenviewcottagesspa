import { Suspense, lazy } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Popup from './components/UI/popup'
import FloatingButton from './components/UI/FloatingButton'
import TopBottom from './components/UI/ButtomTop'

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Interior = lazy(() => import('./components/interior'));
const Contact = lazy(() => import('./components/Contact'));
const Faq = lazy(() => import('./components/Faq'));

function App() {
  return (
    <>
    <div className='App'>
      <Header />
      <Popup />
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Services />
        <Interior />
        <Contact />
        <Faq />
      </Suspense>
      <FloatingButton />
      <TopBottom />
      <Footer />
      </div>
    </>
  )
}

export default App

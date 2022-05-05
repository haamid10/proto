
import Contact from './components/contact/Contact'
import Headers from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'

const App = () => {
  return (
<div className='   bg-gradient-to-l from-secondary to-secondary'>
    
    <Headers/>
    <Nav/>
    <About/>
    <Experience/>
   <Contact/>
   <Footer/>
    </div>
  )
}

export default App
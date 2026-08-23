import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="hero">
          <div className="container">
            <p className="hero-hello">မင်္ဂလာပါ 👋</p>
            <h1>Bhone Htet Aung</h1>
            <p className="hero-role">Junior Web Developer</p>
            <a className="hero-btn" href="#projects">
              View My Work
            </a>
          </div>
        </section>
        <AboutMe />
        <Projects />
      </main>
      <footer id="contact" className="footer">
        <div className="container">
          <p>
            Contact:{' '}
            <a href="mailto:imbhonehtetung@gmail.com">imbhonehtetung@gmail.com</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App

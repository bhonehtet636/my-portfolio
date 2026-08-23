import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
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
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Bhone Htet Aung</p>
        </div>
      </footer>
    </>
  )
}

export default App

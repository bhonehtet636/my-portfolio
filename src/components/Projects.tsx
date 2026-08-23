import Reveal from './Reveal'
import './Projects.css'

const projects = [
  {
    title: 'Snake Game',
    description:
      'Python (tkinter) နဲ့ ဖန်တီးထားတဲ့ classic Snake game။ Score system, wrap-around walls, restart feature တွေပါဝင်ပါသည်။',
    emoji: '🐍',
    gradient: 'linear-gradient(135deg, #00c853, #1b5e20)',
    tech: ['Python', 'Tkinter'],
    github: 'https://github.com/bhonehtet636',
    demo: '',
  },
  {
    title: 'My Portfolio',
    description:
      'React + TypeScript + Vite နဲ့ တည်ဆောက်ထားတဲ့ ကိုယ်ရေးအကျဉ်း website။ Responsive layout နဲ့ dark mode ပါဝင်ပါသည်။',
    emoji: '💼',
    gradient: 'linear-gradient(135deg, #aa3bff, #4a148c)',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    github: 'https://github.com/bhonehtet636/my-portfolio',
    demo: '',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Projects</h2>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <article className="project-card">
              <div className="project-thumb" style={{ background: project.gradient }}>
                <span aria-hidden="true">{project.emoji}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tech">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

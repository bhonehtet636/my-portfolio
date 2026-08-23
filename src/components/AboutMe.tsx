import profileImg from '../assets/profile.jpg'
import './AboutMe.css'

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Git']

function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <img
            className="about-avatar"
            src={profileImg}
            alt="Bhone Htet Aung"
          />
          <div>
            <p className="about-text">
              မင်္ဂလာပါ။ ကျွန်တော်က Web Developer တစ်ယောက်ဖြစ်ပြီး React
              နဲ့ TypeScript ကို အဓိကအသုံးပြုသည့် website / web app
              များကို တည်ဆောက်လျက်ရှိပါသည်။ Clean code နဲ့ user-friendly
              design တွေကို စိတ်ဝင်စားပါသည်။
            </p>
            <p className="about-text">
              Hello! I am a web developer focused on building modern,
              responsive websites and applications with React and TypeScript.
              I care about clean code and great user experience.
            </p>
            <h3 className="about-subtitle">Skills</h3>
            <ul className="about-skills">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

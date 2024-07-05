
import Contact from './components/contact/Contact';
import Skills from './components/skills/skills';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import Projects from './components/Projects/Projects';
import Topbar from './components/topbar/Topbar';
import Resume from './components/resume/Resume';
const App = () => {
  return (
    <>
      <Topbar />
      <Intro />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App

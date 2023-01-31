import style from './App.module.css';

import Nav from './components/Nav'
import Front from './components/Front'
import About from './components/About'
import Particle from './components/Particle'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className={style.App}>
      <Nav/>
      <Particle/>
      <Front/>
      <div className={style.sections}>
        <About/>
        <Projects/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;

import './App.css';

import Nav from './components/Nav'
import Front from './components/Front'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Front/>
      <div>TESTS</div>
      <div style={{paddingBottom:"2000px"}}/>
    </div>
  );
}

export default App;

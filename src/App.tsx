import {Col, Row} from 'antd';
import 'antd/dist/antd.min.css';

import './App.css'
import Contact from './components/Contact';
import Front from './components/Front';
import Header from './components/Header';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Row justify='center' gutter={[0,10]}>
        <Header/>
        <Front/>
        <Project/>
        <Contact/>
      </Row>


    </div>
  );
}

export default App;

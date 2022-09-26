import {Col, Row} from 'antd';
import 'antd/dist/antd.min.css';

import './App.css'
import Front from './components/Front';
import Header from './components/Header';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Row justify='center'>
        <Header/>
        <Front/>
        <Project/>
      </Row>


    </div>
  );
}

export default App;

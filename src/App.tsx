import {Col, Row} from 'antd';
import 'antd/dist/antd.min.css';

import './App.css'
import Front from './components/Front';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Row>
      <Header/>
      <Front/>
      </Row>


    </div>
  );
}

export default App;

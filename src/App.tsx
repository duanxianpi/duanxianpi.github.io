import {Col, Row} from 'antd';
import 'antd/dist/antd.min.css';

import './App.css'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Row justify='center'>
        <Col span={20}><Header/></Col>
      
      </Row> */}

    <Header/>
    </div>
  );
}

export default App;

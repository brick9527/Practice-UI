import { Row, Col } from "antd";

import Code from "../../components/Code";
import CodeResult from "../../components/CodeResult";

import './index.less';

function Main() {
  return (
    <Row className="app-wrapper">
        <Col className="left-container" span={12}>
          <Code />
        </Col>
        <Col className="right-container" span={12}>
          <CodeResult />
        </Col>
    </Row>
  );
}

export default Main;

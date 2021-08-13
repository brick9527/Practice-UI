import { Row, Col } from "antd";

import Code from "../../components/Code";
import CodeResult from "../../components/CodeResult";

import './index.less';

function Main() {
  return (
    <>
      <Row>
          <Col className="code-container" xs={24} lg={12}>
            <Code />
          </Col>
          <Col xs={24} lg={12}>
            <CodeResult />
          </Col>
      </Row>
      <Row className="website-info-container"justify="space-around">
        <Col span={24}>蜀ICP备19007248号-2</Col>
        <Col span={24}>蜀ICP备19007248号-2</Col>
      </Row>
    </>
  );
}

export default Main;

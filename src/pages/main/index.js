import { Row, Col } from 'antd';
import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Code from '../../components/Code';
import CodeResult from '../../components/CodeResult';
import { getSystemProfile } from '../../APIs/System';

import './index.less';

function Main (props) {
  useEffect(() => {
    // 获取系统配置
    props.fetchSystemProfile();
  }, [props.system.config.version]);

  console.log('props = ', props.system);
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
      <Row className="website-info-container" justify="space-around">
        <Col span={24}>蜀ICP备19007248号-2</Col>
        <Col span={24}>{props.system.config.version}</Col>
      </Row>
    </>
  );
}

Main.propTypes = {
  fetchSystemProfile: PropTypes.func,
  system: PropTypes.object,
};

const mapstateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSystemProfile: () => {
      return getSystemProfile().then((res) => {
        console.log('res = ', res);
        if (!_.get(res, 'data')) {
          return;
        }

        dispatch({
          type: 'updateSystemConfig',
          value: _.get(res, 'data')
        });

        return res;
      });
    }
  };
};

export default connect(mapstateToProps, mapDispatchToProps)(Main);

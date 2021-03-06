import { UnControlled as CodeMirror } from 'react-codemirror2';
import { Button, Layout } from 'antd';
import { CaretRightOutlined, CloseCircleOutlined, CopyOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import _ from 'lodash';

import { runCode } from '../../APIs/Code';

import './index.less';

require('codemirror/mode/javascript/javascript');

const { Header, Content } = Layout;

function Code(props) {
  const state = {
    code: props.code,
  };

  const runHandler = () => {
    const data = {
      code: state.code,
    };
    runCode(data).then(res => {
      console.log(res);
      props.setCode(state.code);
      props.setCodeResult(_.get(res, 'data', ''));
    })
  };

  const emptyCodeHandler = () => {
    props.emptyCode();
  };

  const saveCode = () => {
    console.log('save');
  };

  const changeHandler = (editor, data, value) => {
    state.code = value;
  };

  return (
    <div className="code-container">
      <Header className="code-header">
        <Button icon={<CloseCircleOutlined />} onClick={emptyCodeHandler}>清空</Button>
        <Button icon={<CopyOutlined />} onClick={saveCode}>保存</Button>
        <Button type="primary" icon={<CaretRightOutlined />} onClick={runHandler}>运行</Button>
      </Header>
      <Content>
        <CodeMirror
          value={state.code}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
            tabSize: 2,
            // autofocus: true,
          }}
          onChange={changeHandler}
        />
      </Content>
    </div>
  );
}

const mapstateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCode: (code) => {
      dispatch({ type: 'setCode', code });
    },
    emptyCode: () => {
      dispatch({ type: 'emptyCode' });
    },
    setCodeResult: (result) => {
      dispatch({ type: 'setCodeResult', codeResult: result });
    },
    emptyCodeResult: () => {
      dispatch({ type: 'emptyCodeResult' });
    }
  };
};

export default connect(mapstateToProps, mapDispatchToProps)(Code);
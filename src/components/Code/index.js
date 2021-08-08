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
  const runHandler = () => {
    const data = {
      code: props.code,
    };
    runCode(data).then(res => {
      console.log(res);
      props.setCodeResult(_.get(res, 'data', ''));
    })
  };

  const emptyCodeHandler = () => {
    props.emptyCode();
  };

  const saveCode = () => {
    console.log('save');
  };

  return (
    <>
      <Header className="code-header">
        <Button icon={<CloseCircleOutlined />} onClick={emptyCodeHandler}>清空</Button>
        <Button icon={<CopyOutlined />} onClick={saveCode}>保存</Button>
        <Button type="primary" icon={<CaretRightOutlined />} onClick={runHandler}>运行</Button>
      </Header>
      <Content>
        <CodeMirror
          value={props.code}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
            tabSize: 2,
            // autofocus: true,
          }}
        />
      </Content>
    </>
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
    }
  };
};

export default connect(mapstateToProps, mapDispatchToProps)(Code);
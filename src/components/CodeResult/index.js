import { Controlled as CodeMirror } from 'react-codemirror2';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import './index.less';

const { Header, Content } = Layout;

function CodeResult(props) {
  return (
    <div className="code-result-container">
      <Header className="code-result-header">运行结果:</Header>
      <Content>
        <CodeMirror
          value={props.codeResult}
          options={{
            theme: 'material',
            lineNumbers: true,
            tabSize: 2,
            readOnly: true,
          }}
        />
      </Content>
    </div>
  );
}

const mapstateToProps = (state) => {
  console.log('state = ', state);
  return state;
};

export default connect(mapstateToProps)(CodeResult);
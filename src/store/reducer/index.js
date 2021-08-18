const initState = {
  code: `console.log('hello fd')`,
  codeResult: '',
  system: {
    config: {
      version: '0.0.0'
    }
  },
};

const reducer = (state = initState, action) => {
  console.log('action = ', action);
  switch (action.type) {
    case 'setCode':
      return Object.assign({}, state, { code: action.code });
    case 'emptyCode':
      return Object.assign({}, state, { code: '' });
    case 'setCodeResult':
      return Object.assign({}, state, { codeResult: action.codeResult });
    case 'emptyCodeResult':
      return Object.assign({}, state, { codeResult: '' });
    case 'updateSystemConfig':
      return Object.assign({}, state, {
        system: {
          config: { ...action.value }
        }
      });
    default:
      return state;
  }
};

export default reducer;

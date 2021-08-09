const initState = {
  code: `console.log('hello fd')`,
  codeResult: '',
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'setCode':
      return Object.assign({}, state, { code: action.code });
    case 'emptyCode':
      return Object.assign({}, state, { code: '' });
    case 'setCodeResult':
      console.log('reducer = ', action)
      return Object.assign({}, state, { codeResult: action.codeResult });
    case 'emptyCodeResult':
      return Object.assign({}, state, { codeResult: '' });
    default:
      return state;
  }
}

export default reducer;

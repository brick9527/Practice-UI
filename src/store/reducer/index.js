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
    default:
      return state;
  }
}

export default reducer;

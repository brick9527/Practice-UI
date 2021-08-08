const initState = {
  code: `console.log('hello fd')`,
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'setCode':
      return Object.assign({}, state, { code: action.code });
    default:
      return state;
  }
}

export default reducer;

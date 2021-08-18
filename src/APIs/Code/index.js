import axios from 'axios';

export const runCode = (args) => {
  return axios.post('/api/code/run', { ...args });
};

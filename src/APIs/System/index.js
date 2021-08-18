import axios from 'axios';

export const getSystemProfile = () => {
  return axios.get('/api/system/profile');
};

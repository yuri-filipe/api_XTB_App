import axios from 'axios';

const api = axios.create({
  baseURL: 'https://xtb.tyfs.com.br',
});
export default api;
//baseURL: "http://192.168.0.2:3000",
//baseURL: 'https://xtb.tyfs.com.br',

import router from '../router/index.js';
import axios from 'axios';
import services from './methods';
const ServiceApp = {};


ServiceApp.List = () => {
  return axios.get(services.list,{
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    return response.data.data;
  })
  .catch(error => {
    router.push('/error'); 
    throw error;
  });
}
export default ServiceApp;
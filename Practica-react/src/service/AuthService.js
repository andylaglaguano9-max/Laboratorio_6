import api from './API/axios';

export const login = async (email, password) => {
  try {
    const response = await api.post('/api/login', { email, password }); 
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (email, password) => {
  try {
    const response = await api.post('/api/register', { email, password });  
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default { login, register };
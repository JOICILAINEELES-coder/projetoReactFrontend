import axios from 'axios';




const livrosAPI = axios.create({
    baseURL: process.env.REACT_APP_API_URL ||'http://localhost:8000',
    timeout: 7000,
});

export async function getLivros() {
  try {
    console.log('GET', `${livrosAPI.defaults.baseURL}/livros`);
    const response= await livrosAPI.get('/livros');
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('getLivros Error - response:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('getLivros Error - no response (request sent):', error.message, error.request);
    } else {
      console.error('getLivros Error - setup:', error.message);
    }
    throw error;
  }
}

 

import axios from 'axios';


const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000'
});

async function getFavoritos() {
    const response= await api.get('/favoritos');
    return response.data;
}

async function postFavorito(id) {
  await api.post(`/favoritos/${id}`);
}

async function deleteFavorito(id) {
  await api.delete(`/favoritos/${id}`);
}

 export { 
  getFavoritos,
  postFavorito,
  deleteFavorito

}

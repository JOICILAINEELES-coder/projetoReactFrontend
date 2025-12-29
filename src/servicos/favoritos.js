import axios from 'axios';


const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
  headers: {
        'Content-Type': 'application/json'
    }
});

async function getFavoritos() {
    try {
    const response= await api.get('/favoritos');
    return response.data;
    } catch (error) {
        console.error("Erro ao buscar favoritos:", error.response?.data || error.message);
        throw error; 
    }
}

async function postFavorito(id) {
  try {
        await api.post(`/favoritos/${id}`);
    } catch (error) {
        console.error(`Erro ao adicionar favorito ${id}:`, error.response?.data || error.message);
        throw error;
    }
}

async function deleteFavorito(id) {
  try {
        await api.delete(`/favoritos/${id}`);
    } catch (error) {
        console.error(`Erro ao deletar favorito ${id}:`, error.response?.data || error.message);
        throw error;
    }
  }
  
 export { 
  getFavoritos,
  postFavorito,
  deleteFavorito

}

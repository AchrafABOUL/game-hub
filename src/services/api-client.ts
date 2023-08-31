import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '83703386623b4aa7b515501286915ee3'
    }
})
import axios from 'axios';
export const key = 'cc70eb98e59b014acf435fba3432c7f029c1a82e';

const api = axios.create({
    baseURL: `https://api-ssl.bitly.com/v4`,
    headers: {
        'Authorization': `Bearer ${key}`,
    }     
});

export default api;
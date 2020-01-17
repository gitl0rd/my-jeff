import axios from 'axios';

var TMDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '8a89fa2eade7da702d871d64945a30c7'
    }
  });

  export default TMDb;
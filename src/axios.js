//Use for data fetching(easiest way to use base url)  there is alson javascript fetchAPI
import axios from 'axios';

const instance = axios.create({
   baseURL:'http://localhost:5001/clone-202df/us-central1/api' //The API(cloud functions) URL
});

export default instance;
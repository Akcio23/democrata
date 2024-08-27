import axios from "axios";


const blogFetch = axios.create({
    baseURL: 'http://localhost:3000', // configurando URL global
    headers:{
        'Content-Type': 'application/json' // configurando header padrão
    }
})

export default blogFetch
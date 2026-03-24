import axios from 'axios'
const API=axios.create({
    baseurl:"http://localhost:8000/api"
})
export default API;
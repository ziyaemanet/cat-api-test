const axios = require('axios')
const API_URL = 'https://api.thecatapi.com/v1'

exports.getImages = (params) => {
  return axios({
    url: `${API_URL}/images/search`,
    method: 'get',
    headers: { 'x-api-key': process.env.API_KEY },
    params
  })
  .then((res) => res.data)
}

exports.getCategories = () => {
  return axios({
    url: `${API_URL}/categories`,
    method: 'get',
  })
  .then((res) => res.data)
}

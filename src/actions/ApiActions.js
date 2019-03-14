import axios from 'axios'

const handleResponse = (promise) => {
  return promise
    .then(res => res.data)
    .catch(err => err.response.data)
}

export const getCategoriesImages = () => ({
  type: 'GET_IMAGES',
  payload: handleResponse(axios({
    url: `/api/images/categories`,
    method: 'get'
  }))
})

export const getImages = (type, page) => ({
  type: 'GET_IMAGES',
  payload: handleResponse(axios({
    url: `/api/images/${type}`,
    method: 'get',
    params: { page }
  }))
})

export const clearResults = () => ({
  type: 'CLEAR_RESULTS'
})

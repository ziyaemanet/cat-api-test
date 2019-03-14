const catApi = require('../models/catApi')
const validator = require('validator')

exports.getCategoriesImages = (req, res) => {
  catApi.getCategories()
    .then((categories) => {
      const promises = categories.map((category) =>
        catApi.getImages({
          mime_types: 'jpg,png,gif',
          limit: 1,
          category_ids: category.id,
        })
      )

      return Promise.all(promises)
    })
    .then((categoryImages) => {
      const flattenedCategoryImages = categoryImages.map((image) => {
        const { id, url, categories } = image[0]
        return { id, url, category: categories[0].name }
      })

      res.handle(null, flattenedCategoryImages)
    })
    .catch(() => res.handle({ error: true }))
}

exports.getImages = (req, res) => {
  const value = validator.toInt(req.query.page, 10)
  let page

  if(Number.isSafeInteger(value)) {
    page = value
  } else {
    page = 0
  }

  catApi.getImages({
    mime_types: req.path === '/gif' ? 'gif' : 'jpg,png',
    order: 'asc',
    limit: 30,
    page
  })
    .then(images => res.handle(null, images))
    .catch(() => res.handle({ error: true }))
}

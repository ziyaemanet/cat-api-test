import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";

class DisplayImages extends Component {
  constructor() {
    super()

    this.state = {
      favorites: JSON.parse(localStorage.getItem('favorites')) || []
    }

    this.isFavorite = this.isFavorite.bind(this)
    this.addFavorite = this.addFavorite.bind(this)
    this.deleteFavorite = this.deleteFavorite.bind(this)
  }

  isFavorite(id) {
    const { favorites } = this.state
    const match = favorites.filter((favorite) => favorite.id === id)

    return match.length
  }

  addFavorite(image) {
    const favorites = this.state.favorites.concat(image)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    this.setState({ favorites })
  }

  deleteFavorite(id) {
    const favorites = this.state.favorites.filter((favorite) => favorite.id !== id)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    this.setState({ favorites })
  }

  render () {
    const { results, location } = this.props
    let images
    let displayImages

    if(location.pathname === '/favorites') {
      images = this.state.favorites
    } else {
      images = results
    }

    if(images && images.error) {
      displayImages = (
        <div>
          Getting info from cat api has failed!
        </div>
      )
    } else if(images) {
      displayImages = images.map((image) =>
        <div key={image.id} className='image'>
          <img src={image.url}/>
          <div className='category'>{location.pathname !== '/favorites'? image.category : ''}</div>
          { this.isFavorite(image.id) ?
            <button onClick={() => this.deleteFavorite(image.id)}>Remove Favorite</button>
            :
            <button onClick={() => this.addFavorite(image)}>Favorite</button>
          }
        </div>
      )
    } else {
      displayImages = (
        <div>
          Loading images!
        </div>
      )
    }

    return(
      <div className='main'>
        {displayImages}
      </div>
    )
  }
}

export default connect(
  state => ({ results: state.results})
)(withRouter(DisplayImages))

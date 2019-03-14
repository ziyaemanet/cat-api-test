import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'

import * as ApiActions from '../actions/ApiActions'
import DisplayImages from './DisplayImages'

class Images extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 0,
      pathname: this.props.location.pathname
    };

    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.getRequiredImages = this.getRequiredImages.bind(this)

    this.getRequiredImages(null, false)
  }

  getRequiredImages(page, mounted = true) {
    const { location, getImages } = this.props
    const pathname = location.pathname

    if (pathname === '/gif') {
      getImages('gif', page || 0)
    } else if (pathname === '/static') {
      getImages('static', page || 0)
    }

    if(mounted) {
      this.setState({ page: page || 0 })
    }
  }

  nextPage() {
    const { page } = this.state
    const newPage = page + 1

    this.getRequiredImages(newPage)

    this.setState({
      page: newPage
    })
  }

  previousPage() {
    const { page } = this.state
    const newPage = page ? page - 1 : page

    this.getRequiredImages(newPage)

    this.setState({
      page: newPage
    })
  }

  componentDidUpdate() {
    const { location } = this.props
    const pathname = location.pathname

    if(pathname !== this.state.pathname){
      getRequiredImages()
      this.setState({
        location: pathname
      })
    }
  }

  render() {
    const { page } = this.state

    return (
      <div>
        <DisplayImages/>
        <div id='page-buttons'>
          <button onClick={this.previousPage}>Prev</button>
          <div>Page {page + 1}</div>
          <button onClick={this.nextPage}>Next</button>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    getImages(type, page) { dispatch(ApiActions.getImages(type, page)) }
  })
)(Images)

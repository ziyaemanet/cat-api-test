import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as ApiActions from '../actions/ApiActions'
import DisplayImages from './DisplayImages'

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.getCategoriesImages()
  }

  render() {
    const { results } = this.props

    return (
      <div>
        <DisplayImages/>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    getCategoriesImages() { dispatch(ApiActions.getCategoriesImages()) }
  })
)(Home)

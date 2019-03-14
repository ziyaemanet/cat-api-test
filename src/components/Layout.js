import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return (
      <div id='wrapper-all'>
        <div id='wrapper'>
          <div id='navigation'>
            <Link id='page-title-text' to='/'>Cat Api Test</Link>
            <div id='page-nav'>
              <div id='find-your-nav'>Find...</div>
              <Link to='/gif' className='link'>Gifs</Link>
              <Link to='/static' className='link'>Images</Link>
              <Link to='/favorites' className='link'>Favorites</Link>
            </div>
          </div>
          {this.props.children}
          <div id='pusher'/>
        </div>
        <div id='page-footer'>
          <div id='footer-spacer'/>
          <b>created by:</b><br/>
          Ziya Emanet | github.com/ziyaemanet | https://www.linkedin.com/in/ziya-emanet-338aa1120/<br/>
          <b>data source:</b><br/>
          https://thecatapi.com/
        </div>
      </div>
    )
  }
}

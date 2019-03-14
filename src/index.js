import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import Images from './components/Images'
import Home from './components/Home'
import Favorites from './components/Favorites'
import store from './store'

render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/gif' component={Images} />
        <Route path='/static' component={Images} />
        <Route path='/favorites' component={Favorites} />
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

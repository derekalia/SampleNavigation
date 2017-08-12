// React
import React from 'react'
// Redux
import { Provider } from 'react-redux'
import store from './app/store'
// Navigation
import TabBarNavigation from './app/tabBar/views/TabBarNavigation'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    );
  }
}

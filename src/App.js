import React, { PureComponent } from 'react'
import AddTaskContainer from './component/components/addTask/AddTaskContainer'
import { Provider } from 'react-redux'
import store  from './Store/Store'
import "./styles/addTask.scss"
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
       <AddTaskContainer/>
      </Provider>
    )
  }
}


import React, { Component } from 'react'
import { Rhino } from 'rhinoui'
import ButtonTesting from './ButtonsTesting'

export default class App extends Component {
  render () {
    return (
        <Rhino lang='en' theme='dark'>
          <ButtonTesting />
        </Rhino>
    )
  }
}

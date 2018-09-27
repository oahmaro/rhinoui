import React, { Component } from 'react'
import { Rhino } from 'rhinoui'
import ButtonTesting from './ButtonsTesting'
import DividerTesting from './DividerTesting'

export default class App extends Component {
  render () {
    return (
        <Rhino lang='en' theme='dark'>
          <div style={{background: '#1d1f23', height: '100vh'}}>
            <ButtonTesting />
            <DividerTesting/>
          </div>
        </Rhino>
    )
  }
}

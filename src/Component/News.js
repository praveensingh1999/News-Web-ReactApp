import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  render() {
    return (
      <div>
        this is the news component
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
      </div>
    )
  }
}

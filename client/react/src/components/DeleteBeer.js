import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default class DeleteBeer extends Component {
    state = {
        beerId: this.props.beerId
    }

    deleteBeer = () => {

        axios.delete(`/api/v1/beers/${this.props.beerId}/`)
            .then(res => {
                this.setState({ redirect: true })
            })
    }
  render() {
    if (this.state.redirect) {
        return (<Redirect to="/" />)
    }
    return (
      <Button variant="danger" onClick={this.deleteBeer}>Delete </Button>
    )
  }
}
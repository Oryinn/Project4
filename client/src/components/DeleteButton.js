import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default class DeleteButton extends Component {
    state = {
        reviewId: this.props.reviewId
    }

    deleteReview = () => {

        axios.delete(`/api/v1/reviews/${this.props.reviewId}`)
            .then(res => {
                this.setState({ redirect: true })
            })
    }
  render() {
    if (this.state.redirect) {
        return (<Redirect to="/" />)
    }
    return (
      <Button variant="danger" onClick={this.deleteReview}>Delete </Button>
    )
  }
}
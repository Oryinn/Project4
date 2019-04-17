import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import AddReview from './AddReview'

export default class BeerDetail extends Component {
  state = {
    reviews: [],
    beerId: this.props.match.params.beerId,
    updateFormOpen: false,
    beer: {
      name: '',
      description: '',
      abv: '',
      style: '',
    },
    redirect: false,
    createFormOpen: false,
  }

  componentDidMount = () => {

    axios.get(`/api/v1/beers/${this.state.beerId}`).then(res => {
      this.setState({ beer: res.data })
    })

  }

  handleCreateReviewForm = () => {
    const addReviewView = !this.state.createFormOpen
    this.setState({ createFormOpen: addReviewView })
  }

  addNewReviewToReviewList = (newShow) => {
    const newReviewList = [...this.state.reviews]
    newReviewList.push(newShow)

    this.setState({ reviews: newReviewList })
  }

  render() {
    return (
      <div>
        <h1>{this.state.beer.name}</h1>
        <Button variant="primary" onClick={this.handleCreateReviewForm}>Add Review</Button>
        {this.state.createFormOpen
          ? <AddReview 
            beerName={this.state.beer.name}
            addNewReviewToReviewList={this.addNewReviewToReviewList}
            handleCreateReviewForm={this.handleCreateReviewForm}
          />
          : null}
        <h3>{this.state.beer.abv}% - {this.state.beer.style}</h3>
        <p>{this.state.beer.description}</p>
      </div>
    )
  }
}

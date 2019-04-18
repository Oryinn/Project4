import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import AddReview from './AddReview'

export default class BeerDetail extends Component {
  state = {
    beerId: this.props.match.params.beerId,
    updateFormOpen: false,
    beer: {
      name: '',
      description: '',
      abv: '',
      style: '',
      reviews: [],
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

  addNewReviewToReviewList = (newReview) => {
    const newReviewList = [...this.state.reviews]
    newReviewList.push(newReview)

    this.setState({ reviews: newReviewList })
  }

  render() {
    return (
      <div>
        <h1>{this.state.beer.name}</h1>
        <Button variant="primary" onClick={this.handleCreateReviewForm}>Add Review</Button>
        {this.state.createFormOpen
          ? <AddReview 
            beerId = {this.props.match.params.beerId}
            beerName={this.state.beer.name}
            addNewReviewToReviewList={this.addNewReviewToReviewList}
            handleCreateReviewForm={this.handleCreateReviewForm}
          />
          : null}
        <h3>{this.state.beer.abv}% - {this.state.beer.style}</h3>
        <p>{this.state.beer.description}</p>
        <hr />
        {this.state.beer.reviews.map(review => (
                <div key={review.id}>
                    <h3>{review.title}</h3>
                    <p>{review.content}</p>
                </div>
            ))}
      </div>
    )
  }
}

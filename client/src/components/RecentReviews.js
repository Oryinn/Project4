import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class RecentReviews extends Component {
    state = {
        reviews: []
    }

    componentDidMount(){
        this.fetchReviews();   
    }

    fetchReviews = async () => {
        try {
            const res = await axios.get('/api/v1/reviews');
            this.setState({reviews: res.data});
            console.log(this.state.reviews)
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }
  render() {
    return (
      <div>
        <h1>All Reviews</h1>
            {this.state.reviews.map(review => (
                <div key={review.id}>
                    <Link to={`/reviews/${review.id}`} >{review.title}</Link> - {review.beer.name}
                    <br />
                    {review.content}
                    <hr></hr>

                </div>
            ))}
      </div>
    )
  }
}

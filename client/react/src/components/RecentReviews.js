import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class RecentReviews extends Component {
    state = {
        reviews: [],
        beers: []
    }

    componentDidMount(){
        this.fetchReviews();   
    }

    fetchReviews = async () => {
        try {
            const res = await axios.get('/api/v1/reviews/');
            this.setState({reviews: res.data});
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

    fetchBeers = async () => {
        try {
            const res = await axios.get('/api/v1/beers/');
            this.setState({beers: res.data});
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
                    <Link to={`/beers/${review.beer}`} >{review.title}</Link> - {review.rating}
                    <br />
                    {review.content}
                    <hr></hr>

                </div>
            ))}
      </div>
    )
  }
}

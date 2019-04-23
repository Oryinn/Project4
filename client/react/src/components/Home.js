import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    state = {
        beers: [],
        reviews: [],
    }

    componentDidMount(){
        this.fetchBeers();
        this.fetchReviews();
        
    }

    fetchBeers = async () => {
        try {
            const res = await axios.get('/api/v1/mybeers/', {
                method: 'HEAD',
		        mode: 'no-cors',
            });
            this.setState({beers: res.data.data});
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

    fetchReviews = async () => {
        try {
            const res = await axios.get('/api/v1/reviews/');
            this.setState({reviews: res.data});
            console.log(this.state.reviews)
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

  render() {
    if (this.state.error){
        return <div>{this.state.error}</div>
    }
    console.log(this.state.beers);
    return (
        <div>
            <h1>Upcoming Beers</h1>
            {this.state.beers.map(beer => (
                <div key={beer.id}>
                    <p>{beer.name}</p>
                </div>
            ))}
            
        </div>
    )
  }
}

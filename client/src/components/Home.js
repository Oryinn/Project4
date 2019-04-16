import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
            const res = await axios.get('/api/v1/beers');
            this.setState({beers: res.data});
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

    fetchReviews = async () => {
        try {
            const res = await axios.get('/api/v1/reviews');
            this.setState({reviews: res.data});
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
    return (
        <div>
            <h1>All Beers</h1>
            {this.state.beers.map(beer => (
                <div key={beer.id}>
                    <Link to={`/beers/${beer.id}`} >{beer.name}</Link>
                </div>
            ))}
        </div>
    )
  }
}

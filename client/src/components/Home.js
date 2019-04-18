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
            const res = await axios.get('https://sandbox-api.brewerydb.com/v2/beers?key=APIKEY&?format=json', {
                method: 'HEAD',
		        mode: 'no-cors',
            });
            this.setState({beers: res.data});
            console.log(this.state.beers)
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
    return (
        <div>
            {this.state.beers.map(beer => (
                <div key={beer.id}>
                    <Link to={`/beers/${beer.id}`} >{beer.data.name}</Link>
                </div>
            ))}
            
        </div>
    )
  }
}

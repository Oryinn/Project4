import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class BeerList extends Component {
    state = {
        beers: []
    }
    componentDidMount(){
        this.fetchBeers();
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

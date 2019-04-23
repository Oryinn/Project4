import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap'
import AddBeer from './AddBeer'
import DeleteBeer from './DeleteBeer'

export default class BeerList extends Component {
    state = {
        beers: [],
        createFormOpen: false
        
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

    handleCreateBeerForm = () => {
        const addBeerView = !this.state.createFormOpen
        this.setState({ createFormOpen: addBeerView })
      }
    
      addNewBeerToBeerList = (newBeer) => {
        const newBeerList = [...this.state.beers]
        newBeerList.push(newBeer)
        this.setState({ beers: newBeerList })
        
      }

  render() {
    return (
      <div>
        <h1>All Beers</h1>
        <Button variant="primary" onClick={this.handleCreateBeerForm}>Add Beer</Button>
        {this.state.createFormOpen
          ? <AddBeer
            addNewBeerToBeerList={this.addNewBeerToBeerList}
            handleCreateBeerForm={this.handleCreateBeerForm}
          />
          : null}
            {this.state.beers.map(beer => (
                <div key={beer.id}>
                <h3>
                    <Link to={`/beers/${beer.id}`} >{beer.name}</Link> - <DeleteBeer beerId={beer.id} />
                    </h3>
                </div>
            ))}
      </div>
    )
  }
}

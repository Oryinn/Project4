import React, { Component } from 'react'
import axios from 'axios'
import {Form} from 'react-bootstrap'

export default class AddBeer extends Component {
    state = {
        newBeer: {
            name: '',
            description: '',
            abv: '',
            style: ''

        },
        isLoaded: false,
    }

    componentDidMount(){
        this.setState({isLoaded: true})
    }


    handleNewBeerChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newBeer = { ...this.state.newBeer };
        newBeer[attributeName] = attributeValue;

        this.setState({ newBeer })
    };

    addNewBeer = (evt) => {
        evt.preventDefault();
        axios
            .post('/api/v1/beers/', {
                name: this.state.newBeer.name,
                description: this.state.newBeer.description,
                abv: parseFloat(this.state.newBeer.abv),
                style: this.state.newBeer.style,
            }).then((res) =>{
                this.props.handleCreateBeerForm()
                this.props.addNewBeerToBeerList(res.data)
            })
            
    }
    render() {
        return (
            <div>
            {
                this.state.isLoaded ?
                <Form onSubmit={this.addNewBeer}>
                    
                    <div>
                        <input
                            type='text'
                            name="name"
                            placeholder="Beer Name"
                            value={this.state.newBeer.name}
                            onChange={this.handleNewBeerChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name="description"
                            placeholder="Description"
                            value={this.state.newBeer.description}
                            onChange={this.handleNewBeerChange}
                        />
                    </div>
                    <div>
                        <input
                            type='number'
                            name="abv"
                            placeholder="Alcohol %"
                            value={this.state.newBeer.abv}
                            onChange={this.handleNewBeerChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name="style"
                            placeholder="Style"
                            value={this.state.newBeer.style}
                            onChange={this.handleNewBeerChange}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Add New Beer"
                        />
                    </div>
                </Form>
                :
                <h2>Loading.....</h2>
            }
            </div>
        )
    }
}

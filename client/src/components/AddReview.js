import React, { Component } from 'react'
import axios from 'axios'
import {Form} from 'react-bootstrap'

export default class AddReview extends Component {
    state = {
        newReview: {
            beer: '',
            title: '',
            content: '',
            rating: '',
            author: ''

        },
        users: [],
        isLoaded: false,
    }

    componentDidMount(){
        this.fetchUsers();
        
    }

    fetchUsers = async () => {
        try {
            const res = await axios.get('/api/v1/users');
            this.setState({users: res.data, isLoaded: true});
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

    handleNewReviewChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newReview = { ...this.state.newReview };
        newReview[attributeName] = attributeValue;

        this.setState({ newReview })
    };

    addNewReview = (evt) => {
        evt.preventDefault();
        this.props.addNewReviewToReviewList(this.state.newReview)
        axios
            .post('/api/v1/reviews/', {
                beer: this.state.newReview.beer,
                title: this.state.newReview.title,
                content: this.state.newReview.content,
                rating: this.state.newReview.rating,
                author: this.state.newReview.author
            }).then(() =>{
                this.props.handleCreateReviewForm()
            })
            
    }
    render() {
        return (
            <div>
            {
                this.state.isLoaded ?
                <Form onSubmit={this.addNewReview}>
                    <div>
                        <input
                            type='text'
                            name="beer"
                            placeholder="Beer"
                            defaultValue={this.props.beerName}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name="title"
                            placeholder="Review Title"
                            value={this.state.newReview.title}
                            onChange={this.handleNewReviewChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name="content"
                            placeholder="Content"
                            value={this.state.newReview.content}
                            onChange={this.handleNewReviewChange}
                        />
                    </div>
                    <div>
                        <input
                            type='number'
                            name="rating"
                            placeholder="Rating"
                            min="1"
                            max="5"
                            value={this.state.newReview.rating}
                            onChange={this.handleNewReviewChange}
                        />
                    </div>
                    <div>
                        <select name="author">
                        {
                            this.state.users.map(user => {
                                return (
                                    <option value={user.id}>{user.username}</option>
                                )
                            })
                        }
                            </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Create New Review"
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

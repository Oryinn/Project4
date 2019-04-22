import React, { Component } from 'react'
import axios from 'axios'
import {Form} from 'react-bootstrap'

export default class AddReview extends Component {
    state = {
        newReview: {
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
            const res = await axios.get('/api/v1/users/');
            const newReview = Object.assign({}, this.state.newReview, {author: res.data[0].id})
            console.log('newReview is: ', newReview)
            this.setState({users: res.data, isLoaded: true, newReview: newReview});
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
        axios
            .post('/api/v1/reviews/', {
                beer: parseInt(this.props.beerId),
                title: this.state.newReview.title,
                content: this.state.newReview.content,
                rating: this.state.newReview.rating,
                author: parseInt(this.state.newReview.author)
            }).then((res) =>{
                this.props.handleCreateReviewForm()
                this.props.addNewReviewToReviewList(res.data)
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
                        <select name="author" value={this.state.users[0].id} onChange={this.handleNewReviewChange}>
                        {
                            this.state.users.map(user => {
                                return (
                                    <option value={user.id} key={user.id}>{user.username}</option>
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

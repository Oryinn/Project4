import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

export default class EditReview extends Component {
    state = {
        reviewId: this.props.match.params.reviewId,
        editReview: {
            id: '',
            beer: '',
            title: '',
            content: '',
            rating: '',
            author: '',
        },
        isLoaded: false,
        redirect: false
    }

    componentDidMount = () => {
        console.log(this.state.reviewId)
        axios.get(`/api/v1/reviews/${this.state.reviewId}/`).then(res => {
            this.setState({ editReview: res.data, isLoaded: true })
          })
    }

    handleEditReviewChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const editReview = { ...this.state.editReview };
        editReview[attributeName] = attributeValue;

        this.setState({ editReview })
    };

    editReview = (evt) => {
        evt.preventDefault();
        axios
            .put(`/api/v1/reviews/${this.state.reviewId}/`, {
                id: parseInt(this.state.reviewId),
                beer: parseInt(this.state.editReview.beer),
                title: this.state.editReview.title,
                content: this.state.editReview.content,
                rating: this.state.editReview.rating,
                author: parseInt(this.state.editReview.author)
            }).then(() => {
                this.setState({ redirect: true })
            })
            
    }
    render() {
        if (this.state.redirect) {
            return (<Redirect to="/" />)
        }
        return (
            <div>
            {
                this.state.isLoaded ?
                <Form onSubmit={this.editReview}>
                    
                    <div>
                        <input
                            type='text'
                            name="title"
                            placeholder="Review Title"
                            value={this.state.editReview.title}
                            onChange={this.handleEditReviewChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name="content"
                            placeholder="Content"
                            value={this.state.editReview.content}
                            onChange={this.handleEditReviewChange}
                        />
                    </div>
                    <div>
                        <input
                            type='number'
                            name="rating"
                            placeholder="Rating"
                            min="1"
                            max="5"
                            value={this.state.editReview.rating}
                            onChange={this.handleEditReviewChange}
                        />
                    </div>
                    
                    <div>
                        <input
                            type="submit"
                            value="Edit Review"
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
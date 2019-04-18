import React, { Component } from 'react'
import axios from 'axios'
import DeleteButton from './DeleteButton'
import { Button } from 'react-bootstrap'
export default class UserPage extends Component {
    state = {
        userId: this.props.match.params.userId,
        user: {
            username: '',
            email: '',
            image_link: '',
            reviews: []
        }
    }

    componentDidMount = () => {
        axios.get(`/api/v1/users/${this.state.userId}`).then(res => {
            this.setState({ user: res.data })
        })

    }


    render() {
        return (
            <div>
                <h1>{this.state.user.username}</h1>
                <img src={this.state.user.image_link} alt="Profile" />
                {this.state.user.reviews.map(review => (
                <div key={review.id}>
                {/* {console.log(review.id)} */}
                    <h3>{review.title} - <Button href={`/reviews/${review.id}/edit`} variant="warning" reviewId={review.id} >Edit</Button> <DeleteButton reviewId={review.id} /></h3>
                    <p>{review.content}</p>
                </div>
            ))}
            </div>
        )
    }
}

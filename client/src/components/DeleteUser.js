import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class DeleteUser extends Component {
    state = {
        userId: this.props.userId
    }

    deleteUser = () => {

        axios.delete(`/api/v1/users/${this.props.userId}`)
            .then(res => {
                this.setState({ redirect: true })
            })
    }
  render() {
    if (this.state.redirect) {
        return (<Redirect to="/" />)
    }
    return (
      <Button variant="danger" onClick={this.deleteUser}>Delete User</Button>
    )
  }
}
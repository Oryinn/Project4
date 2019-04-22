import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteUser from './DeleteUser'

export default class UserList extends Component {
    state = {
        users: []
    }
    componentDidMount(){
        this.fetchUsers();
    }

    fetchUsers = async () => {
        try {
            const res = await axios.get('/api/v1/users/');
            this.setState({users: res.data});
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

  render() {
    return (
      <div>
        <h1>All Users</h1>
            {this.state.users.map(user => (
                <div key={user.id}>
                   <h5> <Link to={`/users/${user.id}`} >{user.username}</Link>  - <DeleteUser userId={this.state.userId} /></h5>
                </div>
            ))}
      </div>
    )
  }
}
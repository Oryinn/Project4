import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const MainDiv = styled.div`
  width: 90vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 10vh 8vh 8vh 8vh 8vh auto;
  flex-wrap: wrap;
`
const HeaderDiv = styled.div`
align-content: center;
text-align: center;
grid-column: 2;
grid-row: 1;
`
const InputDiv = styled.div`
grid-column-start: 2;
justify-content: center;
align-content: center;
text-align: center;
`
const NameDiv = styled.div`
grid-row-start: 3;
grid-column-start: 2;

`
const EmailDiv = styled.div`
grid-row-start: 4;
grid-column-start: 2;
`
const PasswordDiv = styled.div`
grid-row-start: 5;
grid-column-start: 2;
`
const NameInput = styled.input`
    padding: 12px 20px;
    margin: 8px 0;  
    box-sizing: border-box;
    grid-column-start: 2;
`
const EmailInput = styled.input`
    padding: 12px 20px;
    margin: 8px 0;  
    box-sizing: border-box;
    grid-column-start: 2;
`
const PasswordInput = styled.input`
    padding: 12px 20px;
    margin: 8px 0;  
    box-sizing: border-box;
    grid-column-start: 2;
`
const SignUpButton = styled.input`
    background-color: lightsteelblue;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    padding: 12px;
    font-size: 1em;
    margin: 2px;
`
export default class SignUp extends Component {
    state = {
        newUser: {
            username: '',
            email: '',
            password: '',
            image_link: '',
            reviews: []
        },
        redirect: false
    }

    handleNewUserChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newUser = { ...this.state.newUser }
        newUser[attributeName] = attributeValue
        this.setState({ newUser })
    }

    addNewUser = (evt) => {
        evt.preventDefault()
        axios.post('/api/v1/users/', {
            username: this.state.newUser.username,
            email: this.state.newUser.email,
            password: this.state.newUser.password,
            image_link: this.state.newUser.image_link,
            reviews: []
        }).then(() => {
            this.setState({ redirect: true })
        })
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/" />)
        }
        return (
            <MainDiv>
                <HeaderDiv>
                    <h1>Sign Up</h1>
                </HeaderDiv>

                <InputDiv>
                    <form onSubmit={this.addNewUser}>
                    
                        <NameDiv>
                            <NameInput
                                type='text'
                                name="username"
                                placeholder="Username"
                                value={this.state.newUser.username}
                                onChange={this.handleNewUserChange}
                            />
                        </NameDiv>
                        <EmailDiv>
                            <EmailInput
                                type='email'
                                name="email"
                                placeholder="Email"
                                value={this.state.newUser.email}
                                onChange={this.handleNewUserChange}
                            />
                        </EmailDiv>
                        <PasswordDiv>
                            <PasswordInput
                                type='password'
                                name="password"
                                placeholder="Password"
                                value={this.state.newUser.password}
                                onChange={this.handleNewUserChange}
                            />
                        </PasswordDiv>
                        <NameDiv>
                            <NameInput
                                type='text'
                                name="image_link"
                                placeholder="Profile Picture URL"
                                value={this.state.newUser.image_link}
                                onChange={this.handleNewUserChange}
                            />
                        </NameDiv>
                        <div>
                            <SignUpButton
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                    </form>
                </InputDiv>
            </MainDiv>
        )
    }
}

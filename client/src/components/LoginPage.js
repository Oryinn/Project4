import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'


const MainDiv = styled.div`
  width: 90vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 10vh 8vh 8vh  auto;
  flex-wrap: wrap;
`
const HeaderDiv = styled.div`
align-content: center;
text-align: center;
grid-column: 2;
grid-row: 1;
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
const InputDiv = styled.div`
grid-column-start: 2;
justify-content: center;
align-content: center;
text-align: center;
`
const EmailDiv = styled.div`
grid-row-start: 4;
grid-column-start: 2;
`
const PasswordDiv = styled.div`
grid-row-start: 5;
grid-column-start: 2;
`
const LogInButton = styled.input`
    background-color: lightsteelblue;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    padding: 12px;
    font-size: 1em;
    margin: 2px;
`

export default class LoginPage extends Component {
    state = {
        userLogin: {
            email: '',
            password: ''
        },
        redirect: false
    }
    handleNewUserChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const userLogin = { ...this.state.userLogin }
        userLogin[attributeName] = attributeValue
        this.setState({ userLogin })
    }

    loginUser = (evt) => {
        evt.preventDefault()

    }
    render() {
        if (this.state.redirect) {
            return (<Redirect to="/" />)
        }
        return (
            <MainDiv>
                <HeaderDiv><h1>Log In</h1></HeaderDiv>
                <InputDiv>
                    <form onSubmit={this.loginUser}>
                        <EmailDiv>
                            <EmailInput
                                type='email'
                                name="email"
                                placeholder="Email"
                                value={this.state.userLogin.email}
                                onChange={this.handleNewUserChange}
                            />
                        </EmailDiv>
                        <PasswordDiv>
                            <PasswordInput
                                type='password'
                                name="password"
                                placeholder="Password"
                                value={this.state.userLogin.password}
                                onChange={this.handleNewUserChange}
                            />
                        </PasswordDiv>
                        <div>
                            <LogInButton
                                type="submit"
                                value="Log In"
                            />
                        </div>
                    </form>
                </InputDiv>
            </MainDiv>
        )
    }
}

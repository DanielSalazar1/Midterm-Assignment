import React, { Component } from "react";
import { LOGIN_PAGE_ID, LIST_PAGE_ID } from "./constants";
import './App.css';

export default class RegisterPage extends Component {
    constructor(props) {
      super(props);
      this.state={
        name: "",
        lastName: "",
        email: "",
        password: "",
        hasError: false,

      }
      this.onNameChange = this.onNameChange.bind(this);
      this.onLastNameChange = this.onLastNameChange.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.onLoginClick = this.onLoginClick.bind(this);
      this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    }
    onNameChange(event){
      this.setState({
        name: event.target.value,
      })
    }
    onLastNameChange(event) {
      this.setState({
        lastName: event.target.value,
      })
    }
    onEmailChange(event) {
      this.setState({
        email: event.target.value,
      })
    }
    onPasswordChange(event) {
      this.setState({
        password: event.target.value,
      })
    }
    onLoginClick(event) {
      event.preventDefault();
      this.props.onChangePage(LOGIN_PAGE_ID);
    }
    onSaveButtonClick(event) {
      event.preventDefault();
      const { name, lastName, email, password } = this.state;

      if (name === "daniel" && lastName === "cardenas" && email === "a@a.com" && password === "123") {
        this.props.onChangePage(LIST_PAGE_ID)
      } else {
        this.setState({
          hasError: true,
        })
      }
    }

    render(){
      const { name, lastName, email, password } = this.state;
      return(
        <div className="center">
            <h2>Register section</h2>
            <br />
            <br />
            <input
                onChange={ (event)=>{this.onNameChange(event)}}
                placeholder="Name"
                type="text"
                value={name}
            />
            <br />
            <br />
            <input
                onChange={ (event)=>{this.onLastNameChange(event)}}
                placeholder="Last name"
                type="text"
                value={lastName}
            />
            <br />
            <br />
            <input
                onChange={ (event)=>{this.onEmailChange(event)}}
                placeholder="Email"
                type="email"
                value={email}
            />
            <br />
            <br />
            <input
            placeholder="Password"
                onChange={ (event)=>{this.onPasswordChange(event)}}
                type="password"
                value={password}
            />
            <br />
            <br />
            <button className="button2" onClick={ (event)=>this.onSaveButtonClick(event)}>Save</button>
            <br />
            <button className="button2" onClick={ (event)=>this.onLoginClick(event)}>Login</button>
        </div>
      )
    }
}

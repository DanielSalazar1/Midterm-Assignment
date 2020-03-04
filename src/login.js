import React, { Component } from "react";
import { REGISTER_PAGE_ID, LIST_PAGE_ID } from './constants';
import './App.css';

export default class LoginPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        email: "",
        password: "",
        hasError: false,
      }
      this.onRegisterClick = this.onRegisterClick.bind(this);
      this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onRegisterClick(event) {
      event.preventDefault();
      this.props.onChangePage(REGISTER_PAGE_ID);
    }

    onSaveButtonClick(event) {
      event.preventDefault();
      const { password, email } = this.state;

      if (email === "a@a.com" && password === "123"){
          this.props.onChangePage(LIST_PAGE_ID);
      } else {
          this.setState({
            hasError: true,
          })
      }
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

    render() {
      const { hasError, password, email } = this.state;
      return(
          <div>
              <h2>Login Section</h2>
              {hasError &&
                  <div>
                    <strong>Email or password incorrect</strong>
                  </div>
              }
              <br></br>
              <input
                  onChange={ (event)=>{this.onEmailChange(event)}}
                  placeholder="email"
                  type="email"
                  value={email}

              />
              <br />
              <br />
              <input
                  onChange={ (event)=>{this.onPasswordChange(event)}}
                  placeholder="password"
                  type= "password"
                  value={password}

              />
              <br />
              <br />
              <button className="button2" onClick={ (event)=>this.onRegisterClick(event) }>Register</button>
              <br />
              <br />
              <button className="button2" onClick={ (event)=>this.onSaveButtonClick(event)}>Save</button>
          </div>
      )
    };
};

import React from 'react';
import RegistrationForm from './registration';
import LoginHeader from './loginHeader';
import axios from 'axios';
import {Link} from 'react-router-dom'


class LoginForm extends React.Component {
    loginRequest = (e) =>{
        e.preventDefault();
        let loginUserEmail = e.target.elements.loginemail.value.trim();
        let loginUserPassword = e.target.elements.loginpwd.value.trim();
        if(!loginUserEmail || !loginUserPassword){
            return alert("Please Enter Correctetly");
        } else {
            axios({
                method: 'post',
                url: '/signIn',
                data: {
                    loginUserEmail,loginUserPassword
                }
              }).then((response)=>{
                console.log(response.data);
              }).catch((err)=>{
                  alert(err)
              });
              
        }
     
    }
    render() {
        return (
            <div className="myForm">
                <div className="row">
                    <div className="col-md-6">
                        <LoginHeader headerText="Registration" />
                        <RegistrationForm />
                    </div>
                    <div className="col-md-6">
                        <LoginHeader headerText="login" />
                        <div className="myForm">
                            <form onSubmit={this.loginRequest}>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="loginemail" placeholder="Enter email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control " id="loginpwd" placeholder="Enter password" name="pwd" />
                                </div>
                               <button type="submit" className="btn btn-default">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;

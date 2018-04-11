import React from 'react';
import LoginHeader from './loginHeader';
import LoginForm from './loginForm';

class Login extends React.Component {
    render() {
        return (
            <div className="App">
                <LoginHeader headerText="Welcome To Parking Management System" />
                <div className="container">
                <LoginForm />
                </div>
            </div>
        );
    }
}


            
export default Login;

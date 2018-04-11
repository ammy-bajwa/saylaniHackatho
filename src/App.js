import React from 'react';
import Login from './components/login/loginPage';
import Parking from "./components/parking/parkingmain"
import Booking from "./components/booking/bookingmain"
import './css/App.css';


//login and registration  and orders is performing functions on mongoDB
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Parking />
        <Booking />
      </div>
    );
  }
}

export default App;

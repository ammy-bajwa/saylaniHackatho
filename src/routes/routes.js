import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from '../App';
import Parking from "../components/parking/parkingmain";
import Booking from "../components/booking/bookingmain";
import SpotPicker from "../components/parking/spotPicker";


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/parkingSpot" component={Parking} />
        <Route path="/bookings" component={Booking} />
        <Route path="/orderSpot" component={SpotPicker} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

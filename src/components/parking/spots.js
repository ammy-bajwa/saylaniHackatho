import React from 'react';
import SpotPicker from './spotPicker';
import {Link} from 'react-router-dom';

export default class Spots extends React.Component {
    state = {
        chinot: undefined,
        jhang: undefined,
        bwana: undefined
    }

    render() {

        return (
            <div className="container-fluid">
                <h1 className="text-center App-header">All Spots For {this.props.area}</h1>
                <div className="col-md-4">
                    <h2 className=" App-header">Long Spot</h2>
                    <Spot spotDescription="Long" />
                </div>
                <div className="col-md-4">
                    <h2 className=" App-header">Medium Spot</h2>
                    <Spot spotDescription="Medium" />
                </div>
                <div className="col-md-4">
                    <h2 className=" App-header">Short Spot</h2>
                    <Spot spotDescription="Short" />
                </div>
            </div>
        );
    }
}
class Spot extends React.Component {
    state = {
        bookings: [true, false, true, false, true, true]
    };
    render() {
        const divStyle = {
            backgroundColor: this.state.bookings[this.props.index] ? "red" : "yellow"
        };
        return (
            <div className="center-block myParkingSpots">
                <div className="row">
                    <div className="col-md-4 spot" id="1" style={divStyle}>
                    <Link to="/orderSpot"><img src="https://png.icons8.com/color/50/000000/garage.png" /></Link>
                    </div>
                    <div className="col-md-4 spot" id="2" style={divStyle}><img src="https://png.icons8.com/color/50/000000/garage.png" /></div>
                    <div className="col-md-4 spot" id="3" style={divStyle}><img src="https://png.icons8.com/color/50/000000/garage.png" /></div>
                </div>
                <div className="row">
                    <div className="col-md-4 spot" id="4" style={divStyle}><img src="https://png.icons8.com/color/50/000000/garage.png" /></div>
                    <div className="col-md-4 spot" id="5" style={divStyle}><img src="https://png.icons8.com/color/50/000000/garage.png" /></div>
                    <div className="col-md-4 spot" id="6" style={divStyle}><img src="https://png.icons8.com/color/50/000000/garage.png" /></div>
                </div>
            </div>
        );
    }
} 
import React from 'react';
import axios from 'axios';

export default class SpotPicker extends React.Component {
    spotOrder = (e) => {
        e.preventDefault();
        let parkingDuration = e.target.elements.period.value.trim();
        let parkingDate = e.target.elements.datepicker.value.trim();
        console.log(parkingDate,parkingDuration);

        axios({
            method: 'post',
            url: '/orderSpot',
            data: {
                parkingDuration, parkingDate
            }
        }).then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err)
        });



    }
    render() {
        return (
            <div className="row">
                <h1 className="text-center App-header">Order A Spot</h1>
                <div className="myFormParking">
                    <form onSubmit={this.spotOrder}>
                        <div className="row container-fluid">
                            <div className="form-group col-md-6">
                                <label htmlFor="date">Pick a Date</label>
                                <input type="date" className="form-control" id="datepicker" name="datepicker" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="period">Pick Parking Period</label>
                                <select name="period" required id="period" className="form-control">
                                    <option value="short">Short ( 2 Hours)</option>
                                    <option value="medium">Medium ( 4 Hours)</option>
                                    <option value="long">Long ( 8 Hours)</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <button type="submit" className="btn btn-default center-block">Ok</button>
                            </div>
                            <div className="col-md-4"></div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}
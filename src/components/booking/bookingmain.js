import React from 'react';

export default class Booking extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Your All Bookings</h1>
                <EachBookingInfo
                    bookingNumber="1"
                    bookingVehicalInfo="Mehran" bookingDate="Jan 3 2018"
                    bookingDuration="long" />
            </div>
        );
    }
}
const EachBookingInfo = (props) => (
    <div className="container-fluid">
        <h2 className="text-center">{props.bookingNumber}</h2>
        <h3 className="text-center">{props.bookingVehicalInfo}</h3>
        <h3 className="text-center">{props.bookingDate}</h3>
        <h3 className="text-center">{props.bookingDuration}</h3>
        <div class="btn-group btn-group-justified bookintbtnDiv">
            <button className="btn btn-danger bookingbtn">Cancel Booking</button>
            <button className="btn btn-info bookingbtn">Edit Booking</button>
        </div>
    </div>
);
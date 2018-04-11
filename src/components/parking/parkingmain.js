import React from 'react';
import Spots from "./spots";
class Parking extends React.Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-header">Select a Parking Spot</h1>
                <div className="container center-block">
                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#chiniot">
                            <h1 className="Spot-header">Chiniot Bazar</h1>
                        </a></li>
                        <li><a data-toggle="tab" href="#bwana">
                            <h1 className="Spot-header">Bhawana Bazar</h1>
                        </a></li>
                        <li><a data-toggle="tab" href="#jhang">
                            <h1 className="Spot-header">Jhang Bazar</h1>
                        </a></li>
                    </ul>

                    <div className="tab-content">
                        <div id="chiniot" className="tab-pane fade in active">
                            <Spots area="Chiniot Bazar"/>
                        </div>
                        <div id="bwana" className="tab-pane fade">
                            <Spots area="Bwana Bazar" />
                        </div>
                        <div id="jhang" className="tab-pane fade">
                            <Spots  area="Jhang Bazar"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Parking;
import React from 'react';
import {render} from 'react-dom';
import ControlPanelForm from './ControlPanelForm.jsx';

class App extends React.Component {
    render () {
        return <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="#">
                            <img src="public/img/bit-voting.png" height="50"/>
                            <img src="public/img/bit-10000.gif" height="50"/>
                        </a>
                    </div>
                </div>
            </nav>

            <div className="container">
                <ControlPanelForm />
            </div>
        </div>;
    }
}

render(<App/>, document.getElementById('app'));

import React from 'react';
import {render} from 'react-dom';
import ControlPanelForm from './ControlPanelForm.jsx';

class App extends React.Component {
    render () {
        return <div>
            <p> Hello React!</p>
            <ControlPanelForm />
        </div>;
    }
}

render(<App/>, document.getElementById('app'));

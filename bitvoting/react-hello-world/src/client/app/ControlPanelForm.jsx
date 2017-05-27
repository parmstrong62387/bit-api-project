import React from 'react';
import FormElement from "./FormElement.jsx"

class ControlPanelForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormElement name="test" label="Test Element" defaultValue="Test default value"/>
        );
    }

}

export default ControlPanelForm;
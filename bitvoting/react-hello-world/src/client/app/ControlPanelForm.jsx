import React from 'react';
import FormElement from "./FormElement.jsx"
import MultiField from "./MultiField.jsx";

class ControlPanelForm extends React.Component {

    constructor(props) {
        super(props);
        this.elementRefs = [
        ];
        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.launchApp = this.launchApp.bind(this);
    }

    render() {
        return (
            <div>
                <FormElement
                    ref={(el) => { this.elementRefs.push(el) }}
                    name="test"
                    label="Test Element"
                    defaultValue="Test default value"
                    key="0"/>
                <FormElement
                    ref={(el) => { this.elementRefs.push(el) }}
                    name="test2"
                    label="Test Element 2"
                    defaultValue="Test default value"
                    key="1"/>
                <MultiField
                    ref={(el) => { this.elementRefs.push(el) }}
                    name="test3"
                    label="Test Element 3"
                    max="4"
                    key="2"/>
                <button onClick={this.submitForm} type="submit" className="btn btn-primary">Save Changes</button>
                <button onClick={this.resetForm} type="submit" className="btn btn-cancel">Reset Changes</button>
                <button onClick={this.launchApp} type="submit" className="btn btn-primary pull-right">Launch App</button>
            </div>
        );
    }

    submitForm() {
        for (var i = 0; i < this.elementRefs.length; i++) {
            this.elementRefs[i].persistValue();
        }
    }

    resetForm() {
        for (var i = 0; i < this.elementRefs.length; i++) {
            this.elementRefs[i].resetValue();
        }
    }

    launchApp() {
        window.open(this.props.appUrl, this.props.appUrl, this.props.appWindowProps).focus();
    }

}

ControlPanelForm.defaultProps = {
    appUrl: 'control-panel.html',
    appWindowProps: 'menubar=0,resizable=1,width=1000,height=600'
}

export default ControlPanelForm;
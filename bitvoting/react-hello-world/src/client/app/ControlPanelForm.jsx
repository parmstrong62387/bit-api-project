import React from 'react';
import FormElement from "./FormElement.jsx"

class ControlPanelForm extends React.Component {

    constructor(props) {
        super(props);
        this.elementRefs = [
        ];
        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
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
                <button onClick={this.submitForm} type="submit" className="btn btn-primary">Save Changes</button>
                <button onClick={this.resetForm} type="submit" className="btn btn-cancel">Reset Changes</button>
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

}

export default ControlPanelForm;
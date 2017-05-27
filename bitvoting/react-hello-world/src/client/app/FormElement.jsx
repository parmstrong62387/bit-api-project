import React from 'react';

class FormElement extends React.Component {

    constructor(props) {
        super(props);
        var initialValue = this.getInitialValue(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: initialValue, initialValue: initialValue };
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    onChange={this.handleChange}
                    type={this.props.type}
                    className="form-control"
                    id={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.state.value}/>
            </div>
        );
    }

    getInitialValue(props) {
        var name = props.name;
        var storedValue = localStorage[name];

        if (typeof storedValue === 'undefined') {
            return props.defaultValue;
        } else {
            return storedValue;
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    persistValue() {
        this.setState({ initialValue: this.state.value });
        localStorage[this.props.name] = this.state.value;
    }

    resetValue() {
        this.setState({ value: this.state.initialValue });
    }
}

export default FormElement;
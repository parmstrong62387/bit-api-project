import React from 'react';

class FormElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: this.getInitialValue(props) };
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(e) {
        this.setState({ value: e.target.value });
        localStorage[this.props.name] = e.target.value;
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
}

export default FormElement;
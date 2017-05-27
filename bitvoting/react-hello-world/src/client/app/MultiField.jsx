import React from 'react';

var _ = require('lodash')

class MultiField extends React.Component {

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
                    {this.state.value.map((item, index) => (
                        <div className="form-inline" key={index}>
                            <input
                                type="text"
                                className="form-control"
                                id={this.props.name}
                                data-index={index}
                                placeholder={this.props.placeholder}
                                value={item.name}
                                onChange={this.handleChange}/>
                            <button onClick={() => this.moveItemUp(index)} type="button" className={index === 0 ? this.props.btnDisabled : this.props.btnCls}>⬆</button>
                            <button onClick={() => this.moveItemDown(index)} type="button" className={index === (this.state.value.length - 1) ? this.props.btnDisabled : this.props.btnCls}>⬇</button>
                            <button onClick={() => this.removeItem(index)} type="button" className={this.props.btnCls}>✖</button>
                        </div>
                    ))}
            </div>
        );
    }

    getInitialValue(props) {
        var name = props.name;
        var storedValue = localStorage[name];

        if (typeof storedValue === 'undefined') {
            return [{name: 'one'},{name: 'two'}]
        } else {
            return JSON.parse(localStorage[name]);
        }
    }

    handleChange(e) {
        var index = e.target.getAttribute('data-index');
        var newValue = _.clone(this.state.value);
        newValue[index] = { name: e.target.value };
        this.setState({ value: newValue });
    }

    moveItemUp(index) {
        if (index === 0) {
            return;
        }

        var newValue = _.clone(this.state.value);
        newValue[index] = this.state.value[index - 1];
        newValue[index - 1] = this.state.value[index];
        this.setState({ value: newValue });
    }

    moveItemDown(index) {
        if (index === this.state.value.length - 1) {
            return;
        }

        var newValue = _.clone(this.state.value);
        newValue[index] = this.state.value[index + 1];
        newValue[index + 1] = this.state.value[index];
        this.setState({ value: newValue });
    }

    removeItem(index) {
        var newValue = _.clone(this.state.value);
        newValue.splice(index,1);
        this.setState({ value: newValue });
    }

    persistValue() {
        this.setState({ initialValue: this.state.value });
        localStorage[this.props.name] = JSON.stringify(this.state.value);
    }

    resetValue() {
        this.setState({ value: this.state.initialValue });
    }
}

MultiField.defaultProps = {
    btnCls : 'btn btn-primary btn-small',
    btnDisabled: 'btn btn-primary btn-small disabled'
}

export default MultiField;
import React, { Component } from 'react';

import './add-item.css'

export default class AddItem extends Component{

    state = {
        label: ''
    }

    onChangeLabel = (e) => {
        this.setState({
            label: e.target.value
        });
        //console.log('onChangeLabel', this.state.label);
    }

    onSubmit = (e) => {
        e.preventDefault();
        //console.log('onSubmit', this.state.label);
        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            <form className='add-item d-flex' onSubmit={this.onSubmit}>
                <input type='text'
                       className='form-control'
                       placeholder='What do you want to do?'
                       onChange={this.onChangeLabel}
                       value={this.state.label}
                        />
                <button className='btn btn-outline-secondary'>
                    Add item
                </button>
            </form>
        );
    }
}



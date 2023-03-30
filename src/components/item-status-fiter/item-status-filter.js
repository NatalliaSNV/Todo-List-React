import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All'},
    { name: 'active', label: 'Active'},
    { name: 'done', label: 'Done'},
  ];

  render() {
    const {filter, onChangeFilter} = this.props;
    
    const buttonElements = this.buttons.map((item) => {
      const clazz = item.name === filter ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button"
                className={"btn " + clazz}
                key={item.name}
                onClick={() => onChangeFilter(item.name)}>
            {item.label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttonElements}
      </div>
    );
  }
}

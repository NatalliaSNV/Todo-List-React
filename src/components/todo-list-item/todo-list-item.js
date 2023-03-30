import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {
    const { label, onDelete, onToggleDone, onToggleImportant, done, important } = this.props;

    let classNamesItem = "todo-list-item";


    if (done) {
      classNamesItem += " done";
    }

    if (important) {
      classNamesItem += " important";
    }
  
    return (
      <span className={classNamesItem}>
        <span
          className="todo-list-item-label"
          onClick={ onToggleDone }>
          {label}
        </span>
  
        <div className='button-wrap'>
          <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={ onToggleImportant}>
            <i className="fa fa-exclamation" />
          </button>
  
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={ onDelete }>
            <i className="fa fa-trash-o" />
          </button>
        </div>
  
      </span>
    );
  }
}


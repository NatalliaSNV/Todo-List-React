import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todol-list/todo-list';
import ItemStatusFilter from '../item-status-fiter/item-status-filter';
import AddItem from '../add-item/add-item';
import {Component} from 'react';

import './app.css'

export default class App extends Component{

  startIndx = 100;

  state = {
    todoData : [
      this.createItem('Breakfast'),
      this.createItem('Learning Engish'),
      this.createItem('Learning React'),
      this.createItem('Sport')
    ],
    searchName: '',
    filterName: 'all'
  };

  createItem(label) {

    return {
              label, 
              key: this.startIndx++,
              important: false,
              done: false
    }
  }

  onToggle = (array, key, nameProperty) => {
      const index = array.findIndex((item) => item.key === key);
      const oldItem = array[index];
      const newItem = {...oldItem, [nameProperty]: !oldItem[nameProperty]};

      return [...array.slice(0, index),
                        newItem,
                        ...array.slice(index + 1)];
  }

  onToggleDone = (key) => {
    this.setState(({todoData}) => {
     
      return {todoData: this.onToggle(todoData, key, 'done')};
    });
  }

  onToggleImportant = (key) => {
    this.setState(({todoData}) => {
     
      return {todoData: this.onToggle(todoData, key, 'important')};
    });
  }

  deleteItem = (key) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((item) => item.key === key);
      const arrNew = [...todoData].filter((item, ind) => ind !== index);

      return {
        todoData: arrNew
      };
    });
  }

  addItem = (item) => {
    if (item.trim() === '') return;
    this.setState(({todoData}) => {
      
      const data = this.createItem(item);
      
      const arrNew = [...todoData];
      arrNew.push(data);

      return {
        todoData: arrNew
      };
    });
  }

  searchData = (arr, name) => {

    if (name === '') return arr;

    const newArray = arr.filter((item) => item.label.toLowerCase().includes(name.toLowerCase()));

    return newArray;
  }

  onSearch = (searchName) => {
    this.setState({ searchName });
  }

  filteData = (arr, nameFilter) => {

    switch (nameFilter) {
      case 'all':
        return arr;
      case 'done':
        return arr.filter((item) => item.done);
      case 'active':
        return arr.filter((item) => item.done === false);
      default:
        return arr;
    }
  }

  onChangeFiter = (filterName) => {
    this.setState({ filterName });
  }
  
  render() {
    const {todoData, searchName, filterName} = this.state;

    const itemsDone = todoData.filter((item) => item.done).length;
    const itemsTodo = todoData.length - itemsDone;

    //console.log('searchName', searchName);
    const todoDataFiltered = this.filteData(this.searchData(todoData, searchName), filterName);
    //console.log('todoDataFiltered', todoDataFiltered);

    return (
      <div className="todo-app">
        <AppHeader toDo={itemsTodo} done={itemsDone} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch}/>
          <ItemStatusFilter filter={filterName}
                            onChangeFilter={this.onChangeFiter}/>
        </div>
  
        <TodoList todos={todoDataFiltered} 
        onDelete={this.deleteItem}
        onToggleDone={this.onToggleDone}
        onToggleImportant={this.onToggleImportant}/>

        <AddItem onAdd={this.addItem}/>
      </div>
    );
  }
}
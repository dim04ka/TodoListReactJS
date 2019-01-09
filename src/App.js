import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Buttons from './components/Buttons'
import TaskList from './components/TaskList'
import ButtonGroup from './components/ButtonGroup'
import Search from './components/Search'

class App extends Component {

  idTask = 0;
  state = {
    task: [
      {"name":"Выпить чаю" ,"done": false ,"id": 1 ,"import":"false"} ,
      {"name":"Посмотреть фильм" ,"done": false ,"id": 2 ,"import":"false"},
      {"name":"Посмотреть в окно" ,"done": true ,"id": 3 ,"import":"false"} ,
      {"name":"Выпить кофе" ,"done": true ,"id": 4 ,"import":"false"}
    ],
    tern: "",
    role: "All"
  }
  addTask = (text) => {
    const newTask = {
      name: text,
      done: false,
      id: this.idTask++,
      import: false
    }
    this.setState(({ task }) => {
      const newArray = [
        ...task,
        newTask
      ]
      return {
        task: newArray
      }
    });
  }
  delTask = (id) => {
    this.setState(({ task }) => {
      const newTask = task.filter(el => el.id !== id);
      return {
        task: newTask
      }
    })
  }
  line = (id) => {
    this.setState(({ task }) => {
      const newTask = task;
      newTask[id].done = !newTask[id].done
      return {
        task: newTask
      }
    })
  }

  bold = (id) => {
    this.setState(({ task }) => {
      const newTask = task;
      newTask[id].imports = !newTask[id].imports
      return {
        task: newTask
      }
    })
  }

  searchTask = ( task, text) => {
    if (text.length === 0) {
      return task
    } 
      return task.filter((el) => {
        return el.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      })
    
  }
  searchTasks = (tern) => {
    this.setState({tern})
  }
  sort = (task, role)  => {
    switch (role) {
      case "All": 
        return task;
      case true:
        return task.filter((el) => el.done === role);
      case false:
        return task.filter((el) => el.done === role);
      default:
        return task;
    }
  }
  setAll = () => {
    this.setState({
      role : "All"
    })
  }
  setActive= () => {
    this.setState({
      role : false
    })
  }
  setDone = () => {
    this.setState({
      role : true
    })
  }

  render() {
    const countDone = this.state.task.filter((el) => el.done).length;
    const countMore = this.state.task.length - countDone;
    
    const val = this.sort(this.state.task, this.state.role)
    const vale = this.searchTask(val,this.state.tern)
    
    return (
      <div className="App">
        <Header countDone={countDone} countMore={countMore} />
        <ButtonGroup 
        setAll={this.setAll}
        setActive={this.setActive}
        setDone={this.setDone}
        role={this.state.role} />
        <Search 
        searchTasks={this.searchTasks}
       />
        <TaskList
          task={vale}
          delTask={this.delTask}
          line={this.line}
          bold={this.bold} />
        <Buttons 
        addTask={this.addTask} />
      </div>
    );
  }
}

export default App;

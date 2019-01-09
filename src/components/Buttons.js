import React, { Component } from 'react';


export default class Buttons extends Component {

  state = {
    textTask: ''
  }
  writeTask = (e) => {
    const textTask = e.target.value
    this.setState({ textTask })

  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.textTask !== "") {
      this.props.addTask(this.state.textTask)
      this.setState({
        textTask: ''
      })
    } else {
      alert('Ввод пустой строки невозможен! Введите значение');
    }
  }

  render() {
    return (
      <form className="App__form__action"
      onSubmit={this.onSubmit}>
        <input type="text"
          className="App__button__addTask"
          placeholder="write add task"
          onChange={this.writeTask}
          value={this.state.textTask} />
          <i className="fa fa-plus-circle"/>
      </form>
    )
  }

}

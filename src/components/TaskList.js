import React, { Component } from 'react';
import Tasks from './Tasks'

export default class TaskList extends Component {

    render() {
        const { task, delTask, line, bold } = this.props;
        return (
            task.map((item,index) => <Tasks key={index} item={item} delTask={delTask} line={line} bold={bold}/>)
        )
    }
}

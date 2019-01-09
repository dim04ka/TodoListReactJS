

import React,{Component} from 'react';

export default class Header extends Component {

    render() {
        const {countDone, countMore} = this.props;
        return (
            <div>
            <h1>Todo List</h1>
            <i className="fa fa-spinner fa-spin" />
            <p>{countMore} more, {countDone} done </p>
        </div>
        )
    }

}
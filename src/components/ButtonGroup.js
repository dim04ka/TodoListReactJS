import React,{Component} from 'react';

export default class ButtonGroup extends Component {

    render() {

        return (
            <div>
                <button className={ this.props.role === "All" ? "App__button__active" : "" } onClick={this.props.setAll}>All</button>
                <button className={ this.props.role === false ? "App__button__active" : "" }  onClick={this.props.setActive}>Active</button>
                <button className={ this.props.role === true ? "App__button__active" : "" }  onClick={this.props.setDone}>Done</button>
            </div>
        )
    }

}

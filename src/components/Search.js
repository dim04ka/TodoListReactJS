import React,{Component} from 'react';

export default class Search extends Component {
    state = {
        text : ""
    }

    Search = (e) => {
        const text = e.target.value;
        this.setState({text})
        this.props.searchTasks(this.state.text)
    }
    render() {

        return (
            <div className="App__search__block">
                <input type="text" className="App__button__addTask"
                onChange={this.Search}
                placeholder="Search"
                value={this.state.text}/>
                <i className="fa fa-search"/>
            </div>
        )
    }

}
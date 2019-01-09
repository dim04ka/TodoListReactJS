import React,{Component} from 'react';

export default class Tasks extends Component {

    render() {
        const {delTask,bold,line} = this.props;
        const {id,name,done,imports} = this.props.item;
        return (
            <div className="App__List">
                <span className={
                    (done) && (imports) ? 'underline import' :
                    (done) ? 'underline' :
                    (imports) ? 'import':
                    ''} 
                    onClick={() => line(id)}>{name}</span> 
                <button className="App__button__delete" onClick={() => delTask(id)}><i className="fa fa-trash-o"/></button>
                <button className="App__button__important" onClick={() => bold(id)}><i className="fa fa-info-circle"/></button>
            </div>
        )
    }

}

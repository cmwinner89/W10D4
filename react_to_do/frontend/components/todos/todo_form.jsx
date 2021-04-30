import React from 'react';

 class TodoForm extends React.Component {
     constructor(props) {
         super(props)

         this.state = {
             id: Math.floor(Math.random()*1000000000),
             title: "",
             body: ""
         }

         this.updateBody = this.updateBody.bind(this);
         this.updateTitle = this.updateTitle.bind(this);
     }

    updateTitle(e) {
        debugger
        this.setState({title: e.target.value});
    }

    updateBody(e) {
        debugger
        this.setState({body: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.receiveTodo(this.state);
        debugger
        this.setState({
            id: Math.floor(Math.random()*1000000000),
            title: "",
            body: ""
        });
    }


     render() {
         debugger
         return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add new Todo</h1>
                <label>Title
                    <input 
                        type="text"
                        value={this.state.title}
                        onChange={this.updateTitle}/>
                </label>
                <br/>
                <br/>
                <label>Body
                    <input 
                        type="text"
                        value={this.state.body}
                        onChange={this.updateBody}/>
                </label>
            </form>
        )
     }
 }

 export default TodoForm;
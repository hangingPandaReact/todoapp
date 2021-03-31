import React from 'react';
import { TodoList, AddTodoInput } from '../Component'


class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Basic state created 
            todoName: '',
            todoList: [],
        }
        // Binding the constructor
        this.handleOnTodoName = this.handleOnTodoName.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleOnTodoName(e) {
        // Change the state 
        this.setState({
            todoName: e.target.value
        })
    }

    handleAddTodo(){
        // Write Logic to insert TodoName in todo array
        const {todoList,todoName } = this.state;
        let refTodoList = todoList;
        refTodoList.push({
            name: todoName,
            isCompleted: false
        })
        this.setState({
            todoList:refTodoList,
            todoName:''
        })
    }

    handleCheck (index) {
        let refList = this.state.todoList;
        refList[index].isCompleted = true
        this.setState({
            todoList: refList
        })
    }

    render() {
        const { todoName, todoList } = this.state;
        console.log(this.state,"RENDER_COMPLETE"); // USING THIS YOU CAN SEE THE LIVE CHANGES DONE ON STATE 
        // Need to open Chrome UI Developer mode and see the changes on handle
        // But make sure when you make PR its should not be included
        
        return (
            <div>
                <AddTodoInput
                    todoName={todoName}
                    handleAddTodo={this.handleAddTodo}
                    handleOnTodoName={this.handleOnTodoName}
                />
                <TodoList todoList={todoList} handleCheck={this.handleCheck} />
            </div>
        )
    }
}

export default TodoContainer
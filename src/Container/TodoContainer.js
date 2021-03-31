import React from 'react';
import {TodoList, AddTodoInput} from '../Component'


class TodoContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // Basic state created 
          inputValue: '',
          items:[],
          checked:true,
        }
    }
    
    render(){
        return(
            <div>
                <AddTodoInput/> 
                <TodoList/>
            </div>
        )
    }
}

export default TodoContainer
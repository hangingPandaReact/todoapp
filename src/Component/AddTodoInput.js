const AddTodoInput = (props) => {
    const { handleOnTodoName, handleAddTodo, todoName } = props;
    return (
        <div>
            <input 
                type="text" 
                value={todoName} 
                placeholder="Enter the todo name" 
                onChange={handleOnTodoName} 
            />
            <button 
                onClick={handleAddTodo} 
            >
                Add Todo
            </button>
        </div>
    )
}

export default AddTodoInput
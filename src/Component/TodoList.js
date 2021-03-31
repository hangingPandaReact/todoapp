
const TodoList = (props) => {
    const {todoList, handleCheck} = props;
    return (
        <div>
            {
                todoList.map((list,index) => {
                    const { name, isCompleted} = list
                    return (
                        <div>
                            <input type="checkbox" checked={isCompleted} onChange={()=>{handleCheck(index)}} />
                            {name}
                            {isCompleted === true && <span style={{color:'red'}}>Completed</span>}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default TodoList;

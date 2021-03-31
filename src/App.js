import './App.css';
import {TodoList, AddTodoInput} from './Component'

function App() {
  return (
    <div className="App">
      <div>Todo App</div>
      <TodoList/>
      <AddTodoInput/>
    </div>
  );
}

export default App;

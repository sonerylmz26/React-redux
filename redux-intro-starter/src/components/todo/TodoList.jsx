import { useDispatch, useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { clearTodo } from "../../store/todoReducer"

const TodoList = () => {
const todoList = useSelector((state)=>state.todo.todoList)
const dispatch = useDispatch()

  return (
    <div>
      <div>
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button className="clear-button" 
        onClick={() => dispatch(clearTodo()) }
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default TodoList

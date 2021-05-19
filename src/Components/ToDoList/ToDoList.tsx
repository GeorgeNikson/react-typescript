import React from "react"
import { ITodo } from "../../interfaces";
import ToDoListStyles from "./ToDoList.module.scss"

type ToDoListPropr = {
    todos: ITodo[]
    onRemove: (id: number) => void

}

const ToDoList: React.FC<ToDoListPropr> = ({ todos, onRemove}) => {

    if (todos.length === 0) {
        return <div className={`${ToDoListStyles.container}`}><p>There are no tasks to do</p></div>
    }

    return (
        <ul>
            {todos.map(todo => {
                
                return (
                    <li className={ToDoListStyles.todo} key={todo.id}>
                        <label>
                            <input type="checkbox" 
                            />
                            <span>{todo.title}</span>
                            <i className={ToDoListStyles.red_text} 
                            onClick={() => onRemove(todo.id)}>Delete</i>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
}

export default ToDoList;
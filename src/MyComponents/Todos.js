import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {


return (
    <div className="container">
        <h3 className="text-center my-3">Todos List</h3>


        {/* simple lambda function is used to display a message if todos is empty */}
        {props.todos.length === 0 ? "No more work in your Todos to display" :

            props.todos.map((todo) => {
                return (
                    <>
                        <TodoItem todo={todo} key={todo.srno} onDelete={props.onDelete} /> <hr />
                    </>
                )
            })

        }




    </div>
)
}

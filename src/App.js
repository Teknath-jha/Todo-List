
import './App.css';
import Header from "./MyComponents/Header";   //default export 
import { Todos } from "./MyComponents/Todos";   //function named export    
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import React, { useState,useEffect  } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}  from "react-router-dom";


function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am on delete of todo ", todo);

    //deleting this way not woek in react but  work in angular 
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);


    //to delete todos 
    //filter is high order array method 
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("Deleted ",todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {

    console.log("I am adding this todo", title, desc);
    let srno;
    if (todos.length === 0){
      srno = 0;
    }
    else {
      srno = todos[todos.length - 1].srno + 1;
    }
    
    const myTodo = {
      srno: srno,
      title: title,
      desc: desc,
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </>
  );
}

export default App;

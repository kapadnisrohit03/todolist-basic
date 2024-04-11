import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";

const Todoapp = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      console.log(todos);
    }, [todos]);
  
    const handleEdit = (e, id) => {
      let t = todos.filter(i => i.id === id)
      setTodo(t[0].todo)
      let newTodos = todos.filter(item => {
        return item.id !== id
      })
      setTodos(newTodos)
    };
  
    const handleDelete = (e, id) => {
  
      let newTodos = todos.filter(item => {
        return item.id !== id;
      });
      setTodos(newTodos)
    };
  
    const handleAdd = () => {
      if (todo.trim() !== "") {
        setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
        setTodo("");
      }
    };
  
    const handleChange = (e) => {
      setTodo(e.target.value);
    };
  
    const handleCheckbox = (e) => {
      let id = e.target.name;
      let index = todos.findIndex(item => {
        return item.id === id;
      })
      let newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos)
    }
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleAdd();
      }
    };
  return (
    <div className='bg-slate-300' style={{ height: '83.5vh' }}>
      <div className="container mx-auto">
        <div className="bg-slate-200 w-10/12 mx-auto rounded-md p-4">
          <div className="addTodo m-3">
            <h2 className="text-base/[1.1rem] font-bold ">Add your Todo</h2>
            <input
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              value={todo}
              type="text"
              className="w-1/2"
              name=""
              id=""
            />
            <button
              className="text-white bg-slate-600 px-3 py-1 rounded-md mx-6"
              onClick={handleAdd}
            >
              SAVE
            </button>
            <h1 className="text-base/[1.1rem] font-bold">YOUR TODOs</h1>
          </div>
          <div className="todos">
            {todos.length === 0 && <div className="mr-5 mt-5">No Todos to Display</div>}
            {todos.map((item) => (
              <div key={item.id} className="todo flex my-3 w-1/4 justify-between">
                <div className="flex gap-5">
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
                  <div className={item.isCompleted ? "line-through" : ""}>
                    {item.todo}
                  </div>
                </div>
                <div className="buttons flex justify-between">
                  <button
                    className="text-white bg-slate-600 px-3 py-1 rounded-md mx-1"
                    onClick={(e) => { handleEdit(e, item.id) }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-white bg-slate-600 px-3 py-1 rounded-md mx-1"
                    onClick={(e) => { handleDelete(e, item.id) }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todoapp;

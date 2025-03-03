// import React, { useEffect, useState, useRef, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addTodo,
//   completeTodo,
//   deleteTodo,
//   editTodo,
// } from "../features/todoSlice";

// const Todo = () => {
//   const todos = useSelector((state) => state.todos);
//   const [todo, setTodo] = useState("");
//   const [error, setError] = useState("");
//   const [filterType, setFilterType] = useState("all");

//   const [editId, setEditId] = useState("");
//   const [todoText, setTodoText] = useState("");
//   const [editMode, setEditMode] = useState(false);

//   const inputRef = useRef(null);

//   // editMode

//   const handleEdit = (todoId, todoText) => {
//     setEditId(todoId);
//     setTodoText(todoText);
//     setEditMode(true);
//   };

//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [editMode]);

//   const filteredTools = useMemo(() => {
//     if (filterType === "all") {
//       return todos;
//     } else if (filterType === "completed") {
//       return todos.filter((todo) => todo.completed);
//     } else {
//       return todos.filter((todo) => !todo.completed);
//     }
//   }, [filterType, todos]);

//   const handleSaveTodo = () => {
//     dispatch(editTodo({ todoId: editId, todoText: todoText }));
//     setEditId("");
//     setTodoText("");
//     setEditMode(false);
//   };

//   const dispatch = useDispatch();

//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     if (!todo.length) {
//       setError("Field cannot be empty!");
//     } else {
//       dispatch(addTodo(todo));
//       setError("");
//       setTodo("");
//     }
//   };

//   const handleDeleteTodo = (todoId) => {
//     dispatch(deleteTodo(todoId));
//   };

//   return (
//     <div>
//       <div className="flex min-h-[100vh] justify-center items-center flex-col gap-[20px] mainDiv ">
//         <form className="border border-black rounded-lg pl-5 h-[70px] flex justify-center c-1 ">
//           <input
//             className="focus:outline-none h-full w-[500px] text-[30px] ph "
//             type="text"
//             onChange={(e) => setTodo(e.target.value)}
//             value={todo}
//           />
//           <button
//             onClick={handleAddTodo}
//             className="p-5 border-l border-black flex justify-center items-center "
//           >
//             ADD
//           </button>
//         </form>
//         {error && error}
//         <div className=" w-[590px] ">
//           <h1 className="text-center text-[25px]  ">Todo's</h1>
//           {todos.length > 0 && (
//             <select
//               name="filterType"
//               onChange={(e) => setFilterType(e.target.value)}
//             >
//               <option value="all"> All </option>
//               <option value="completed"> Completed </option>
//               <option value="uncompleted"> Uncompleted </option>
//             </select>
//           )}
//         </div>

//         <div className="h-[700px] overflow-auto  ">
//           {todos.map((t) => {
//             return (
//               <div
//                 key={t.todoId}
//                 className={`  saves w-[590px] text-red-800 text-[20px] p-3 rounded-md my-2 flex justify-between items-center  ${
//                   t.completed ? "bg-green-200" : "bg-red-100"
//                 } `}
//               >
//                 {editMode && editId === t.todoId ? (
//                   <form className="flex w-full justify-between gap-3 ">
//                     <input
//                       className="flex-1 pl-4 rounded-md outline-[#fdadad]"
//                       type="text"
//                       ref={inputRef}
//                       name="editField"
//                       id="editField"
//                       value={todoText}
//                       onChange={(e) => setTodoText(e.target.value)}
//                     />
//                     <button
//                       className="border border-white px-3 py-2 rounded-md text-[15px] bg-[#fff4f4] hover:bg-white "
//                       onClick={handleSaveTodo}
//                     >
//                       {" "}
//                       Save{" "}
//                     </button>
//                   </form>
//                 ) : (
//                   <div className=" flex justify-between items-center w-full c-2 ">
//                     <div>
//                       <p className=" todo break-words w-[300px]">
//                         {t.todoText}
//                       </p>
//                     </div>
//                     <div className="space-x-2 buttons ">
//                       <button
//                         onClick={() => handleDeleteTodo(t.todoId)}
//                         className="buttonSz border border-white px-3 py-2 rounded-md text-[15px] bg-[#fff4f4] hover:bg-white "
//                       >
//                         Delete
//                       </button>
//                       <button
//                         onClick={() => handleEdit(t.todoId, t.todoText)}
//                         className="border border-white px-3 py-2 rounded-md text-[15px] bg-[#fff4f4] hover:bg-white "
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => dispatch(completeTodo(t.todoId))}
//                         className="border border-white px-3 py-2 rounded-md text-[15px] bg-[#fff4f4] hover:bg-white "
//                       >
//                         {t.completed ? "Undo" : "Done"}
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//           {!todos.length && <p> No todos found! </p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Todo;




// new

// import React, { useEffect, useState, useRef, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addTodo,
//   completeTodo,
//   deleteTodo,
//   editTodo,
// } from "../features/todoSlice";

// const Todo = () => {
//   const todos = useSelector((state) => state.todos);
//   const [todo, setTodo] = useState("");
//   const [error, setError] = useState("");
//   const [filterType, setFilterType] = useState("all");
//   const [editId, setEditId] = useState("");
//   const [todoText, setTodoText] = useState("");
//   const [editMode, setEditMode] = useState(false);

//   const inputRef = useRef(null);
//   const dispatch = useDispatch();

//   // Auto-focus when entering edit mode
//   useEffect(() => {
//     if (editMode && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [editMode]);

//   // Memoized filtered todos
//   const filteredTodos = useMemo(() => {
//     switch (filterType) {
//       case "completed":
//         return todos.filter((todo) => todo.completed);
//       case "uncompleted":
//         return todos.filter((todo) => !todo.completed);
//       default:
//         return todos;
//     }
//   }, [filterType, todos]);

//   // Handlers
//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     if (!todo.trim()) {
//       setError("Todo cannot be empty!");
//       return;
//     }
//     dispatch(addTodo(todo.trim()));
//     setTodo("");
//     setError("");
//   };

//   const handleEdit = (todoId, text) => {
//     setEditId(todoId);
//     setTodoText(text);
//     setEditMode(true);
//   };

//   const handleSaveTodo = (e) => {
//     e.preventDefault();
//     if (!todoText.trim()) {
//       setError("Todo cannot be empty!");
//       return;
//     }
//     dispatch(editTodo({ todoId: editId, todoText: todoText.trim() }));
//     setEditId("");
//     setTodoText("");
//     setEditMode(false);
//   };

//   const handleDeleteTodo = (todoId) => dispatch(deleteTodo(todoId));
//   const handleCompleteTodo = (todoId) => dispatch(completeTodo(todoId));

//   return (
//     <div className="min-h-screen flex justify-center items-center flex-col gap-5 p-4">
//       {/* Add Todo Form */}
//       <form 
//         onSubmit={handleAddTodo}
//         className="flex w-full max-w-[590px] border border-black rounded-lg h-[70px]"
//       >
//         <input
//           className="flex-1 px-5 text-[30px] focus:outline-none"
//           type="text"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//           placeholder="Add a new todo..."
//           aria-label="New todo input"
//         />
//         <button
//           type="submit"
//           className="px-5 border-l border-black bg-gray-100 hover:bg-gray-200 transition-colors"
//         >
//           ADD
//         </button>
//       </form>
//       {error && <p className="text-red-500">{error}</p>}

//       {/* Filter and Todo List */}
//       <div className="w-full max-w-[590px]">
//         {todos.length > 0 && (
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-[25px]">Todo List</h1>
//             <select
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value)}
//               className="border rounded-md p-1"
//               aria-label="Filter todos"
//             >
//               <option value="all">All</option>
//               <option value="completed">Completed</option>
//               <option value="uncompleted">Pending</option>
//             </select>
//           </div>
//         )}

//         {/* Todo Items */}
//         <div className="max-h-[700px] overflow-auto space-y-2">
//           {filteredTodos.map((t) => (
//             <div
//               key={t.todoId}
//               className={`w-full p-3 rounded-md flex justify-between items-center transition-colors ${
//                 t.completed ? "bg-green-100" : "bg-red-100"
//               }`}
//             >
//               {editMode && editId === t.todoId ? (
//                 <form onSubmit={handleSaveTodo} className="flex w-full gap-3">
//                   <input
//                     ref={inputRef}
//                     className="flex-1 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-300"
//                     type="text"
//                     value={todoText}
//                     onChange={(e) => setTodoText(e.target.value)}
//                     aria-label="Edit todo"
//                   />
//                   <button
//                     type="submit"
//                     className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
//                   >
//                     Save
//                   </button>
//                 </form>
//               ) : (
//                 <div className="flex w-full justify-between items-center gap-3">
//                   <p className={`text-[20px] break-words max-w-[60%] ${t.completed ? 'line-through text-gray-600' : ''}`}>
//                     {t.todoText}
//                   </p>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => handleDeleteTodo(t.todoId)}
//                       className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
//                       aria-label="Delete todo"
//                     >
//                       Delete
//                     </button>
//                     <button
//                       onClick={() => handleEdit(t.todoId, t.todoText)}
//                       className="px-3 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
//                       aria-label="Edit todo"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleCompleteTodo(t.todoId)}
//                       className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
//                       aria-label={t.completed ? "Undo todo" : "Complete todo"}
//                     >
//                       {t.completed ? "Undo" : "Done"}
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//           {!filteredTodos.length && (
//             <p className="text-center text-gray-500 mt-4">
//               {todos.length ? "No todos match the current filter" : "No todos yet"}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Todo;





import React, { useEffect, useState, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completeTodo, deleteTodo, editTodo } from "../features/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [editId, setEditId] = useState("");
  const [todoText, setTodoText] = useState("");
  const [editMode, setEditMode] = useState(false);

  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  const filteredTodos = useMemo(() => {
    switch (filterType) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "uncompleted":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }, [filterType, todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      setError("Todo cannot be empty!");
      return;
    }
    dispatch(addTodo(todo.trim()));
    setTodo("");
    setError("");
  };

  const handleEdit = (todoId, text) => {
    setEditId(todoId);
    setTodoText(text);
    setEditMode(true);
  };

  const handleSaveTodo = (e) => {
    e.preventDefault();
    if (!todoText.trim()) {
      setError("Todo cannot be empty!");
      return;
    }
    dispatch(editTodo({ todoId: editId, todoText: todoText.trim() }));
    setEditId("");
    setTodoText("");
    setEditMode(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5 p-4 w-full max-w-4xl mx-auto">
      <form onSubmit={handleAddTodo} className="flex w-full max-w-lg border border-black rounded-lg min-h-[50px] shadow-md flex-col sm:flex-row">
        <input
          className="flex-1 px-4 text-lg focus:outline-none w-full sm:w-auto"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit" className="px-4 py-2 border-t sm:border-l sm:border-t-0 border-black bg-gray-100 hover:bg-gray-200 transition w-full sm:w-auto">ADD</button>
      </form>
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="w-full max-w-lg">
        {todos.length > 0 && (
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">Todo List</h1>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border rounded-md p-1 text-sm"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Pending</option>
            </select>
          </div>
        )}

        <div className="max-h-[500px] overflow-auto space-y-2">
          {filteredTodos.map((t) => (
            <div
              key={t.todoId}
              className={`p-3 rounded-md flex flex-col sm:flex-row justify-between items-center transition-colors shadow-md ${t.completed ? "bg-green-100" : "bg-red-100"}`}
            >
              {editMode && editId === t.todoId ? (
                <form onSubmit={handleSaveTodo} className="flex w-full gap-3">
                  <input
                    ref={inputRef}
                    className="flex-1 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                  />
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save</button>
                </form>
              ) : (
                <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-3">
                  <p className={`text-lg break-words max-w-full sm:max-w-[60%] ${t.completed ? 'line-through text-gray-600' : ''}`}>
                    {t.todoText}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <button onClick={() => dispatch(deleteTodo(t.todoId))} className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 w-full sm:w-auto">Delete</button>
                    <button onClick={() => handleEdit(t.todoId, t.todoText)} className="px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 w-full sm:w-auto">Edit</button>
                    <button onClick={() => dispatch(completeTodo(t.todoId))} className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 w-full sm:w-auto">{t.completed ? "Undo" : "Done"}</button>
                  </div>
                </div>
              )}
            </div>
          ))}
          {!filteredTodos.length && (
            <p className="text-center text-gray-500 mt-4">{todos.length ? "No todos match the current filter" : "No todos yet"}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;



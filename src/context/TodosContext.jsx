/********************** 
This is the context of the app
It handles all the variable changes instead of prop drilling
**************************/

//  'useContext' useful to export a function that returns the equivalent we can 
// now call in every consuming component

// any action that modifies a state outside a component scope is a side effect
// and must isolate inside a useEffect Hook.

import { 
    createContext, 
    useContext,
    useState, 
    useEffect  
} from 'react';

//random ids package called UUID (Universal Unique Identifier)
import { v4 as uuidv4 } from "uuid";


const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState(getInitialTodos());

    function getInitialTodos(){
      //get stored items
      const temp = localStorage.getItem('todos');
      const savedTodos = JSON.parse(temp);
      return savedTodos || [];
    }

    useEffect(() => {
      // storing todo items
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos',temp);
    }, [todos]);


    const addTodoItem = (title => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false,
      };
      setTodos([...todos,newTodo])

    })

    const delTodo = (id) => {
      setTodos([
        //the "..." part creates a copy of the todos list, not the original todos
        ...todos.filter((todo) => {
          return todo.id !== id;
        }),
      ]),
      console.log("deleted", id);
    };


    const handleChange = (id) => {
      console.log("clicked " + id);
      setTodos((prevState)=>
        prevState.map((todo) => {
          if(todo.id===id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      );
    };


    const setUpdate = (updatedTitle, id) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.title = updatedTitle;
          }
          return todo;
        })
      );
    };
  

  
  return (
    <TodosContext.Provider 
      value={{
        todos, 
        handleChange,
        delTodo,
        addTodoItem,
        setUpdate,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodosContext);




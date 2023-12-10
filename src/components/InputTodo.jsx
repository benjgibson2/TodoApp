
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"
import { useTodosContext } from "@/context/TodosContext";


const InputTodo = () => {
    const {addTodoItem} = useTodosContext();
    
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');


    const handleChange = (e) => {
        setTitle(e.target.value);
    };


    const handleSubmit= (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTodoItem(title);
            setTitle(''); //clear the input field for subsequent entry
            console.log(title);
            setMessage('')
        } else{
            setMessage('Please add item')
        }
      };
  

    return (
        
        // adding <> and </> is needed when there is more than one JSX
        <> 
            <form onSubmit={handleSubmit} className="form-container">
                <input 
                    className="input-text"
                    type="text" 
                    placeholder = "add todo..." 
                    value={title}
                    onChange={handleChange} 
                />
                <button className="input-submit">
                <FaPlusCircle
                    style={{
                    color: '#5e5e5e',
                    fontSize: '20px',
                    marginTop: '2px',
                    }}
                />
                </button>

            </form>
            <span className="submit-warning">{message}</span>
        </>
    );
};

export default InputTodo;


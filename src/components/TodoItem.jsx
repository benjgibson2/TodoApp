import { useState, useRef } from 'react';

//icons
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { IconContext } from "react-icons"
import { useTodosContext } from '@/context/TodosContext';
import { useAuthContext } from '@/context/AuthContext';

//styles
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp }) => {
  const {user} = useAuthContext();

  // instead of passing them directly from parent, grab them from the context store
  const {handleChange, delTodo, setUpdate } = useTodosContext();

  //const [updateInput, setUpdateInput] = useState(itemProp.title);

  const editInputRef = useRef(null);

  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };


  //on pressing enter, leave edit state
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }


  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {user && (
          <button onClick={handleEditing} > 
            <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
          </button>
        )}
        <button onClick={() => delTodo(itemProp.id)}>
          <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
        <span  //this is the actual non-editable task item
          style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input  //The editing text input field. Sends updates 
        type = "text"
            //The edit Ref is important as it means no re-render 
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={styles.textInput}
        style={editMode}
            // below sends the new value to Tomorrow Logic
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;

  
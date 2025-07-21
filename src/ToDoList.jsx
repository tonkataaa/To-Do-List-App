import React, {useState} from 'react';


function ToDoList(){
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        setTask(t => [...t, newTask]);
        setNewTask("");
    }

    function deleteTask(index){
        setTask(task.filter((_, i) => i !== index));
    }

    function moveTaskUp(index){
        if (index != 0) {
            const updatedTaks = [...task];
            [updatedTaks[index], updatedTaks[index - 1]] = [updatedTaks[index - 1], updatedTaks[index]];
            setTask(updatedTaks);
        }

    }

    function moveTaskDown(index){
        if (index < task.length -1) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] = 
            [updatedTask[index + 1], updatedTask[index]];

            setTask(updatedTask);
        }
    }


    return(
    <>
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input 
                    type ="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}/>

                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>
                {task.map((tasks, index) => 
                <li key={index}>
                    <span className="tags">{tasks}</span>
                    <button className="delete-button" 
                            onClick={() => deleteTask(index)}>
                        Delete
                    </button>

                    <button className="move-button" 
                            onClick={() => moveTaskUp(index)}>
                        Up
                    </button>

                    <button className="move-button" 
                            onClick={() => moveTaskDown(index)}>
                        Down
                    </button>
                </li>
                )}
                
            </ol>
        </div>
    </>)
}

export default ToDoList
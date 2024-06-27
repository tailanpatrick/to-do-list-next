
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return <>
        {       
        tasks.map(task => <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} key={task.id}/>
        )
        
        }
    </>
        
}

export default Tasks;
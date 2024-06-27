import React, { useState } from 'react';
import { CgCheck, CgClose, CgPen, CgTrash } from 'react-icons/cg';

import './Task.css';
import './Button.css';
import { updateTask } from '@/services/pocketbase/update-task';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.title);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedText(task.title); // Restaurar o texto original da tarefa
    };

    const handleConfirmEdit = async () => {
        task.title = editedText;

        setIsEditing(false);

        await updateTask(task);
    };

    const handleInputChange = (e) => {
        setEditedText(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleConfirmEdit();
        } else if (e.key === 'Escape') {
            handleCancelEdit();
        }
    };

    return (
        <div
            className={`task-container`}
            style={task.completed ? { borderLeft: '6px solid chartreuse'} : {}}
        >
            {isEditing ? (
                <input
                    type='text'
                    className='add-task-input'
                    style={{
                        border: '1px solid chartreuse',
                        maxWidth: '58%'
                    }}
                    value={editedText}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            ) : (
                <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                    {task.title}
                </div>
            )}

            <div className='buttons-container'>
                {isEditing ? (
                    <>
                        <button className='remove-task-button' style={{ fontSize: '35px' }} onClick={handleConfirmEdit}>
                            <CgCheck />
                        </button>
                        <button className='remove-task-button' onClick={handleCancelEdit}>
                            <CgClose />
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className='remove-task-button'
                            onClick={handleEditClick}
                        >
                            <CgPen />
                        </button>

                        <button
                            className='remove-task-button'
                            onClick={() => handleTaskDeletion(task.id)}
                        >
                            <CgTrash/>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Task;

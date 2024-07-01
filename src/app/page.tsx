"use client"
import React, { useEffect, useState } from "react";


import Tasks from "@/components/Tasks";
import AddTask from "@/components/AddTask";
import { TaskProps } from "@/types/types";
import { getTasks } from "@/services/pocketbase/list-tasks";
import { createTask } from "@/services/pocketbase/create-task";
import { updateTask } from "@/services/pocketbase/update-task";
import { deleteTask } from "@/services/pocketbase/delete-task";
import Header from "@/components/Header";
import { getUserId, isLoggedIn } from "@/services/pocketbase/auth";

import './globals.css'
import "./App.css";
import Login from "@/components/Login";

const Home = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const checkAuthAndFetchTasksfetchTasks = async () => {

      try {
        setIsAuthenticated(await isLoggedIn());
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.log('Erro ao buscar tarefas. Tente novamente mais tarde.');
      }

    };

    checkAuthAndFetchTasksfetchTasks();
  }, []);

  const handleTaskClick = async (taskId: string) => {
    try {
      let updatedTask = {
        title: '',
        completed: false,
        userId: ''
      } as TaskProps;

      const updatedTasks = await Promise.all(
        tasks.map(async (task) => {
          if (taskId === task.id) {
            updatedTask = { ...task, completed: !task.completed };
            return updatedTask;
          }
          return task;
        })
      );
      
      setTasks(updatedTasks);
      await updateTask(updatedTask);
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      // Trate o erro conforme necessário
    }
  };

  const handleTaskAddition = async (taskTitle: string) => {
    if (taskTitle === '') return;

    const newTask: TaskProps = {
      title: taskTitle,
      completed: false
    };

    try {
      const createdTask: TaskProps = await createTask(newTask);
      setTasks(prevTasks => [...prevTasks, createdTask]);
    } catch (error) {
      console.log('Erro ao criar tarefa. Tente novamente mais tarde.');
    }
  }

  const handleTaskDeletion = async (taskId: string) => {
    try {
      const newTasks = tasks.filter((task: TaskProps) => taskId !== task.id) as TaskProps[];

      setTasks(newTasks);

      await deleteTask(taskId);
    } catch (e) {
      console.log('Erro ao excluir tarefa', e);
    }
  }


  return (
    <div className="container">
      <Header />


      {isAuthenticated ? (

        <>
          <AddTask handleTaskAddition={handleTaskAddition} />

          <Tasks tasks={tasks}
            handleTaskClick={handleTaskClick}
            handleTaskDeletion={handleTaskDeletion} />
        </>

      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  )
};

export default Home;

"use client";
import React, { useState, useCallback } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Task } from './types';
import { useRouter } from 'next/navigation';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback((newTask: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text: newTask }]);
  }, []);

  const removeTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const router = useRouter()

  return (
    <><button type="button" onClick={() => router.replace('/Login')}
      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
        ログアウト
    </button>
      <div className="container mx-auto p-4 max-w-md">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-4">タスク管理アプリ</h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} removeTask={removeTask} />
        </div>
      </div></>
  );
};

export default App;
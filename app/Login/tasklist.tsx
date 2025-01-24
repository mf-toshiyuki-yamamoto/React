import React from 'react';

export interface Task {
    id: number;
    text: string;
  }

interface TaskListProps {
  tasks: Task[];
  removeTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, removeTask }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
          <span>{task.text}</span>
          <button
            onClick={() => removeTask(task.id)}
            className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            削除
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
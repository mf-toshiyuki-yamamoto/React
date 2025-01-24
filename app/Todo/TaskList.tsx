import React, { useState } from 'react';
import { Task } from './types';
import { Card, TextField, Checkbox, IconButton, Typography } from '@mui/material';

interface TaskListProps {
  task: {
    id: number;
    text: string;
    isEditing: boolean;
    isCompleted: boolean;
};
  removeTask: (id: number) => void;
  toggleComplete: (id: number) => void;
  startEditing: (id: number) => void;
  cancelEditing: (id: number) => void;
  saveEdit: (id: number, newText: string) => void;
}


// const handleEdit = (id: number, text: string) => {
//   setTodos((todos) => {
//     const newTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.text = text;
//       }
//       return todo;
//     });
//     // todos ステートを更新
//     return newTodos;
//   });
// };


const TaskList: React.FC<TaskListProps> = ({ task, removeTask, toggleComplete, startEditing, cancelEditing, saveEdit}) => {
const [editText, setEditText] = useState(task.text);

return (
    <ul className="space-y-2">
         <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 0' }}>
         <Checkbox checked={task.isCompleted} onChange={() => toggleComplete(task.id)} />
      {task.map((task) => (
        <li key={task.id} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
          <span>{task.text}</span>
        {task.isEditing ? (
        <TextField value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <Typography sx={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>{task.text}</Typography>
      )}
           <div>
        {task.isEditing ? (
         <>
          <button onClick={() => saveEdit(task.id, editText)}/>
          <button onClick={() => cancelEditing(task.id)}/>
          </>
        ) : (
          <button onClick={() => startEditing(task.id)}/>
        )}
      </div> 
           <button
            onClick={() => removeTask(task.id)}
            className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"/>
            削除
          <button
            onClick={() => removeTask(task.id)}
            className="px-2 py-1 bg-stone-400 text-white rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-red-500"/>
            コメント
        </li>
      ))}
    </ul>
  );
};


export default TaskList;
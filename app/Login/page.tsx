"use client";
import Login from './login';
import { useRouter } from "next/navigation";
import TaskForm from './taskform';
import TaskList, { Task } from './tasklist';
import React, { useState, useCallback } from 'react';


// ユーザー情報の型定義
type User = {
  email: string;
  password: string;
};

// サンプルユーザーデータ（実際にはデータベース等から取得する）
const sampleUser: User = {
  email: 'test@example.com',
  password: 'test'
};

// // 最初に表示されている遷移元ページ
// const Home = () => {
//    return (
//      <div>
//        <h1>
//          元ページ
//        </h1>
//        <Link to="/Senni">遷移</Link>
//      </div>
//    )
// }

//遷移先
// const Senni = () => {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   const addTask = useCallback((newTask: string) => {
//     setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text: newTask }]);
//   }, []);

//   const removeTask = useCallback((id: number) => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
//   }, []);
//   return (
//     <div>
//       <h1>
//         遷移しました。
//       </h1>
//       <div className="container mx-auto p-4 max-w-md">
//         <div className="bg-white shadow-md rounded-lg p-6">
//            <h1 className="text-2xl font-bold text-center mb-4">タスク管理アプリ</h1>
//            <TaskForm addTask={addTask} />
//            <TaskList tasks={tasks} removeTask={removeTask} />
//         </div>
//       </div>
//     </div>
//   )
// }


//ログイン画面：emailとpasswordを入力する
//入力された値と事前に入力してあるサンプルユーザデータと比較する
const App: React.FC = () => {
  const router = useRouter();
  const handleLogin = (email: string, password: string) => {
    if (email === sampleUser.email && password === sampleUser.password) {
      console.log(true);
      router.push("/Todo"); 
      alert('ログインしました！')
  } else {
      console.log(false);
      alert('入力した情報が間違っています！')
  }

  };
  return (
    <><div className="container mx-auto p-4 max-w-md">
         <div className="bg-white shadow-md rounded-lg p-6">
           <Login onSubmit={handleLogin} />
      </div>
      </div>
  </>
  );
};

export default App;




// // TypeScriptでのDOM要素の取得
// const button = document.getElementById('showPopup') as HTMLButtonElement;
// const popup = document.getElementById('popup') as HTMLDivElement;

// // ポップアップを初めに非表示に設定
// popup.style.display = 'none';

// // ボタンクリック時のイベントハンドラ
// button.addEventListener('click', () => {
//     // 特定の条件（ここではテキストボックスに'open'と入力されているか）をチェック
//     const textboxValue = (document.getElementById('textbox') as HTMLInputElement).value;
//     if (textboxValue === 'open') {
//         popup.style.display = 'block';
//     }
// });
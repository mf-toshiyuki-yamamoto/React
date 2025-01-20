"use client";
import React, { useState } from 'react';


interface LoginProps {
  onSubmit: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    //onSubmitのデータ型を確認する、function型出ない場合は型をconsoloe.logで出力する
    if (typeof onSubmit === "function"){
      onSubmit(email, password);
      
    }
    else{
      console.log(typeof onSubmit);
    }
  };
  
  //return文が実行されると、関数の実行を終了して与えられた式が返り値となる//
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold text-center mb-4">ログイン</h3>
      <label>
        <h4>メールアドレス
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </h4>
      </label>
      <label>
        <h4>パスワード
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </h4>
      </label>
      <button 
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">ログイン</button>
    </form>
  );

};

export default Login;
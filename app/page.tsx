import { NextPage } from 'next';
import React from 'react';

//interface宣言でPropsの型を宣言する
interface WelcomeProps {
  name: string;
}


// Welcomeコンポーネント
const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return <h1>{name}さん、ようこそ！</h1>;
};


// ページコンポーネント
const Home: NextPage = () => {

  const userName = '太郎';

  return (
   <Welcome name={userName} />
  );

};

export default Home;
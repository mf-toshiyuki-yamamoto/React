import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <><div style={styles.container}>
      <h1 style={styles.title}>Welcome to TodoApp Homepage</h1>
      <p style={styles.description}>This is a simple home screen created with React & TypeScript.</p>
      <Link href="/Login">▶ログイン</Link>
    </div>
    </>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

export default  Home;
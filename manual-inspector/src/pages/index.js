import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <main className={styles.hero}>
        <h1>Manual del Inspector de Elementos</h1>
        <p>Explora las herramientas de desarrollo del navegador</p>
      </main>
    </Layout>
  );
}
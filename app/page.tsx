'use client';

import styles from "./page.module.css";

import  "@workday/canvas-tokens-web/css/base/_variables.css";
import  "@workday/canvas-tokens-web/css/brand/_variables.css";
import  "@workday/canvas-tokens-web/css/system/_variables.css";

import AddForm from "./addForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <AddForm />
    </main>
  );
}

import React from 'react';
import { Header } from './Header';
import Counter from './Counter';

export default function Page() {
  const name = 'Reza';
  return (
    <>
      <Header name={name} />
      <p>Paragraf</p>
      <Counter />
    </>
  );
}

import React from 'react';
import { Header } from './Header';

export default function Page() {
  const name = 'Reza';
  return (
    <>
      <Header name={name} />
      <p>Hai</p>
    </>
  );
}

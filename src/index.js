import React from 'react';
import ReactDOM from 'react-dom/client';

function Header() {
  const clock = Date().toLocaleString();
  return <h1>Hello {clock}</h1>;
}

function Page() {
  return (
    <>
      <Header />
      <p>Hai</p>
    </>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

setInterval(function () {
  root.render(Page());
}, 1000);

import React from 'react';
import ReactDOM from 'react-dom/client';

function Header(props) {
  const clock = Date().toLocaleString();
  return <h1>Hello {props.name} {clock}</h1>;
}

function Page() {
  const name = 'Reza'
  return (
    <>
      <Header name={name} />
      <p>Hai</p>
    </>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

setInterval(function () {
  root.render(Page());
}, 1000);

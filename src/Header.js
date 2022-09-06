import React from 'react';

export function Header(props) {
  const [clock, setClock] = React.useState(Date().toLocaleString());
  setInterval(() => {
    setClock(Date().toLocaleString());
  }, 1000);

  return (
    <h1>
      Hello {props.name} {clock}
    </h1>
  );
}

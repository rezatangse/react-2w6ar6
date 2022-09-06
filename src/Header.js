import React from 'react';

export function Header(props) {
  const clock = Date().toLocaleString();
  return (
    <h1>
      Hello {props.name} {clock}
    </h1>
  );
}

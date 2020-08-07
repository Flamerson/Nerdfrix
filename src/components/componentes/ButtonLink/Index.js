import React from 'react';

// função que chama os botões para funcionar.
function ButtonLink(props) {
  // props recebe algo de outros locais => ==> <===
  // props => ClassName ( algo passado para ele.)
  return (
    <a href={props.to} className={props.className}>
      {props.children}
    </a>
  );
}

// exportando o butão para outros cantos
export default ButtonLink;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PaggeDefault/Index';
import FormField from '../../../components/formField/index';
// função que cadastra a porra do nome que quero colocar na tela
function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descrição: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handlechange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    console.log('Hello World');
    const URL_Top = 'http://localhost:8080/categorias/';
    fetch(URL_Top)
      .then(async (ReturnToServer) => {
        const Resposta = await ReturnToServer.json();
        setCategorias(Resposta);
        return;
      });
  });

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de Categoria:
          {values.nome}
        </h1>
        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias, values,
          ]);

          setValues(valoresIniciais);
        }}
        >
          <FormField
            label="nome da Categoria"
            type="text"
            value={values.nome}
            name="nome"
            onchange={handlechange}
          />
          <FormField
            label="descrição"
            type="textarea"
            value={values.descrição}
            name="descrição"
            onchange={handlechange}
          />
          <FormField
            label="cor"
            type="color"
            value={values.cor}
            name="cor"
            onchange={handlechange}
          />

          <button to="/">
            Cadastrar
          </button>

          {categorias.length === 0 && (
          <div>
            loading...
          </div>
          )}
        </form>

        <ul>
          {categorias.map((categoria, indice) => (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          ))}
        </ul>
        <Link to="/">
          Return to Home
        </Link>
      </PageDefault>

    </>
  );
}

export default CadastroCategoria;

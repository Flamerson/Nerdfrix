import React, { useState } from 'react';
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
          {/* <div>
                <label>nome da categoria:
                <input type="text"
                name="nome"
                value={values.nome}
                onChange={handlechange}
                />
                </label>

           </div> */}
          {/* <div>

                <label>categoria
                    <textarea type="text"
                    name='descrição'
                    value={values.descrição}
                    onChange={handlechange}
                    />
                </label>
</div> */}
          {/* <div>

                <label>cor
                    <input type="color"
                    name='cor'
                    value={values.cor}
                    onChange={handlechange}
                    />

                </label>
</div> */}
          <button to="/">
            Cadastrar
          </button>

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

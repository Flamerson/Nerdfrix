import React, { useState } from 'react';
import PageDefault from '../../../components/PaggeDefault/Index';
import { Link } from 'react-router-dom';
//função que cadastra a porra do nome que quero colocar na tela
function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descrição:'' ,
        cor:'' ,
    }
    const [categorias , setCategorias] = useState([]);
    const [values , setValues ] = useState(valoresIniciais);
    
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, // nome: 'valor'
        })
    }

    function handlechange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        )
    }

    return(
        <>
        <PageDefault>
    <h1>Cadastro de Categoria: {values.nome} </h1>
            <form onSubmit={ function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias, values
                ]);

                setValues(valoresIniciais)
            }
        } >
            <div>
                <label>nome da categoria:
                <input type="text" 
                name="nome"
                value={values.nome}
                onChange={handlechange} 
                />
                </label>

            </div>
<div>

                <label>categoria
                    <textarea type="text"
                    name='descrição'
                    value={values.descrição}
                    onChange={handlechange}
                    />
                </label>
</div>
<div>

                <label>cor
                    <input type="color"
                    name='cor'
                    value={values.cor}
                    onChange={handlechange}
                    />

                </label>
</div>
                <button to="/" >
                    Cadastrar
                </button>
                    
            </form>

            <ul>
                {categorias.map((categoria, indice)=> {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
            <Link to="/" >
                Return to Home
            </Link>
        </PageDefault>
        
        </>
    )
}

export default CadastroCategoria;
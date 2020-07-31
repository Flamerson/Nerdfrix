import React, { useState } from 'react';
import PageDefault from '../../../components/PaggeDefault/Index';
import { Link } from 'react-router-dom';
//função que cadastra a porra do nome que quero colocar na tela
function CadastroCategoria() {
    const [categorias , setCategorias] = useState(['qualquer']);
    const [nomeDaCategoria , setNomeDaCategoria] = useState('Filmes');

    return(
        <>
        <PageDefault>
    <h1>Cadastro de Categoria: {nomeDaCategoria} </h1>
            <form onSubmit={ function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias, nomeDaCategoria
                ])
            }
        } >
            <div>
                <label>nome da categoria:
                <input type="text" 
                value={nomeDaCategoria}
                onChange={function funçãohandler(infosDoEvento){
                    //evento que faz o nome aparecer na tela apos ser digitado :)
                    setNomeDaCategoria(infosDoEvento.target.value);
                } }
                />
                </label>

            </div>
<div>

                <label>categoria
                    <textarea type="text"
                    value={nomeDaCategoria}
                    onChange={function funçãohandler(infosDoEvento){
                        setNomeDaCategoria(infosDoEvento.target.value);
                    }}
                    />
                </label>
</div>
<div>

                <label>cor
                    <input type="color"
                    value={nomeDaCategoria}
                    onChange={function funçãohandler(infosDoEvento){
                        setNomeDaCategoria(infosDoEvento.target.value);
                    }}
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
                            {categoria}
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
import React from 'react';
import PageDefault from '../../../components/PaggeDefault/Index';
import { Link } from 'react-router-dom';

function CadastroCategoria() {

    return(
        <>
        <PageDefault>
            <h1>Cadastro de Categoria</h1>
            <form>
                <label>nome da categoria:
                <input type="text" />
                </label>
                <button to="/" >
                    Cadastrar
                </button>
                    
            </form>
            <Link to="/" >
                Return to Home
            </Link>
        </PageDefault>
        
        </>
    )
}

export default CadastroCategoria;
import React from 'react';
import PageDefault from '../../../components/PaggeDefault/Index';
import { Link } from 'react-router-dom';

function CadastroCategoria() {

    return(
        <>
        <PageDefault>
            <h1>Cadastro de Categoria</h1>
            <Link to="/" >
                Return to Home
            </Link>
        </PageDefault>
        
        </>
    )
}

export default CadastroCategoria;
import React from 'react';
import PageDefault from '../../../components/PaggeDefault/Index';
import {Link} from 'react-router-dom';

function CadastroVideo() {
        return(
            
            <>
                <PageDefault>
                  <h1> Cadastro De Video</h1>
                  <Link to='/cadastro/categoria' >           
                  Cadastras Categoria
                  </Link>
                </PageDefault>
    </>
            )
}

export default CadastroVideo;
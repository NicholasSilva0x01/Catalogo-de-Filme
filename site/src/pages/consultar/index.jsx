import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'

import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify'

import './index.scss'
import { useNavigate } from 'react-router-dom'


export default function Index() {
    const navigate = useNavigate();

    return (
        <main className='page page-consultar'>
            <Menu selecionado='consultar' />
            <div className='container'>
                <Cabecalho />
                
                <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar filmes por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                        <img src='/assets/images/icon-buscar.svg' alt='buscar' onClick={filtrar} />
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>IDENTIFICAÇÃO</th>
                                <th>FILME</th>
                                <th>AVALIAÇÃO</th>
                                <th>LANÇAMENTO</th>
                                <th>DISPONÍVEL</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>                            
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </main>
    )
}


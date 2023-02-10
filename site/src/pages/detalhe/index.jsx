import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'
import Detalhe from '../../components/detalhe'
import './index.scss'

export default function Index() {
    return (
        <main className='page page-detalhe'>
            <Menu />
            <div className='container'>
                <Cabecalho />
                
                <div className='conteudo'>
                    <Detalhe />
                </div>
            </div>
        </main>
    )
}


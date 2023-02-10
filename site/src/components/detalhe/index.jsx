
import { buscarImagem } from '../../api/filmeApi'
import './index.scss';

export default function Index(props) {

    return (
        <div className='comp-detalhe'>
            <img src={buscarImagem(props.filme.imagem)} alt='' />
            <div className='box-info'>
                <h1> {props.filme.nome} </h1>
                <div className='info'>
                    <h3>Lançamento</h3>
                    <p>{props.filme.lancamento && props.filme.lancamento.substr(0, 10)}</p>
                </div>
                <div className='info'>
                    <h3>Sinopse</h3>
                    <p className='sinopse'> {props.filme.sinopse} </p>
                </div>
                <div className='info'>
                    <h3>Avaliação</h3>
                    <p> {props.filme.avaliacao}</p>
                </div>
                <div className='info'>
                    <h3>{props.filme.disponivel ? 'Disponível' : 'Indisponível'}</h3>
                </div>
            </div>
        </div>
    )
}
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import './index.scss'


export default function Index() {
    return (
        <main className='page page-login'>
            <LoadingBar color='#f11946' ref={ref} />

            <section className="box-login">

                <div className="bem-vindo">
                    <img src="/assets/images/logo.svg" alt="logo" />
                    <h1> Seja Bem-vindo!</h1>
                </div>

                <div>
                    <div className='form-row'>
                        <label>E-mail:</label>
                        <input type='text' placeholder='Informe seu e-mail'/>
                    </div>
                    <div className='form-row'>
                        <label>Senha:</label>
                        <input type='password' placeholder='***' />
                    </div>
                    <div className='form-entrar'>
                        <button className='btn-black'>ENTRAR</button> 
                    </div>
                    <div className='form-entrar invalido'>
                        {erro}
                    </div>
                </div>

            </section>
        </main>
    )
}


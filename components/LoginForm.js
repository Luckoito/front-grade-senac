import Styles from '../styles/Painel.module.css'
import Image from 'next/image'
import Logo from './assets/logo.png'

export default function LoginForm () {



    return (
        <>

            <div className={Styles.Painel}>
                
                <Image
                    className={Styles.PainelLogo}
                    src={Logo}
                    height={150}
                    width={220}
                    alt='Logo SENAC'
                />

                <div className={'flexColumn '+Styles["painelInfo"]}>
                    <h3>Grade Horária</h3>
                    <h5>Faculdade SENAC - DF</h5>
                </div>
                <div className={'flexColumn '+Styles.painelContent}>

                    <h3>Bem vindo(a)!</h3>

                    <form className='flexColumn'>
                        <label for='username'>Usuário</label>
                        <input type='text'name='username' ></input>
                        <label for='password'>Senha</label>
                        <input type='password' name='password'></input>
                    </form>

                    <button className={Styles.confirmButton}>Entrar</button>

                    <div className={'flexRow '+Styles.helpLinks}>
                        <p className='linkText' id='forgotPassword'>Esqueci a Senha</p>
                        <p className='linkText' id='createAccount'>Criar conta</p>
                    </div>

                </div>

            </div>
        </>
    )
}
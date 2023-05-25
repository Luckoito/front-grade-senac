import styles from '../styles/PainelLogin.module.css'
import Image from 'next/image'
import Logo from './assets/logo.png'

export default function PainelLogin () {
    return (
        <>

            <div className={styles.Painel}>
                
                <Image
                    className={styles.PainelLogo}
                    src={Logo}
                    height={150}
                    width={220}
                    alt='Logo SENAC'
                />

                <div className={'flexColumn '+styles["loginInfo"]}>
                    <h3>Grade Horária</h3>
                    <h5>Faculdade SENAC - DF</h5>
                </div>
                <div className={'flexColumn '+styles.loginForm}>

                    <h3>Bem vindo(a)!</h3>

                    <form className='flexColumn'>
                        <label for='username'>Usuário</label>
                        <input type='text'name='username' ></input>
                        <label for='password'>Senha</label>
                        <input type='password' name='password'></input>
                    </form>

                    <button className={styles.confirmButton}>Entrar</button>

                    <div className={'flexRow '+styles.helpLinks}>
                        <p className='linkText'>Esqueci a Senha</p>
                        <p className='linkText'>Criar conta</p>
                    </div>

                </div>

            </div>
        </>
    )
}
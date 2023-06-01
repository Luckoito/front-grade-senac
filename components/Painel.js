import Styles from '../styles/Painel.module.css'
import Image from 'next/image'
import Logo from './assets/logo.png'

export default function Painel () {
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



                </div>

            </div>
        </>
    )
}
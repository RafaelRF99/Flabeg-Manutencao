import styles from './Logo.module.css'
import Flabeg from '../../../../public/LogoFlabeg.png'
import Image from 'next/image'

export default function Logo() {
    const tamanho = "45"

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={Flabeg} alt='Flabeg' height={tamanho} width={120} priority />
            </div>
        </div>
    )
}
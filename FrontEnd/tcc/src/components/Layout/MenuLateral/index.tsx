import styles from './MenuLateral.module.css'

import Link from 'next/link'
import { IconeFinalizado, IconeHome, IconeLivro, IconeLogout, IconeServico } from '@/icons'

import Logo from '../Logo'
import IconeLateral from './IconeLateral'

export default function MenuLateral() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}><Logo /></div>
            <div className={styles.meio}>
                <Link href="/">
                    <IconeLateral titulo='Home' icone={IconeHome} />
                </Link>
                <Link href="/lancamento">
                    <IconeLateral titulo='Abertura OS' icone={IconeLivro} />
                </Link>
                <Link href="/servico">
                    <IconeLateral titulo='Serviço' icone={IconeServico} />
                </Link>
                <Link href="/finalizada">
                    <IconeLateral titulo='Finalizada' icone={IconeFinalizado} />
                </Link>
            </div>
            <IconeLateral titulo='Logout' logout={true} icone={IconeLogout} />
        </div>
    )
}
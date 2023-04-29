// CSS
import styles from './FormServico.module.css'
// HOOKS
import { useState } from 'react';
// COMPONENTS
import OrdemAberta from './OrdemAberta';
import OrdemFinalizada from './OrdemFinalizada';

export default function FormServico() {
    const [janela, setJanela] = useState(false)

    function gerar() {
        if (janela === false) {
            return setJanela(true)
        } else {
            return setJanela(false)
        }
    }
    console.log(janela)

    return (
        <div className={styles.container}>
            <OrdemAberta janela={gerar} />
            {janela ? <OrdemFinalizada janela={gerar} /> : ''}
        </div>
    )
}
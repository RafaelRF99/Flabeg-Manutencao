import styles from './FormLancamento.module.css'

import TipoManutencao from "./TipoManutencao"
import InforBase from '../InforBase'
import Solicitante from "./Solicitante"
import DescricaoProblema from "./DescricaoProblema"
import Botao from '../Botao'

export default function FormLancamento() {
    return (
        <form className={styles.container}>
            <TipoManutencao />
            <div className={styles.informacao}>
                <InforBase titulo="Linha" tipo='number' />
                <InforBase titulo="Máquina" tipo='text' />
                <InforBase titulo='Data' tipo='date' />
                <InforBase titulo='Hora' tipo='time' />
            </div>
            <div className={styles.espacamento}>
                <Solicitante />
            </div>
            <div className={styles.espacamento}>
                <DescricaoProblema />
            </div>
            <div className={styles.btn}>
                <Botao>Enviar</Botao>
            </div>
        </form>
    )
}
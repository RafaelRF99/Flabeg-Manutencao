import styles from './FormServico.module.css'
import MaterialGasto from './MaterialGasto';
import ServicoRealizado from "./ServicoRealizado";

export default function FormServico() {
    return (
        <div className={styles.container}>
            <ServicoRealizado />
            <MaterialGasto />
        </div>
    )
}
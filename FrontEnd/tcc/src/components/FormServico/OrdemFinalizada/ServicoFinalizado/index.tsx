import styles from './ServicoFinalizado.module.css'

export default function ServicoFinalizado() {
    return (
        <div>
            <label>Serviço Realizado:</label>
            <textarea className={styles.campo_mg} />
        </div>
    )
}
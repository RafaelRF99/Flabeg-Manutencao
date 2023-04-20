import styles from './Solicitante.module.css'

export default function Solicitante() {
    return (
        <div className={styles.solicitante}>
            <label>Solicitante:</label>
            <input type="text" placeholder="Nome do solicitante..." />
        </div>
    )
}
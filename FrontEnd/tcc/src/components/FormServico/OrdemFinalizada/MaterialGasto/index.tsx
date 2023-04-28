import styles from './MaterialGasto.module.css'

export default function MaterialGasto() {
    return (
        <div>
            <label>Material Gasto</label>
            <textarea className={styles.campo_mg} />
        </div>
    )
}
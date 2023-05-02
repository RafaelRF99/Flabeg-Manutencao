import styles from './MaterialGasto.module.css'

interface MaterialGastoProps {
    material: (value: any) => void
}

export default function MaterialGasto(props: MaterialGastoProps) {
    return (
        <div>
            <label>Material Gasto</label>
            <textarea onChange={props.material} className={styles.campo_mg} />
        </div>
    )
}
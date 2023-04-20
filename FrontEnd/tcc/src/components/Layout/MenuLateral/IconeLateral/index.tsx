import styles from './IconeLateral.module.css'

interface IconeLateralProps {
    titulo: string
    logout?: boolean
    icone?: any
}

export default function IconeLateral(props: IconeLateralProps) {
    const estilo = props.logout ? styles.iconeSair : styles.iconePadrao

    return (
        <div className={estilo}>
            <div className={styles.icone}>{props.icone}</div>
            {props.titulo}
        </div>
    )
}
import styles from './InforBase.module.css'

interface InforBaseProps {
    titulo: string
    tipo: string
}

export default function InforBase(props: InforBaseProps) {

    function tipo() {
        if (props.tipo === "number") {
            return styles.linha
        }

        if (props.tipo === "text") {
            return styles.maquina
        }

        if (props.tipo === "date") {
            return styles.date
        }

        if (props.tipo === "time") {
            return styles.time
        }
    }

    return (
        <span className={styles.container}>
            <span>{props.titulo}</span>
            <div className={styles.descricao}>
                <input className={tipo()} type={props.tipo} />
            </div>
        </span>
    )
}
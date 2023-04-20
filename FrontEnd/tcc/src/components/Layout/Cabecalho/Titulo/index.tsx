import styles from './Titulo.module.css'

interface TituloProps {
    titulo: string
    subtitulo: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div>
            <h1 className={styles.title}>{props.titulo}</h1>
            <h2 className={styles.subtitle}>{props.subtitulo}</h2>
        </div>
    )
}
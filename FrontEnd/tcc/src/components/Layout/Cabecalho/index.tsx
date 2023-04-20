import styles from './Cabecalho.module.css'

import Titulo from "./Titulo";

interface TituloProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: TituloProps) {
    return (
        <div className={styles.container}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
}
import styles from './Layout.module.css'

import Cabecalho from "./Cabecalho";
import Conteudo from './Conteudo';
import MenuLateral from './MenuLateral';

interface LayoutProps {
    titulo: string
    subtitulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={styles.container}>
            <MenuLateral />
            <div className={styles.formatacao}>
                <div className={styles.cabecalho}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                </div>
                <Conteudo>{props.children}</Conteudo>
            </div>
        </div>
    )
}
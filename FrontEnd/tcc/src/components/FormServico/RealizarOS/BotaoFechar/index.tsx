import styles from './BotaoFechar.module.css'

interface BotaoFecharProps {
    janela: any
}

export default function BotaoFechar(props: BotaoFecharProps) {
    return (
        <button className={styles.botao} onClick={props.janela}>X</button>
    )
}
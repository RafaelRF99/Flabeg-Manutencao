import styles from './Botao.module.css'

interface BotaoProps {
    children: string
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    return (
        <button onClick={props.onClick} className={styles.container}>{props.children}</button>
    )
}
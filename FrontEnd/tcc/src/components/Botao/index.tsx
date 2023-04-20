import styles from './Botao.module.css'

interface BotaoProps {
    children: string
}

export default function Botao(props: BotaoProps) {
    return (
        <button className={styles.container}>{props.children}</button>
    )
}
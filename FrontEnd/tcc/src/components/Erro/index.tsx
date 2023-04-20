import styles from './Erro.module.css'

interface ErroProps {
    erro: string
}

export default function Erro(props: ErroProps) {
    return <div className={styles.configuracao}>{props.erro}</div>
}
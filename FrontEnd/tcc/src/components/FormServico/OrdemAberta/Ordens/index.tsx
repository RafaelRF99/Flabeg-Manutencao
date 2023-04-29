import { IconeEdicao } from '@/icons'
import styles from './Ordens.module.css'

interface OrdensProps {
    tarefa: any
    janela: () => void
}

export default function Ordens(props: OrdensProps) {
    return (
        <tr className={styles.ordem}>
            <td>{props.tarefa.data}</td>
            <td>{props.tarefa.tipo}</td>
            <td>{props.tarefa.maquina}</td>
            <td className={styles.descricao}>{props.tarefa.descricao}</td>
            <td><span className={styles.opcao} onClick={props.janela}>{IconeEdicao}</span></td>
        </tr>
    )
}
import styles from './Ordens.module.css'

interface OrdensProps {
    tarefa: any
}

export default function Ordens(props: OrdensProps) {
    return (
        <tr className={styles.ordem}>
            <td>{props.tarefa.data}</td>
            <td>{props.tarefa.tipo}</td>
            <td>{props.tarefa.maquina}</td>
            <td className={styles.descricao}>{props.tarefa.descricao}</td>
            <td className={styles.opcao}>Opcao</td>
        </tr>
    )
}
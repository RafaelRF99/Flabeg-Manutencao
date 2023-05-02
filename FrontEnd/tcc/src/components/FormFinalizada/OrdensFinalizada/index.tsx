import { IconeEdicao } from '@/icons'
import styles from './OrdensFinalizada.module.css'

interface OrdensFinalizadaProps {
    tarefa: any
}

export default function OrdensFinalizada(props: OrdensFinalizadaProps) {
    return (
        <tr className={styles.ordem}>
            <td>{props.tarefa.data}</td>
            <td>{props.tarefa.hora}</td>
            <td>{props.tarefa.tipo}</td>
            <td>{props.tarefa.linha}</td>
            <td>{props.tarefa.solicitante}</td>
            <td>{props.tarefa.maquina}</td>
            <td className={styles.descricao}>{props.tarefa.descricao}</td>
            <td>{props.tarefa.servico}</td>
            <td>{props.tarefa.material}</td>
            <td><span className={styles.opcao}>{IconeEdicao}</span></td>
        </tr>
    )
}
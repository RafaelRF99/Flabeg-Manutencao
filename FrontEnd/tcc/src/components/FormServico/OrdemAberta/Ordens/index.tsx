// CSS
import styles from './Ordens.module.css'
// MODEL
import { ITarefa } from '@/components/model/ITarefa'
// ICONS
import { IconeEdicao } from '@/icons'

interface OrdensProps {
    tarefa: ITarefa
    janela?: () => void
    onClick?: () => void
}

export default function Ordens(props: OrdensProps) {

    function handleClick() {
        if (props.onClick) {
            props.onClick()
        }
    }

    return (
        <tr className={styles.ordem} onClick={handleClick}>
            <td>{props.tarefa.data}</td>
            <td>{props.tarefa.tipo}</td>
            <td>{props.tarefa.maquina}</td>
            <td className={styles.descricao}>{props.tarefa.descricao}</td>
            <td><span className={styles.opcao} onClick={props.janela}>{IconeEdicao}</span></td>
        </tr>
    )
}
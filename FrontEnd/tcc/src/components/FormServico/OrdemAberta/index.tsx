import styles from './OrdemAberta.module.css'
// COMPONENTS
import OrdemCabecalho from './OrdemCabecalho'
import Ordens from './Ordens'
// MODEL
import { ITarefa } from '@/components/model/ITarefa'

interface OrdemAbertaProps {
    janela: () => void
    tarefas: ITarefa[]
    Loading: boolean
    selecao: string
    setSelecao: (e: string) => void
}

export default function OrdemAberta(props: OrdemAbertaProps) {

    function handleOrdemClick(tarefaId: string) {
        props.setSelecao(tarefaId);
    }

    function renderizarOrdens() {
        return props.tarefas.map((tarefa) => {
            return !tarefa.servico ? (
                <Ordens janela={props.janela} key={tarefa._id} tarefa={tarefa} onClick={() => handleOrdemClick(tarefa._id)} />
            ) : null;
        });
    }

    return (
        <div className={styles.container}>
            {props.Loading ? (
                <div>Carregando...</div>
            ) : (
                <table>
                    <OrdemCabecalho />
                    <tbody>
                        {renderizarOrdens()}
                    </tbody>
                </table>
            )}
        </div>
    );
}
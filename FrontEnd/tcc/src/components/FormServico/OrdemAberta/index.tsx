// HOOKS
import { useEffect, useState } from 'react'
// COMPONENTS
import styles from './OrdemAberta.module.css'
import OrdemCabecalho from './OrdemCabecalho'
import Ordens from './Ordens'
// MODEL
import { ITarefa } from '@/components/model/ITarefa';

interface OrdemAbertaProps {
    janela: () => void
}

export default function OrdemAberta(props: OrdemAbertaProps) {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/tarefa')
            .then(response => response.json())
            .then(res => {
                setTarefas(res.tarefa);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar as tarefas:', error);
            });
    }, []);

    function renderizarOrdens() {
        return tarefas.map(tarefa => {
            return <Ordens janela={props.janela} key={tarefa._id} tarefa={tarefa} />
        })
    }

    return (
        <div className={styles.container}>
            {Loading ? (
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
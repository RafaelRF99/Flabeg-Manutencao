// CSS
import styles from './FormFinalizada.module.css'
// COMPONENTS
import OrdensFinalizada from './OrdensFinalizada';
import OrdemCabecalhoFinalizada from './OrdemCabecalhoFinalizada';
// HOOKS
import { useEffect, useState } from 'react';
// MODEL
import { ITarefa } from '@/components/model/ITarefa';

export default function OrdemFinalizada() {
    const [Loading, setLoading] = useState(true);
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);

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
        return tarefas.map((tarefa) => {
            return tarefa.servico ? (
                <OrdensFinalizada key={tarefa._id} tarefa={tarefa} />
            ) : null;
        });
    }

    return (
        <div className={styles.container}>
            {Loading ? (
                <div>Carregando...</div>
            ) : (
                <table>
                    <OrdemCabecalhoFinalizada />
                    <tbody>
                        {renderizarOrdens()}
                    </tbody>
                </table>
            )}
        </div>
    )
}
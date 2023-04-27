// HOOKS
import { useEffect, useState } from 'react'
// COMPONENTS
import styles from './OrdemAberta.module.css'
import OrdemCabecalho from './OrdemCabecalho'
import Ordens from './Ordens'
// MODEL
import { ITarefa } from '@/components/model/ITarefa';

export default function OrdemAberta() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/tarefa')
            .then(response => response.json())
            .then(tarefa => setTarefas(tarefa.tarefa));
    }, []);

    function renderizarOrdens() {
        return tarefas.map(tarefa => {
            return <Ordens key={tarefa._id} tarefa={tarefa} />
        })
    }

    return (
        <div className={styles.container}>
            <table>
                <OrdemCabecalho />
                <tbody>
                    {renderizarOrdens()}
                </tbody>
            </table>
        </div>
    );
}
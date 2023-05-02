// CSS
import styles from './FormServico.module.css'
// HOOKS
import { useEffect, useState } from 'react';
// COMPONENTS
import OrdemAberta from './OrdemAberta';
import OrdemFinalizada from './OrdemFinalizada';
// MODEL
import { ITarefa } from '../model/ITarefa';

export default function FormServico() {
    const [janela, setJanela] = useState(false);
    const [Loading, setLoading] = useState(true);
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [selecaoID, setSelecaoID] = useState('');

    function gerar() {
        if (janela === false) {
            return setJanela(true)
        } else {
            return setJanela(false)
        }
    }

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

    return (
        <div className={styles.container}>
            <OrdemAberta selecao={selecaoID} setSelecao={setSelecaoID} janela={gerar} tarefas={tarefas} Loading={Loading} />
            {janela ? <OrdemFinalizada selecaoID={selecaoID} tarefas={tarefas} janela={gerar} /> : ''}
        </div>
    )
}
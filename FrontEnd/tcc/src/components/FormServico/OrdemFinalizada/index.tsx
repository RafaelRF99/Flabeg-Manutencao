// CSS
import styles from './OrdemFinalizada.module.css'
// COMPONENTS
import BotaoFechar from './BotaoFechar'
import MaterialGasto from './MaterialGasto'
import ServicoFinalizado from './ServicoFinalizado'
// MODEL
import { ITarefa } from '@/components/model/ITarefa'
// HOOKS
import { useEffect, useState } from 'react'

interface OrdemFinalizadaProps {
    janela: () => void
    tarefas: ITarefa[]
    selecaoID: string
}

export default function OrdemFinalizada(props: OrdemFinalizadaProps) {
    const [tarefaID, setTarefaID] = useState<ITarefa>()

    useEffect(() => {
        props.tarefas.map(tarefa => {
            if (tarefa._id === props.selecaoID)
                return setTarefaID(tarefa)
        })
    }, [ordemID])

    function ordemID() {
        return console.log("Ativa!")
    }

    return (
        <div className={styles.container}>
            <div className={styles.area}>
                <BotaoFechar janela={props.janela} />
                <div className={styles.title}>
                    <h1>Realizar Serviço</h1>
                </div>
                <div className={styles.informacao}>
                    <h3>Data:</h3>
                    <p>{tarefaID?.data}</p>
                    <h3>Hora:</h3>
                    <p>{tarefaID?.hora}</p>
                </div>
                <div className={styles.informacao}>
                    <h3>Tipo:</h3>
                    <p>{tarefaID?.tipo}</p>
                    <h3>Linha:</h3>
                    <p>{tarefaID?.linha}</p>
                    <h3>Máquina:</h3>
                    <p>{tarefaID?.maquina}</p>
                </div>
                <div className={styles.descricao}>
                    <h3>Descrição:</h3>
                    <p>{tarefaID?.descricao}</p>
                </div>
                <div className={styles.servicos}>
                    <ServicoFinalizado />
                    <MaterialGasto />
                </div>
                <button onClick={ordemID}>TESTE</button>
            </div>
        </div>
    )
}
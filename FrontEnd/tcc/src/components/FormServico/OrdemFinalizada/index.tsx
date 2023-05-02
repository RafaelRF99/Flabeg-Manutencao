// CSS
import styles from './OrdemFinalizada.module.css'
// COMPONENTS
import BotaoFechar from './BotaoFechar'
import MaterialGasto from './MaterialGasto'
import ServicoFinalizado from './ServicoFinalizado'
import Botao from '../../Botao'
// MODEL
import { ITarefa } from '@/components/model/ITarefa'
import { useEffect, useState } from 'react'

interface OrdemFinalizadaProps {
    janela: any
    tarefas: ITarefa[]
    selecaoID: string
}

export default function OrdemFinalizada(props: OrdemFinalizadaProps) {
    const [servico, setServico] = useState()
    const [material, setMaterial] = useState()
    const [tarefaID, setTarefaID] = useState<ITarefa>()

    useEffect(() => {
        props.tarefas.map(tarefa => {
            if (tarefa._id === props.selecaoID) {
                setTarefaID(tarefa)
            }
        })
        fetch(`http://localhost:5000/tarefa/${props.selecaoID}`)
            .then(res => res.json())
            .catch(error => console.log(error));
    }, [props.janela])

    useEffect(() => {
        
    }, [])

    async function gerar() {
        const tarefaAdicional = {
            servico,
            material
        }
        fetch(`http://localhost:5000/tarefa/${props.selecaoID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tarefaAdicional)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
            props.janela(false)
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
                    <ServicoFinalizado servico={e => setServico(e.target.value)} />
                    <MaterialGasto material={e => setMaterial(e.target.value)} />
                </div>
                <div className={styles.botao}>
                    <Botao onClick={gerar}>Finalizar OS</Botao>
                </div>
            </div>
        </div>
    )
}
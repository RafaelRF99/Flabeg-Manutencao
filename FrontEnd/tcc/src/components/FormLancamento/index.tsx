import styles from './FormLancamento.module.css'

import TipoManutencao from "./TipoManutencao"
import InforBase from '../InforBase'
import Solicitante from "./Solicitante"
import DescricaoProblema from "./DescricaoProblema"
import Botao from '../Botao'
import { useState } from 'react'

export default function FormLancamento() {
    const [tipo, setTipo] = useState()
    const [linha, setLinha] = useState()
    const [maquina, setMaquina] = useState()
    const [data, setData] = useState()
    const [hora, setHora] = useState()
    const [solicitante, setSolicitante] = useState()
    const [descricao, setDescricao] = useState()

    function salvamento(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(tipo)
    }

    return (
        <form className={styles.container} onSubmit={salvamento}>
            <TipoManutencao tipo={setTipo} />
            <div className={styles.informacao}>
                <InforBase titulo="Linha" tipo='number' onChange={(e) => setLinha(e.target.value)} />
                <InforBase titulo="Máquina" tipo='text' onChange={(e) => setMaquina(e.target.value)} />
                <InforBase titulo='Data' tipo='date' onChange={(e) => setData(e.target.value)} />
                <InforBase titulo='Hora' tipo='time' onChange={(e) => setHora(e.target.value)} />
            </div>
            <div className={styles.espacamento}>
                <Solicitante onChange={(e) => setSolicitante(e.target.value)} />
            </div>
            <div className={styles.espacamento}>
                <DescricaoProblema onChange={(e) => setDescricao(e.target.value)} />
            </div>
            <div className={styles.btn}>
                <Botao>Enviar</Botao>
            </div>
        </form>
    )
}
import styles from './FormLancamento.module.css'
//HOOKS
import { useEffect, useState } from 'react'
// COMPONENTS
import TipoManutencao from "./TipoManutencao"
import InforBase from '../InforBase'
import Solicitante from "./Solicitante"
import DescricaoProblema from "./DescricaoProblema"
import Botao from '../Botao'

export default function FormLancamento() {
    const [tipo, setTipo] = useState<number[]>([])
    const [alteracaoTipo, setAlteracaoTipo] = useState('')
    const [linha, setLinha] = useState()
    const [maquina, setMaquina] = useState()
    const [data, setData] = useState()
    const [hora, setHora] = useState()
    const [solicitante, setSolicitante] = useState()
    const [descricao, setDescricao] = useState()

    function salvamento(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const usuario = {
            alteracaoTipo,
            linha,
            maquina,
            data,
            hora,
            solicitante,
            descricao
        }
        console.log(usuario)
    }

    // ATUALIZA O STATE
    useEffect(() => {
        converter(tipo)
    },[tipo])

    function converter(tipo: any[]) {
        if (tipo[0] === 0) {
            return setAlteracaoTipo('Corretiva')
        }
        if (tipo[0] === 1) {
            return setAlteracaoTipo('Preventiva')
        }
        if (tipo[0] === 2) {
            return setAlteracaoTipo('Preditiva')
        }
        if (tipo[0] === 3) {
            return setAlteracaoTipo('Melhoria')
        }
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
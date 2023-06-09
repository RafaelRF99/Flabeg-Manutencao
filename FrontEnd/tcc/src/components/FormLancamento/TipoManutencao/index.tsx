import styles from './TipoManutencao.module.css'
// COMPONENTS
import Erro from '@/components/Erro'
// HOOKS E JSON
import { useEffect, useState } from 'react'
import tipos from './tipos.json'

interface TipoManutencaoProps {
    tipo: any
}

export default function TipoManutencao(props: TipoManutencaoProps) {
    const [escolha, setEscolha] = useState<number[]>([])
    
    useEffect(() => {
        trocaProps()
    },[escolha])
    
    function trocaProps() {
        props.tipo(escolha)
    }

    // RENDERIZA OS TIPOS
    function render() {
        return tipos.map((tipo, i) => {
            return (
                <div key={i}>
                    <input type="checkbox" id={tipo.tipo} onChange={() => mostrarErro(i)} />
                    <label htmlFor={tipo.tipo}>{tipo.tipo}</label>
                </div>
            )
        })
    }

    // LOGICA PARA MOSTRAR ERRO
    function mostrarErro(i: number) {
        setEscolha(escolha => {
            if (escolha.includes(i)) {
                return escolha.filter(e => e !== i)
            } else {
                return [...escolha, i]
            }
        })
    }

    // MOSTRA O ERRO NA TELA
    function tipoSelecionado() {
        if (escolha.length > 1) {
            return <Erro erro='Deixar somente 1 tipo selecionado!' />
        }
    }

    return (
        <div className={styles.container}>
            {render()}
            {tipoSelecionado()}
        </div>
    )
}
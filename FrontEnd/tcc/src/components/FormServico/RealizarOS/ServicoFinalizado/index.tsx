import styles from './ServicoFinalizado.module.css'

interface ServicoFinalizadoProps {
    servico: (value: any) => void
}

export default function ServicoFinalizado(props: ServicoFinalizadoProps) {
    return (
        <div>
            <label>Serviço Realizado:</label>
            <textarea onChange={props.servico} className={styles.campo_mg} />
        </div>
    )
}
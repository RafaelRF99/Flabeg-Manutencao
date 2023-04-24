import styles from './Solicitante.module.css'

interface SolicitanteProps {
    onChange: (e: any) => void
}

export default function Solicitante(props: SolicitanteProps) {
    return (
        <div className={styles.solicitante}>
            <label>Solicitante:</label>
            <input type="text" placeholder="Nome do solicitante..." 
            onChange={props.onChange} />
        </div>
    )
}
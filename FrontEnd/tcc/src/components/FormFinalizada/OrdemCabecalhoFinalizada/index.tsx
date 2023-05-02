import styles from './OrdemCabecalhoFinalizada.module.css'

export default function OrdemCabecalhoFinalizada() {
    return (
        <thead className={styles.cabecalho}>
            <tr>
                <th>Data</th>
                <th>Hora</th>
                <th className={styles.tipo}>Tipo</th>
                <th>Linha</th>
                <th>Solicitante</th>
                <th>Máquina</th>
                <th className={styles.descricao}>Descricao</th>
                <th>Serviço Realizado</th>
                <th>Material Gasto</th>
                <th className={styles.opcao}>Opções</th>
            </tr>
        </thead>
    )
}
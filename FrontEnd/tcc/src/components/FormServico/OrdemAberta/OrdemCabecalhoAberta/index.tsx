import styles from './OrdemCabecalho.module.css'

export default function OrdemCabecalhoAberta() {

    return (
        <thead className={styles.cabecalho}>
            <tr>
                <th>Data</th>
                <th className={styles.tipo}>Tipo</th>
                <th>Máquina</th>
                <th className={styles.descricao}>Descricao</th>
                <th className={styles.opcao}>Opções</th>
            </tr>
        </thead>
    )
}
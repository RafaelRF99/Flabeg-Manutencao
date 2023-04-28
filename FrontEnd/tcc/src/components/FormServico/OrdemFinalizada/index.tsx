import MaterialGasto from './MaterialGasto'
import ServicoFinalizado from './ServicoFinalizado'
import styles from './ServicoRealizado.module.css'

export default function ServicoRealizado() {
    return (
        <div className={styles.container}>
            <div className={styles.area}>
                <div className={styles.title}>
                <h1>Realizar Serviço</h1>
                </div>
                <div className={styles.informacao}>
                    <h3>Data:</h3>
                    <p>23/04/2023</p>
                    <h3>Hora:</h3>
                    <p>17:00</p>
                </div>
                <div className={styles.informacao}>
                    <h3>Tipo:</h3>
                    <p>Corretiva</p>
                    <h3>Linha:</h3>
                    <p>2</p>
                    <h3>Máquina:</h3>
                    <p>Hexapod</p>
                </div>
                <div className={styles.descricao}>
                    <h3>Descrição:</h3>
                    <p>MostrarMostrarMostrarMostrar</p>
                </div>
                <div className={styles.servicos}>
                    <ServicoFinalizado />
                    <MaterialGasto />
                </div>
            </div>
        </div>
    )
}
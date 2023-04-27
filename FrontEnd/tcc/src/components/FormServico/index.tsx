import styles from './FormServico.module.css'
import OrdemAberta from './OrdemAberta';

export default function FormServico() {
    return (
        <div className={styles.container}>
            <OrdemAberta />
        </div>
    )
}
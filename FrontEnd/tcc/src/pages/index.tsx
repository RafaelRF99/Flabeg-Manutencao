import styles from '@/styles/Home.module.css'

import Layout from '@/components/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout titulo='Home' subtitulo='Página Inicial'>
        <h1>Conteudo</h1>
      </Layout>
    </div>
  )
}
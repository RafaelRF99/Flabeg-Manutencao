import OrdemFinalizada from '@/components/FormFinalizada'
import Layout from '@/components/Layout'

export default function Finalizada() {
  return (
    <div>
      <Layout titulo='O.S' subtitulo='Ordem de Serviços finalizadas.'>
          <OrdemFinalizada />
      </Layout>
    </div>
  )
}
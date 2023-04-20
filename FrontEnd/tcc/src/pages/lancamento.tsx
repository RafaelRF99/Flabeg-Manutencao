import FormLancamento from '@/components/FormLancamento'
import Layout from '@/components/Layout'

export default function Livros() {
  return (
    <div>
      <Layout titulo='Lançamento OS' subtitulo='Lançamento de Ordem de Serviços'>
        <FormLancamento />
      </Layout>
    </div>
  )
}
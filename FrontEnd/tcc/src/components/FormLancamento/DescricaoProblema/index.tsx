interface DescricaoProblemaProps {
    onChange: (e: any) => void
}

export default function DescricaoProblema(props: DescricaoProblemaProps) {
    return (
        <div>
            <label>Descrição do Problema</label>
            <textarea className='campo_texto' placeholder="Digite o problema nesse campo..." 
            onChange={props.onChange} />
        </div>
    )
}
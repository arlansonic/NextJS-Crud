interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: String
    valor: any
    somenteLeitura?: boolean
    className?: String
    onChange?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.onChange?.(e.target.value)}
                className={`border border-purple-500 rounded-lg px-4 py-2 focus:outline-none bg-gray-100 ${props.somenteLeitura ? '' : 'focus:bg-white'}`} />

        </div>
    )

}
interface EntranceProps {
    type?: 'text' | 'number'
    text: String
    value: any
    onlyReading?: boolean
    className?: String
    onChange?: (valor: any) => void
}

export default function Prohibited(props: EntranceProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.onlyReading}
                onChange={e => props.onChange?.(e.target.value)}
                className={`border border-purple-500 rounded-lg px-4 py-2 focus:outline-none bg-gray-100 ${props.onlyReading ? '' : 'focus:bg-white'}`} />

        </div>
    )

}
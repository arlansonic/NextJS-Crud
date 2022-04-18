import { useState } from "react";

export default function useTableOrForm() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTable = () => setVisivel('tabela')
    const exibirForm = () => setVisivel('form')

    return {
        formVisible: visivel === 'form',
        tableVisible: visivel === 'tabela',
        exibirTable,
        exibirForm
    }
}
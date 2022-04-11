import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [Idade, setIdade] = useState(props.cliente?.idade ?? 0);
    return (
        <div>
            {id ? (
                <Entrada
                    texto='Código'
                    valor={id}
                    className='mb-4'
                />
            ) : false}

            <Entrada
                texto='Nome'
                valor={nome}
                onChange={setNome}
                className='mb-4'
            />
            <Entrada
                texto='Idade'
                tipo="number"
                valor={Idade}
                onChange={setIdade}
            />
            <div className="mt-7 flex justify-end">
                <Botao cor="blue" className="mr-2">
                    {id ? 'Atualizar' : 'Cadastrar'}
                </Botao>
                <Botao cor="blue">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
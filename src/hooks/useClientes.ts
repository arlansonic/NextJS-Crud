import { useEffect, useState } from "react";
import colecaoCliente from "../Backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTableOrForm from "./UseTableOrForm";


export default function useClientes() {

    const repo: ClienteRepositorio = new colecaoCliente();

    const { tableVisible, formVisible, exibirForm, exibirTable } = useTableOrForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTable()
        })
    }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente)
        exibirForm()
    }

    async function ExluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function newCliente() {
        setCliente(Cliente.vazio())
        exibirForm()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        clienteSelecionado,
        ExluirCliente,
        newCliente,
        salvarCliente,
        obterTodos,
        exibirTable,
        tableVisible,
        formVisible,
    }
}
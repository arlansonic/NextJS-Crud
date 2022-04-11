import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Arlan Marreiro', 27, '1'),
    new Cliente('Katiane Barreto', 30, '2'),
    new Cliente('Apollo Marreiro', 8, '3'),
    new Cliente('Hero Marreiro', 1, '4'),
    new Cliente('Maria Angelita', 52, '5'),
    new Cliente('Arnei Gama', 53, '6'),
    new Cliente('Arlison Marreiro', 22, '7')
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) {
    // console.log(`Excluir: ${cliente.nome}`)
    alert(`Exluir: ${cliente.nome}`)
  }

  function newCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }



  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-t from-blue-500 to-purple-500 text-white`}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className={'mb-4'}
                onClick={newCliente}>
                Novo Cliente
              </Botao>
            </div>

            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}

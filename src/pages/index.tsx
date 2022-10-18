import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    clientes,
    newCliente,
    clienteSelecionado,
    ExluirCliente,
    salvarCliente,
    cliente,
    tableVisible,
    exibirTable,
  } = useClientes()

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-t from-blue-500 to-purple-500 text-white`}>
      <Layout titulo="Cadastro Simples">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className={'mb-4'}
                onClick={newCliente}>
                Novo Cliente
              </Botao>
            </div>

            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={ExluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => exibirTable()}
          />
        )}
      </Layout>
    </div>
  )
}

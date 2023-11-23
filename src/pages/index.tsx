import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {
  const {
    clients,
    newClient,
    clientSelected,
    DeleteCustomer,
    saveClient,
    client,
    displayTable,
    tableVisible,
  } = useClients();

  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-t from-blue-500 to-purple-500 text-white`}
    >
      <Layout title="Simple Registration">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className={"mb-4"} onClick={newClient}>
                New Client
              </Button>
            </div>

            <Table
              clients={clients}
              clientSelected={clientSelected}
              clientDeleted={DeleteCustomer}
            />
          </>
        ) : (
          <Form
            client={client}
            customerChanged={saveClient}
            canceled={() => displayTable()}
          />
        )}
      </Layout>
    </div>
  );
}

import { useEffect, useState } from "react";
import collectionClient from "../Backend/db/CustomerCollection";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import useTableOrForm from "./useTableOrForm";


export default function useClients() {

    const repo: ClientRepository = new collectionClient();

    const { tableVisible, formVisible, displayTable, displayForm } = useTableOrForm()

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            displayTable()
        })
    }

    function clientSelected(client: Client) {
        setClient(client)
        displayForm()
    }

    async function DeleteCustomer(client: Client) {
        await repo.delete(client)
        getAll()
    }

    function newClient() {
        setClient(Client.empty())
        displayForm()
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    }

    return {
        client,
        clients,
        clientSelected,
        DeleteCustomer,
        newClient,
        saveClient,
        getAll,
        displayTable,
        tableVisible,
        formVisible,
    }
}
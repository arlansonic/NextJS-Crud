import firebase from "../config";
import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class collectionClient implements ClientRepository {

    #convert = {
        toFirestore(client: Client) {
            return {
                name: client.name,
                age: client.age,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client {
            const data = snapshot.data(options);
            return new Client(data.name, data.age, snapshot.id);
        }
    }

    async save(client: Client): Promise<Client> {
        if (client?.id) {
            await this.collection().doc(client.id).set(client)
            return client
        } else {
            const docRef = await this.collection().add(client)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async delete(client: Client): Promise<void> {
        return this.collection().doc(client.id).delete()
    }

    async getAll(): Promise<Client[]> {
        const query = await this.collection().get()
        // If there is nothing, it returns an Empty Array
        return query.docs.map(doc => doc.data()) ?? []
    }

    private collection() {
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#convert)
    }
}
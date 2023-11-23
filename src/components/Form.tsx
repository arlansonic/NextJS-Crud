import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Prohibited from "./Prohibited";

interface FormProps {
    client: Client;
    customerChanged?: (client: Client) => void;
    canceled?: () => void;
}

export default function Form(props: FormProps) {
    const id = props.client?.id;
    const [name, setName] = useState(props.client?.name ?? '');
    const [age, setAge] = useState(props.client?.age ?? 0);
    return (
        <div>
            {id ? (
                <Prohibited
                    text='Code'
                    value={id}
                    className='mb-4'
                />
            ) : false}

            <Prohibited
                text='Name'
                value={name}
                onChange={setName}
                className='mb-4'
            />
            <Prohibited
                text='Age'
                type="number"
                value={age}
                onChange={setAge}
            />
            <div className="mt-7 flex justify-end">
                <Button color="blue" className="mr-2" onClick={() => props.customerChanged?.(new Client(name, age, id))}>
                    {id ? 'To Update' : 'Register'}
                </Button>
                <Button onClick={props.canceled}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}
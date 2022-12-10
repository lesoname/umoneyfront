import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('http://192.168.100.4:3000/api/v1/debts/')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        let { id, description, category, price, dueDate, paid} = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('Description', description);
        localStorage.setItem('Category', category);
        localStorage.setItem('Price', price);
        localStorage.setItem('Due Date', dueDate);
        localStorage.setItem('Paid', paid);
    }

    
    return (
        <div>
            <div>
                <h2 className="fs-3">Debt Checker</h2>
            </div>
            <Table singleLine className="text-light">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Due Date</Table.HeaderCell>
                        <Table.HeaderCell>Paid</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.description}</Table.Cell>
                                <Table.Cell>{data.category}</Table.Cell>
                                <Table.Cell>{data.price}</Table.Cell>
                                <Table.Cell>{data.dueDate}</Table.Cell>
                                <Table.Cell>{data.paid.toString()}</Table.Cell>
                                    <Table.Cell>
                                        <Link to='/update'>
                                            <Button onClick={() => setData(data)} className="mt-3 btn btn-primary">Update</Button>
                                        </Link> 
                                    </Table.Cell>
                                <Table.Cell>
                                    <Button className="mt-3 btn btn-danger">Destroy</Button>
                                </Table.Cell>
                            </Table.Row>
                    )})}
                </Table.Body>
            </Table>
        </div>
    )
}
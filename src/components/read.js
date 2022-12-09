import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('https://638ea6b24ddca317d7e3089a.mockapi.io/api/v1/debts/')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
 /* Solve bug of boolean dont show*/ 
    
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
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.description}</Table.Cell>
                                <Table.Cell>{data.category}</Table.Cell>
                                <Table.Cell>{data.price}</Table.Cell>
                                <Table.Cell>{data.dueDate}</Table.Cell>
                                <Table.Cell>{data.paid.toString()}</Table.Cell>
                            </Table.Row>
                    )})}
                </Table.Body>
            </Table>
        </div>
    )
}
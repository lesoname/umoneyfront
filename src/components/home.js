import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

var currencyFormatter = require('currency-formatter');

export default function Home() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:3000/api/v1/debts')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        let { id, description, category, price, due_date, paid} = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('Description', description);
        localStorage.setItem('Category', category);
        localStorage.setItem('Price', price);
        localStorage.setItem('Due Date', due_date);
        localStorage.setItem('Paid', paid);
    }

    const onDelete = (id) => {
        axios.delete(`http://127.0.0.1:3000/api/v1/debts/`+id)
        .then(() => {
            getData();
        })
    }

    const getData = () => {
        axios.get(`http://127.0.0.1:3000/api/v1/debts`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    

    return (
        <div>
            <div>
                <h2 className="fs-3 text-dark">Debt Checker</h2>
            </div>
            <Table singleLine className="text-dark">
                <Table.Header>
                    
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>

                        <Table.HeaderCell>Description</Table.HeaderCell>

                        <Table.HeaderCell>Category</Table.HeaderCell>
                        
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        
                        <Table.HeaderCell>Due Date</Table.HeaderCell>
                        
                        <Table.HeaderCell>Paid</Table.HeaderCell>
                        
                        <Table.HeaderCell>User</Table.HeaderCell>
                        
                        <Table.HeaderCell></Table.HeaderCell>
                        
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>

                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (

                            <Table.Row key={data.id}>
                                
                                <Table.Cell>
                                    {data.id}
                                </Table.Cell>
                                
                                <Table.Cell>
                                    {data.description}
                                </Table.Cell>
                                
                                <Table.Cell>
                                    {data.category}
                                </Table.Cell>
                                
                                <Table.Cell>
                                    {currencyFormatter.format(data.price, {code: 'USD'})}
                                </Table.Cell>
                                
                                <Table.Cell>
                                    {moment.utc(data.due_date).format("MM/DD/YYYY")}
                                </Table.Cell>
                                
                                <Table.Cell >
                                    {String(data.paid)}
                                </Table.Cell>
                                
                                <Table.Cell>
                                    {data.user.name}
                                </Table.Cell>
                                
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button onClick={() => setData(data)}
                                                className="mt-3 btn btn-primary">Update
                                        </Button>
                                    </Link> 
                                </Table.Cell>

                                <Table.Cell>
                                    <Button className="mt-3 btn btn-danger"
                                            onClick={() => onDelete(data.id)}>
                                        Destroy
                                    </Button>
                                </Table.Cell>
                            
                            </Table.Row>
                    )})}
                </Table.Body>

            </Table>
        
        </div>
    )
}
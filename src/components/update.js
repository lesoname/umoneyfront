import React, {useEffect, useState} from 'react';
import {Button, Form} from 'semantic-ui-react'
import axios from 'axios';
import DatePicker from 'react-date-picker';
import { useNavigate } from 'react-router';


export default function Update() {
    const [id, setID] = useState(null);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [due_date, setDueDate] = useState(new Date());
    const [paid, setPaid] = useState('');
    
    let navigate = useNavigate();

    const putData = () => {
        axios.put('http://127.0.0.1:3000/api/v1/debts/'+id, {
            description,
            category,
            price,
            due_date,
            paid
        }).then(() => {
            navigate('/')
        })
    }

    useEffect(() => {
        setID(localStorage.getItem('Id'))
        setDescription(localStorage.getItem('Description'));
        setCategory(localStorage.getItem('Category'));
        setPrice(localStorage.getItem('Price'));
        setDueDate(localStorage.getItem('Due Date'));
        setPaid(localStorage.getItem('Paid'));

    }, []);


    const handleChangeDate = (selectedDate) => {
        setDueDate(selectedDate);
    };

    return (
        <div>

            <div>
                <h2 className="fs-2 mb-3"> Create a debt</h2>
            </div>

            <Form className="create-form">
                
                <Form.Field>
                    <input className="form-control"
                    placeholder='Description'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}/>
                </Form.Field>

                <Form.Field>
                    <input className="mt-3 form-control"
                    placeholder='Category'
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}/>
                </Form.Field>

                <Form.Field>
                    <input className="mt-3 form-control"
                    placeholder='Price'
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}/>
                </Form.Field>

                <Form.Field>
                    <DatePicker
                        className="mt-3 form-control"
                        onChange={handleChangeDate}
                        value={due_date}/>
                </Form.Field>

                <Form.Field>
                    <input className="mt-3 form-control"
                    placeholder='Paid'
                    onChange={(e) => setPaid(e.target.value)}
                    value={paid}/>
                </Form.Field>

                <Button type='submit'
                onClick={putData}
                className="mt-3 btn btn-primary">
                    Submit
                </Button>

            </Form>

        </div>
    )
}


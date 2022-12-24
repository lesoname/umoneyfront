import React, {useEffect, useState} from 'react';
import {Button, Form} from 'semantic-ui-react'
import axios from 'axios';
import DatePicker from 'react-date-picker';
import { useNavigate } from 'react-router';
import moment from 'moment';
import MaskedInput from 'react-text-mask'




export default function Update() {
    const [id, setID] = useState(null);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [due_date, setDueDate] = useState('');
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


    var storedDate = localStorage.getItem('Due Date');
    var date = new Date(storedDate);
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    var formattedDate = month + '/' + day + '/' + year;


    return (
        <div>

            <div>
                <h2 className="fs-2 mb-3"> Update a debt</h2>
            </div>

            <Form className="create-form">
                
                <Form.Field>
                    <input
                        className="form-control"
                        placeholder='Description'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}/>
                </Form.Field>

                <Form.Field>
                    <input
                        className="mt-3 form-control"
                        placeholder='Category'
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}/>
                </Form.Field>

                <Form.Field>
                    <input
                        className="mt-3 form-control"
                        placeholder='Price'
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}/>
                </Form.Field>

                <Form.Field>
                    <MaskedInput
                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                        className="mt-3 form-control"
                        placeholder='Due Date'
                        onChange={(e) => setDueDate(e.target.value)}
                        defaultValue={formattedDate}/>
                </Form.Field>

                <Form.Field>
                    <input 
                        className="mt-3 form-control"
                        placeholder='Paid'
                        onChange={(e) => setPaid(e.target.value)}
                        value={paid}/>
                </Form.Field>

                <Button
                    type='submit'
                    onClick={putData}
                    className="mt-3 btn btn-primary">
                    Submit
                </Button>

            </Form>

        </div>
    )
}


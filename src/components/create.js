import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';


export default function Create() {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [dueDate, setDueDate] = useState('');
    
    const postData = () => {
        axios.post('https://638ea6b24ddca317d7e3089a.mockapi.io/api/v1/debts/', {
            description,
            category,
            price,
            dueDate
    })}


    return (
        <div>
            <div>
                <h2 className="fs-2 mb-3"> Create a debt</h2>
            </div>
            <Form className="create-form">
                <Form.Field>
                    <input className="form-control" placeholder='Description'
                    onChange={(e) => setDescription(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <input className="mt-3 form-control" placeholder='Category'
                    onChange={(e) => setCategory(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <input className="mt-3 form-control" placeholder='Price'
                    onChange={(e) => setPrice(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <input className="mt-3 form-control" placeholder='Due date'
                    onChange={(e) => setDueDate(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={postData}className="mt-3 btn btn-primary"> Submit</Button>
            </Form>
        </div>
    )
}


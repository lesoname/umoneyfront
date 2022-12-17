import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import DatePicker from 'react-date-picker';

export default function Create() {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [due_date, setDueDate] = useState(new Date());
    const [user_id, setUserId] = useState('');
    
    const postData = () => {
        axios.post('http://127.0.0.1:3000/api/v1/debts/', {
            description,
            category,
            price,
            due_date,
            user_id
    })}


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
                    <DatePicker
                        className="mt-3 form-control"
                        value={due_date}
                        onChange={handleChangeDate}
                    />
                </Form.Field>
                <Form.Field>
                    <input className="mt-3 form-control" placeholder='User Id'
                    onChange={(e) => setUserId(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={postData}className="mt-3 btn btn-primary">
                    Submit
                </Button>
            </Form>

        </div>
    )
}


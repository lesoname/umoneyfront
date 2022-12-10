import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';


export default function Update() {
    const [id, setID] = useState(null);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [dueDate, setDueDate] = useState('');
    
    useEffect(() => {
        setID(localStorage.getItem('Id'))
        setDescription(localStorage.getItem('Description'));
        setCategory(localStorage.getItem('Category'));
        setPrice(localStorage.getItem('Price'));
        setDueDate(localStorage.getItem('Due Date'));
    }, []);

    
    const updateAPIData = () => {
        axios.put('https://638ea6b24ddca317d7e3089a.mockapi.io/api/v1/{id}', {
            description,
            category,
            price,
            dueDate
        })
    }



    return (
        <div>
            <div>
                <h2 className="fs-2 mb-3"> Update a debt</h2>
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
                    <input className="mt-3 form-control"
                    placeholder='Due date'
                    onChange={(e) => setDueDate(e.target.value)}
                    value={dueDate}/>
                </Form.Field>

                <Button type='submit' onClick={updateAPIData}className="mt-3 btn btn-primary"> Submit</Button>
            
            </Form>
        </div>
    )
}


import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import { Button, Form } from 'semantic-ui-react'


export default function Create() {
    const [firstName, setFirstName] = useState(''); // eslint-disable-line no-unused-vars
    const [lastName, setLastName] = useState(''); // eslint-disable-line no-unused-vars
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label></label>
                    <input class="form-control" placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label ></label>
                    <input class="form-control" placeholder='Last Name' />
                </Form.Field>
                <Button class="mt-4 btn btn-primary" type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
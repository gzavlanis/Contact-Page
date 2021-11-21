import {useState} from 'react';
import {useForm} from 'react-hook-form';
import React from 'react';
import {Form, P, Body, Input, Select} from './FormStyles';

const Form1= ()=> {
    const {register, handleSubmit} = useForm();
    const [result, setResult] = useState('');
    const onSubmit = (data) => setResult(JSON.stringify(data));
    return(
        <Body>
            <h1 style={{color: '#120632', textAlign: "center"}}>Επικοινωνήστε μαζί μας</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('firstName')} placeholder= 'Όνομα'/>
                <Input {...register('lastName')} placeholder= 'Επώνυμο'/>
                <Input {...register('email')} placeholder= 'E-mail'/>
                <Select {...register('category')}>
                    <option value=''>Επιλέξτε...</option>
                    <option value='A'>Επιλογή Α</option>
                    <option value= 'B'>Επιλογή Β</option>
                </Select>
                <P>{result}</P>
                <input type='submit'/>
            </Form>
        </Body>
    )
}
export default Form1;